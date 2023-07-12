import React, {useEffect, useState, useMemo} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {generalImages, icons} from '../../../assets/images';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

import SearchHeader from '../../../components/Headers/SearchHeader';
import {getProductsCategories} from '../../../redux/actions/productsActions';
import theme from '../../../utils/theme';

import {useDispatch} from 'react-redux';
import {vh} from '../../../units';

const CategoryScreen = props => {
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [categories, setCategories] = useState([]);
  const [fetchMore, setFetchMore] = useState(true);
  const [isloading, setloading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    const noloader = false;

    dispatch(getProductsCategories(pageNo, false))
      .then(response => {
        console.log('response from get Data ====>', response);
        setCategories(response);
        setPageNo(pageNo + 1);
        setRefresh(false);
      })
      .catch(err => {
        setRefresh(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOnGetCategories = () => {
    console.log('Is loading ==========>', isloading);

    if (fetchMore) {
      !isloading && setloading(true);
      // setloading(true)

      dispatch(getProductsCategories(pageNo, true))
        .then(response => {
          if (Array.isArray(response)) {
            console.log('response length ===>', response.length);
            if (response.length == 0) {
              setFetchMore(false);
            }
            setloading(false);
            setPageNo(pageNo + 1);
            // response.length <= 0 && setFetchMore(false);
            const newCategories = [...categories, ...response];
            // response.map((val) => {
            //   newCategories.push(val)
            // })

            setCategories(newCategories); //categories.concat(response)
            // setProductsFetch(true)
          }
        })
        .catch(e => {
          setloading(false);
          console.log(e, 'error');
        });
    }
  };
  console.log('Page no ===========>', pageNo);
  const renderFooter = () => {
    if (isloading) {
      return (
        <View style={{height: vh * 10}}>
          {console.log('Data from Render Footer')}
          <ActivityIndicator size="large" color="#BF47AC" />
        </View>
      );
    } else {
      return null;
    }
  };

  // const handleNavigateProductCategory = (id, name) => {
  //   try {
  //     dispatch(UpdateProductName(name)).then(() => {
  //       props.navigation.navigate('ProductsScreen', {
  //         categoryId: id,
  //         categoryName: name,
  //       });
  //     });
  //   } catch (e) {
  //     showToast(e);
  //   }
  // };

  const renderCategoriesView = ({item}) => {
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
        }>
        <ImageBackground
          source={handleCategoriesImages()}
          // source={generalImages.categoryBackground2}
          imageStyle={{}}
          style={styles.imageBackgroundStyle}>
          <LinearGradient
            colors={['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.8)']}
            style={styles.linearGradient}>
            <View style={styles.sliderDescriptionView}>
              <View style={styles.sliderTextView}>
                <TextWrapper style={styles.sliderTextStyle} numberOfLines={2}>
                  {item.name}
                </TextWrapper>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderCategoriesList = () => {
    return <View style={styles.flatListView}></View>;
  };

  const refreshHandler = () => {
    setRefresh(true);
    getData();
  };

  return (
    // <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* <SearchHeader tintColor={theme.defaultBackgroundColor} title="Category" /> */}

      <View style={{flex: 1}}>
        <FlatList
          data={categories}
          initialNumToRender={10}
          renderItem={renderCategoriesView}
          onEndReachedThreshold={0.8}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index + Math.random()}
          key={'hell'}
          // ListFooterComponent={renderFooter}
          refreshing={isloading}
          onRefresh={handleOnGetCategories}
          onEndReached={handleOnGetCategories}
        />
      </View>
    </View>
    // {/* </ScrollWrapper> */ }
  );
};
export default CategoryScreen;
