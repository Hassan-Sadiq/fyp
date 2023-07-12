import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
  Platform,
} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

import {icons} from '../../../assets/images';

import TextWrapper from '../../../components/TextWrapper';

import CartContainer from '../../../components/Containers/CartContainer';

import styles from './styles';

import {useListWishlistHook} from '../../../hooks/useListWishlistHook';
import {useFocusEffect} from '@react-navigation/core';

import {useSelector} from 'react-redux';
import {vh, vw} from '../../../units';

import {DrawerActions, useNavigation} from '@react-navigation/native';

import ProductsContainer from '../../../components/Containers/ProductsContainer';
import MainContainer from '../../../components/Containers/MainContainer';
import theme from '../../../utils/theme';

const WishlistScreen = props => {
  const loggedIn = useSelector(state => state.authReducer.loggedin);
  const cartReducer = useSelector(state => state.cartReducer);

  const navigation = useNavigation();
  const wishlistItems = useSelector(
    state => state.wishlistReducer.wishlistItems,
  );
  const [refreshing, setRefreshing] = useState(false);

  const [wishlistProductsState, listWishlistProductFunc] =
    useListWishlistHook();
  useFocusEffect(
    useCallback(() => {
      listWishlistProductFunc(wishlistItems);
    }, [wishlistItems]),
  );

  const onRefresh = () => {
    setRefreshing(true);
    listWishlistProductFunc(wishlistItems);
    setRefreshing(false);
  };

  const renderSearchHeader = () => {
    return (
      <View style={styles.searchView}>
        <View style={styles.rowContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={styles.leftArrowIconButton}>
              <Image source={icons.drawer} style={styles.leftArrowIconStyle} />
            </TouchableOpacity>
            <TextWrapper style={styles.searchTextStyle}>WishList</TextWrapper>
          </View>
          <View style={styles.subContainerTwoStyle}>
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
        </View>
      </View>
    );
  };

  const renderListView = ({item}) => {
    return (
      <View style={styles.renderListViewStyles}>
        {/* <CartContainer filled={true} data={item} /> */}
        <ProductsContainer filled={true} data={item} />
      </View>
    );
  };

  const renderListEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponentView}>
        <TextWrapper style={{color: theme.black}}>
          No Items are available
        </TextWrapper>
      </View>
    );
  };

  const renderWishFlatList = () => {
    return (
      <View
        style={{
          bottom: vh * 35,
          alignItems: 'center',
        }}>
        <FlatList
          data={wishlistProductsState}
          renderItem={renderListView}
          contentContainerStyle={{paddingBottom: vh * 35}}
          style={styles.listView}
          ListEmptyComponent={renderListEmptyComponent}
          numColumns={2}
          refreshing={refreshing}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View
      style={Platform.OS === 'android' ? styles.mainView : styles.mainViewIOS}>
      {/* {renderSearchHeader()} */}

      {renderWishFlatList()}
    </View>
  );
};
export default WishlistScreen;
