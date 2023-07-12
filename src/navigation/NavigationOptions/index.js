import React from 'react';
import {Image, TouchableOpacity, View, Text, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {vh, vw} from '../../units';
import theme from '../../utils/theme';
import TextWrapper from '../../components/TextWrapper';
import styles from './styles';
import {icons} from '../../assets/images';

const getTitle = {
  FilterScreen: 'FilterScreen',
  TypeSearchScreen: 'TypeSearchScreen',
  SearchScreen: 'SearchScreen',
  CategoryScreen: 'CategoryScreen',
  ProductsScreen: 'ProductsScreen',
  AboutScreen: 'AboutScreen',
  WishlistScreen: 'WishlistScreen',
  ProductDetailsScreen: 'ProductDetailsScreen',
  ProfileScreen: 'ProfileScreen',
  EditProfile: 'EditProfile',
  RequestDeleteScreen: 'RequestDeleteScreen',
  HomeScreen: 'HomeScreen',
  ViewOrderScreen: 'ViewOrderScreen',
  OrderDetailsScreen: 'OrderDetailsScreen',
  BasketScreen: 'BasketScreen',
  CheckoutScreen: 'CheckoutScreen',
  OrderAcceptedScreen: 'OrderAcceptedScreen',
  EditCardsScreen: 'EditCardsScreen',
};

const titleRoutes = {
  FilterScreen: 'Filter',
  TypeSearchScreen: 'Search',
  SearchScreen: 'Search',
  CategoryScreen: 'Category',
  ProductsScreen: 'Products',
  WishlistScreen: 'Wishlist',
  ProductDetailsScreen: 'Product Detail',
  ProfileScreen: 'My Profile',
  EditProfile: 'Edit Profile',
  RequestDeleteScreen: 'Request Delete Form',
  ViewOrderScreen: 'My Orders',
  OrderDetailsScreen: 'Order Details',
  BasketScreen: 'Shopping Basket',
  CheckoutScreen: 'Checkout',
  EditCardsScreen: 'EditCardsScreen',
  EntertainmentScreen: 'EntertainmentScreen',
};

const backButtonRoutes = {
  FilterScreen: 'FilterScreen',
  TypeSearchScreen: 'TypeSearchScreen',
  SearchScreen: 'SearchScreen',
  CategoryScreen: 'CategoryScreen',
  ProductsScreen: 'ProductsScreen',
  AboutScreen: 'AboutScreen',
  ProductDetailsScreen: 'ProductDetailsScreen',
  OrderDetailsScreen: 'OrderDetailsScreen',
  RequestDeleteScreen: 'RequestDeleteScreen',
  HomeScreen: 'HomeScreen',
  OrderDetailsScreen: 'OrderDetailsScreen',
  BasketScreen: 'BasketScreen',
  EditProfile: 'EditProfile',
  CheckoutScreen: 'CheckoutScreen',
  OrderAcceptedScreen: 'OrderAcceptedScreen',
  EditCardsScreen: 'EditCardsScreen',
  EntertainmentScreen: 'EntertainmentScreen',
  PlaceOrder: 'PlaceOrder',
};

const drawerButtonRoutes = {
  WishlistScreen: 'WishlistScreen',
  ProfileScreen: 'ProfileScreen',
  ViewOrderScreen: 'ViewOrderScreen',
};
const cartButtonRoutes = {
  CategoryScreen: 'CategoryScreen',
  ProductsScreen: 'ProductsScreen',
  ProductDetailsScreen: 'ProductDetailsScreen',
  FilterScreen: 'FilterScreen',
  SearchScreen: 'SearchScreen',
  TypeSearchScreen: 'TypeSearchScreen',
  WishlistScreen: 'WishlistScreen',
  ViewOrderScreen: 'ViewOrderScreen',
};

const searchButtonRoutes = {
  FilterScreen: 'FilterScreen',
};

const filterButtonRoutes = {
  SearchScreen: 'SearchScreen',
  TypeSearchScreen: 'TypeSearchScreen',
};

const profileRoutes = {
  ProfileScreen: 'ProfileScreen',
  EditProfile: 'EditProfile',
};
const menuRoutes = {
  WishlistScreen: 'WishlistScreen',
  TermsConditionScreen: 'TermsConditionScreen',
};

const heartButtonRoutes = {
  ProductDetailsScreen: 'Product Detail',
};

const shopRoutes = {
  CategoryScreen: 'CategoryScreen',
  ProductsScreen: 'ProductsScreen',
  ProductDetailsScreen: 'ProductDetailsScreen',
};

const cartRoutes = {
  BasketScreen: 'BasketScreen',
  CheckoutScreen: 'CheckoutScreen',
  ViewOrderScreen: 'ViewOrderScreen',
  OrderDetailsScreen: 'OrderDetailsScreen',
};

const homeMainRoutes = {
  Home: 'Home',
};

const homeRoutes = {
  HomeScreen: 'HomeScreen',
  TypeSearchScreen: 'TypeSearchScreen',
  SearchScreen: 'SearchScreen',
  CategoryScreen: 'CategoryScreen',
  ProductsScreen: 'ProductsScreen',
};

const navigationOptions = navProps => {
  return {
    headerTitle: () => renderHeaderTitle(navProps),
    headerLeft: () => renderHeaderLeft(navProps),
    headerRight: () => renderHeaderRight(navProps),
    headerTitleAlign: 'center',

    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
    headerStyle: getHeaderStyle(navProps),
    headerBackground: props => HeaderBackground(navProps),
    headerBackVisible: false,
  };
};

const HeaderBackground = props => {
  return <View></View>;
};

const getHeaderStyle = props => {
  return {
    // backgroundColor: theme.whiteBackground,
    // paddinTop: vh * 4,
  };
};

const renderHeaderTitle = props => {
  const navigation = useNavigation();

  if (
    getTitle[props.route.name] === 'ProfileScreen' ||
    getTitle[props.route.name] === 'EditProfile' ||
    drawerButtonRoutes[props.route.name] === 'ViewOrderScreen' ||
    backButtonRoutes[props.route.name] === 'OrderDetailsScreen'
  ) {
    return (
      <Text
        style={[
          styles.searchTextStyle,
          Platform.OS === 'ios' ? {width: '100%'} : {},
          props.route.name !== 'CategoryScreen'
            ? {
                marginRight: Platform.OS === 'android' ? vw * 44 : vw * 50,
              }
            : {},
        ]}>
        {titleRoutes[props.route.name]}
      </Text>
    );
  }
  if (getTitle[props.route.name]) {
    return (
      <TextWrapper
        numberOfLines={2}
        style={[
          styles.searchTextStyle,
          Platform.OS === 'ios' ? {width: '100%'} : {},
          props.route.name !== 'CategoryScreen'
            ? {
                marginRight: vw * 60,
              }
            : {},
        ]}>
        {titleRoutes[props.route.name]}
      </TextWrapper>
    );
  }
};

const renderHeaderLeft = props => {
  const navigation = useNavigation();

  if (backButtonRoutes[props.route.name]) {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.drawerButtonView}>
        <Image
          source={icons.leftArrow}
          style={[
            styles.drawerIconStyle,
            {
              tintColor: theme.black,
            },
          ]}
        />
      </TouchableOpacity>
    );
  }

  if (drawerButtonRoutes[props.route.name]) {
    return (
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.drawerButtonView}>
        <Image source={icons.drawer} style={styles.drawerIconStyle} />
      </TouchableOpacity>
    );
  }
};

