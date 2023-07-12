import React, {useState, useCallback} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import {generalImages, icons} from '../../../assets/images';
import {vh, vw} from '../../../units';
import WishlistContainer from '../../../components/Containers/WishlistContainer';

import styles from './styles';

import {useAddToCartHook} from '../../../hooks/useAddToCartHook';
import {useNavigation} from '@react-navigation/native';
import theme from '../../../utils/theme';
import {color} from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ProductsContainer = props => {
  const navigation = useNavigation();
  const [cartState, addToCartFunc] = useAddToCartHook();

  const handleAddToCart = () => {
    const data = {
      itemId: props?.data?.id,
      itemName: props?.data?.name,
      itemPrice: props?.data?.price,
      itemQuantity: 1,
      itemImage: props?.data?.images[0]?.src,
    };
    if (props?.data?.attributes) {
      let Size = props?.data?.attributes.find(
        val => val.name == 'Size' || val.name == 'Size:',
      );
      if (Size) {
        navigation.navigate('ProductDetailsScreen', {
          params: props?.data?.id,
        });
      } else {
        addToCartFunc(data);
      }
    } else {
      addToCartFunc(data);
    }
  };

  const handleProductImage = () => {
    if (props?.data?.images[0] == null) {
      return generalImages.placeholderImage;
    } else {
      return {uri: props?.data?.images[0]?.src};
    }
  };

  const renderRecommended = () => {
    return (
      <TouchableOpacity
        style={styles.mainProductView}
        onPress={() =>
          navigation.navigate('ProductDetailsScreen', {
            params: props?.data.id,
          })
        }>
        <View
          style={{
            width: 40 * vw,
            // backgroundColor: theme.whiteBackground,
            borderRadius: vh * 2,
          }}>
          <Image
            defaultSource={generalImages.placeholderImage}
            source={handleProductImage()}
            style={styles.productImageStyle}
          />
        </View>

        <View style={styles.cartView}>
          <View style={styles.cartTextView}>
            <TextWrapper style={styles.cartTextStyle}>
              {props?.data?.name}
            </TextWrapper>
          </View>
          <TouchableOpacity
            onPress={handleAddToCart}
            style={styles.cartGreenView}>
            <Image source={icons.cartGreen} style={[styles.cartGreenStyle]} />
          </TouchableOpacity>
        </View>

        <WishlistContainer
          data={props?.data}
          categoryCartViewStyle={styles.categoryCartViewStyle}
          cartTextView={styles.wishTextStyle}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      {renderRecommended()}
    </ScrollWrapper>
  );
};
export default ProductsContainer;
