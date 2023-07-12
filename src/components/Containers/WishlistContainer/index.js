import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../../assets/images';
import TextWrapper from '../../TextWrapper';
import {vh, vw} from '../../../units';
import theme from '../../../utils/theme';

import {useAddWishlistHook} from '../../../hooks/useAddWishlistHook';
import {useRemoveFromWishlistHook} from '../../../hooks/useRemoveFromWishlistHook';
import {useSelector} from 'react-redux';
import {Fonts} from '../../../assets/fonts';
import {EventRegister} from 'react-native-event-listeners';

const WishlistContainer = props => {
  const loggedIn = useSelector(state => state.authReducer.loggedin);

  const [wishlistState, wishlistFunc] = useAddWishlistHook();
  const [removeWishlistState, removeWishListFunc] = useRemoveFromWishlistHook();
  const [wishlistadded, setWishlistAdded] = useState(false);
  const [wishlistItemId, setWishlistItemId] = useState();
  const wishlistItems = useSelector(
    state => state.wishlistReducer.wishlistItems,
  );
  const wishlistFilled = () => {
    let WishListindex = wishlistItems.findIndex(x => x == props?.data?.id);
    if (WishListindex > -1) {
      // setWishlistAdded(true);
      return true;
    } else {
      // setWishlistAdded(false);
      return false;
    }
  };

  const handleWishlist = () => {
    const WishlistItemExist = wishlistItems.filter(x => x == props?.data?.id);

    if (WishlistItemExist?.length) {
      removeWishListFunc(props?.data?.id);
      setWishlistAdded(false);
    } else {
      if (loggedIn) {
        wishlistFunc(props?.data);
        setWishlistAdded(true);
      } else {
        EventRegister.emit('GUEST_POPUP_OPEN', true);
      }
    }
  };

  return (
    <View style={[styles.categoryCartView, props?.categoryCartViewStyle]}>
      <View style={[styles.cartTextView, props?.cartTextView]}>
        {!props.home ? (
          <TextWrapper
            style={[
              styles.cartCategoryTextStyle,
              props?.cartCategoryTextStyle,
            ]}>
            $ {props?.data?.price}
          </TextWrapper>
        ) : (
          <TextWrapper numberOfLines={1} style={styles.cartTextStyle}>
            {props?.data?.name}
          </TextWrapper>
        )}
      </View>
      <TouchableOpacity onPress={handleWishlist} style={styles.cartGreenView}>
        <Image
          source={wishlistFilled() ? icons.like : icons.heart}
          style={[styles.cartGreenStyle]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCartView: {
    flexDirection: 'row',
    width: 35 * vw,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginRight: 2 * vw,
    marginTop: 0.5 * vh,
  },

  cartTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartCategoryTextStyle: {
    color: theme.activeTextInputColor,
    fontSize: 1.4 * vh,
    marginTop: 0.5 * vh,
    fontWeight: 'bold',
    width: 24 * vw,
    // backgroundColor: 'red'
  },

  cartTextStyle: {
    fontSize: 1.4 * vh,
    marginTop: 0.5 * vh,
    fontFamily: Fonts.SFR,
    width: 24 * vw,
    color: theme.black,
  },

  cartGreenView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 6 * vw,
    height: 6 * vw,
    borderRadius: 6 * vw,
    borderWidth: 0.1,
    // width: 10 * vw
  },

  cartGreenStyle: {
    resizeMode: 'contain',
    height: 3.5 * vh,
    width: 3.5 * vw,
  },
});

export default WishlistContainer;