const renderHeaderRight = props => {
  const cartReducer = useSelector(state => state.cartReducer);
  const navigation = useNavigation();

  if (
    profileRoutes[props.route.name] ||
    drawerButtonRoutes[props.route.name] === 'ViewOrderScreen' ||
    backButtonRoutes[props.route.name] === 'OrderDetailsScreen'
  ) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('BasketScreen')}
          style={styles.headerIconButton}>
          <Image source={icons.cart} style={styles.cartIconStyle} />
          {cartReducer?.cartItems?.length > 0 ? (
            <View style={styles.cartBubbleView}>
              <TextWrapper style={styles.cartBubbleIconStyle}>
                {cartReducer?.cartItems?.length}
              </TextWrapper>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }

  if (
    searchButtonRoutes[props.route.name] === cartButtonRoutes[props.route.name]
  ) {
    return (
      <View style={styles.filterScreenStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BasketScreen')}
          style={styles.headerIconButton}>
          <Image source={icons.cart} style={styles.cartIconStyle} />
          {cartReducer?.cartItems?.length > 0 ? (
            <View style={styles.cartBubbleView}>
              <TextWrapper style={styles.cartBubbleIconStyle}>
                {cartReducer?.cartItems?.length}
              </TextWrapper>
            </View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TypeSearchScreen');
          }}
          style={styles.searchIconButtonView}>
          <Image style={styles.searchIconStyle} source={icons.search} />
        </TouchableOpacity>
      </View>
    );
  }

  if (
    filterButtonRoutes[props.route.name] === cartButtonRoutes[props.route.name]
  ) {
    return (
      <View style={styles.filterScreenStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BasketScreen')}
          style={styles.headerIconButton}>
          <Image source={icons.cart} style={styles.cartIconStyle} />
          {cartReducer?.cartItems?.length > 0 ? (
            <View style={styles.cartBubbleView}>
              <TextWrapper style={styles.cartBubbleIconStyle}>
                {cartReducer?.cartItems?.length}
              </TextWrapper>
            </View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FilterScreen');
          }}
          style={styles.searchIconButtonView}>
          <Image style={styles.searchIconStyle} source={icons.filter} />
        </TouchableOpacity>
      </View>
    );
  }

  if (cartButtonRoutes[props.route.name]) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('BasketScreen')}
        style={styles.headerIconButton}>
        <Image source={icons.cart} style={styles.cartIconStyle} />
        {cartReducer?.cartItems?.length > 0 ? (
          <View style={styles.cartBubbleView}>
            <TextWrapper style={styles.cartBubbleIconStyle}>
              {cartReducer?.cartItems?.length}
            </TextWrapper>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }
};

export default navigationOptions;
