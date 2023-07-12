import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  LayoutAnimation,
  ScrollView,
} from 'react-native';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import {generalImages, icons} from '../../../assets/images';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {vh, vw} from '../../../units';
import HomeSlider from '../../../components/Containers/HomeSlider';
import WishlistContainer from '../../../components/Containers/WishlistContainer';
import {DrawerActions, useFocusEffect} from '@react-navigation/native';

import {useSelector} from 'react-redux';

import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';

import {useProductsHook} from '../../../hooks/useProductsHook';
import {useProductsCategoriesHook} from '../../../hooks/useProductsCategoriesHook';
import {useHomeDataHook} from '../../../hooks/useHomeDataHook';
import {useFetchProfileHook} from '../../../hooks/useFetchProfileHook';
import {useAddToCartHook} from '../../../hooks/useAddToCartHook';
import theme from '../../../utils/theme';

import LinearGradient from 'react-native-linear-gradient';
import MainContainer from '../../../components/Containers/MainContainer';
import {Fonts} from '../../../assets/fonts';
import {showToast} from '../../../redux/Api/HelperFunction';

const HomeScreen = props => {
  const user = useSelector(state => state.authReducer?.user);
  const loggedIn = useSelector(state => state.authReducer.loggedin);

  const cartReducer = useSelector(state => state.cartReducer);
  const [listProducts, listProductsFunc, variationFlag] = useProductsHook();
  const [listProductsCategoriesState, listProductsCategoriesFunc] =
    useProductsCategoriesHook();
  const [homeDataState, homeDataFunc] = useHomeDataHook();
  const [profileState, profileFunc] = useFetchProfileHook();
  const [cartState, addToCartFunc] = useAddToCartHook();

  useEffect(() => {
    homeDataFunc();
    listProductsFunc();
    listProductsCategoriesFunc();
    if (loggedIn) {
      profileFunc(user);
    }
  }, []);

  console.log('====================================');
  console.log(
    'listProductsCategoriesState ==========> ',
    JSON.stringify(listProductsCategoriesState),
  );
  console.log('====================================');

  console.log('from Home variationFlag ==>', variationFlag);

  const handleAddToCart = item => {
    const data = {
      itemId: item?.id,
      itemName: item?.name,
      itemPrice: item?.price,
      itemQuantity: 1,
      itemImage: item?.images[0]?.src,
    };
    if (item?.attributes) {
      let Size = item?.attributes.find(
        val => val.name == 'Size' || val.name == 'Size:',
      );
      if (Size) {
        props?.navigation.navigate('ProductDetailsScreen', {
          params: item?.id,
        });
      } else {
        addToCartFunc(data);
      }
    } else {
      addToCartFunc(data);
    }

    console.log('item from handleAddToCart ===>', item);
  };

  const handleListProducts = val => {
    if (listProducts?.length < 4) {
      return listProducts;
    } else {
      const listOfProducts = listProducts?.slice(0, 4);
      console.log('ListoFproducts from Home =========>', listOfProducts);

      if (listOfProducts?.length < 3) {
        return listOfProducts;
      }

      if (val === 'a') {
        return listOfProducts?.slice(0, 3);
      }

      if (val === 'b') {
        return listOfProducts?.slice(3, 6);
      }
    }
  };

  const windowWidth = Dimensions.get('window').width;

  const [activeSlide, setActiveSlide] = useState(0);

  const renderCategoriesRow = () => {
    return (
      <View style={styles.rowForMainCategories}>
        <View style={styles.categoriesTextView}>
          <TextWrapper style={styles.categoriesTextStyle}>
            Categories
          </TextWrapper>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('CatgoriesStack')}
          style={styles.viewAllTextButtonView}>
          <TextWrapper style={styles.viewAllTextButton}>View All</TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCategories = ({item}) => {
    const handleCategoriesImages = () => {
      if (item?.image == null) {
        return generalImages.placeholderImage;
      } else {
        return {uri: item?.image?.src};
      }
    };
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('ProductsScreen', {
            categoryId: item?.id,
            categoryName: item.name,
          })
        }
        style={[styles.touchableButtonView]}>
        <LinearGradient
          colors={['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.8)']}
          style={styles.linearGradient}>
          <Image
            source={handleCategoriesImages()}
            style={styles.displayIconStyle}
          />
          <TextWrapper
            style={[
              styles.textStyle,
              {
                color:
                  item?.image == null
                    ? theme.whiteBackground
                    : theme.whiteBackground,
              },
            ]}>
            {item.name}
          </TextWrapper>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const renderListCategories = () => {
    return (
      <View
        style={{
          height: 20 * vh,
          bottom: 16 * vh,
          width: 100 * vw,
          marginLeft: vw * 24,
          marginRight: vw * 20,
        }}>
        <FlatList
          data={listProductsCategoriesState}
          renderItem={renderCategories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index + Math.random()}
        />
      </View>
    );
  };

  // const handleNavigateProducts = () => {
  //   try {
  //     dispatch(UpdateProductName('Products')).then(res => {
  //       props.navigation.navigate('ProductsScreen');
  //     });
  //   } catch (e) {
  //     showToast(e);
  //   }
  // };
  const renderRecommendedProducts = () => {
    return (
      <View style={styles.rowForArivalCategories}>
        <View style={styles.categoriesTextView}>
          <TextWrapper style={styles.categoriesTextStyle}>
            New Arrivals
          </TextWrapper>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('ProductsScreen')}
          style={styles.viewAllTextButtonView}>
          <TextWrapper style={styles.viewAllTextButton}>View All</TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderItem = ({item, index}) => {
    console.log('sliderDataProps Item ===>', item);
    return (
      <View style={styles.sliderView}>
        <HomeSlider
          onPress={() => props.navigation.navigate('CatgoriesStack')}
          data={item}
        />
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={homeDataState?.data?.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerStylePagination}
        dotStyle={styles.dotStylePagination}
        inactiveDotStyle={styles.inactiveDotStylePagination}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  const renderSlideBanner = () => {
    return (
      <View style={styles.sliderBannerView}>
        <Carousel
          data={homeDataState?.data}
          renderItem={_renderItem}
          sliderWidth={windowWidth + 1}
          itemWidth={100 * vw}
          layout="default"
          onSnapToItem={index => setActiveSlide(index)}
          keyExtractor={(item, index) => item.images + index}
          swipeThreshold={3}
          // autoplay={true}
          // loop={true}
          // enableMomentum={false}
          // lockScrollWhileSnapping={true}
          // autoplayDelay={1000}
          // enableSnap={true}
          // keyExtractor={(item, index) => item.id + index + Math.random()}
          // loop={true}
          // autoplay={true}
        />
        {pagination()}
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View style={styles.mainHeaderView}>
        <View style={styles.mainHeaderContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.dispatch(DrawerActions.toggleDrawer())
            }>
            <Image style={styles.drawerIconStyle} source={icons.lightDrawer} />
          </TouchableOpacity>
          <TextWrapper
            style={{
              fontFamily: Fonts.SFR,
              color: theme.whiteBackground,
              fontSize: vh * 2,
            }}>
            Welcome
          </TextWrapper>

          <View style={styles.headerContainer}>
            <TextWrapper style={styles.clothingStoreTextStyle}>
              Clothing Store!
            </TextWrapper>

            <View style={styles.buttonsView}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('TypeSearchScreen')}
                style={styles.headerIconButton}>
                <Image
                  source={icons.whiteSearch}
                  style={styles.searchIconStyle}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('BasketScreen')}
                style={styles.headerIconButton}>
                <Image source={icons.whiteCart} style={styles.cartIconStyle} />
                {cartReducer?.cartItems?.length > 0 ? (
                  <View style={styles.cartBubbleView}>
                    <TextWrapper style={styles.cartBubbleIconStyle}>
                      {cartReducer?.cartItems?.length}
                    </TextWrapper>
                  </View>
                ) : null}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('FilterScreen')}
                style={styles.headerIconButton}>
                <Image
                  source={icons.whiteFilter}
                  style={styles.filterIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderRecommended = ({item}) => {
    console.log('Item from renderRecommended------->', item);

    const handleProductImage = () => {
      if (item.images[0] == null) {
        return generalImages.placeholderImage;
      } else {
        return {uri: item.images[0].src};
      }
    };
    return (
      <TouchableOpacity
        style={styles.mainProductView}
        onPress={() =>
          props.navigation.navigate('ProductDetailsScreen', {
            params: item.id,
          })
        }>
        <View style={styles.productImageContainerStyle}>
          <Image
            source={handleProductImage()}
            style={styles.productImageStyle}
          />
        </View>

        <WishlistContainer
          data={item}
          categoryCartViewStyle={styles.categoryCartViewStyle}
          cartTextView={styles.cartTextStyle}
          home={true}
        />

        <View style={styles.cartView}>
          <View style={styles.cartTextView}>
            <TextWrapper style={[styles.cartCategoryTextStyle2]}>
              $ {item?.price}
            </TextWrapper>
          </View>
          <TouchableOpacity
            onPress={() => handleAddToCart(item)}
            style={styles.cartGreenView}>
            <Image
              source={icons.cartGreen}
              style={[
                styles.cartGreenStyle,
                {tintColor: theme.defaultBackgroundColor},
              ]}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRecommendedProductsList = data => {
    return (
      <View
        style={{
          width: 100 * vw,
          marginHorizontal: 10 * vw,
          bottom: 22 * vh,
          marginLeft: vw * 20,
          marginBottom: vh * 2,
        }}>
        <FlatList
          data={handleListProducts(data)}
          horizontal={true}
          renderItem={renderRecommended}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index + Math.random()}
          contentContainerStyle={{paddingRight: vw * 6}}

          // numColumns={2}
        />
      </View>
    );
  };

  // const renderMostPurchasedProducts = () => {
  //   return (
  //     <View style={styles.purchasedProductsView}>
  //       <FlatList
  //         data={handleListProducts()}
  //         renderItem={renderRecommended}
  //         horizontal={true}
  //         showsHorizontalScrollIndicator={false}
  //         keyExtractor={(item, index) => item.id + index + Math.random()}
  //       />
  //     </View>
  //   );
  // };

  return (
    <View
      style={{
        flex: 1,
      }}>
      {renderHeader()}
      {renderSlideBanner()}

      <ScrollWrapper
        style={styles.scroll}
        contentContainerStyle={styles.content}>
        {renderCategoriesRow()}
        {renderListCategories()}
        {renderRecommendedProducts()}
        {renderRecommendedProductsList('a')}
        {renderRecommendedProductsList('b')}
      </ScrollWrapper>
    </View>
  );
};
export default HomeScreen;
