import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {generalImages, icons} from '../../../assets/images';
import {vh, vw} from '../../../units';
import TextWrapper from '../../TextWrapper';
import theme from '../../../utils/theme';
import {useUpdateCartHook} from '../../../hooks/useUpdateCartHook';

const OrderItemsContainer = props => {
  const [updateCartState, updateCartFunc] = useUpdateCartHook();

  const incrementValue = () => {
    const data = {
      id: props?.data?.product_id,
      quantity: props?.quantity + 1,
    };
    updateCartFunc(data);
  };

  const decrementValue = () => {
    if (props?.quantity == 1) {
      props?.onPress();
    } else {
      const data = {
        id: props?.data?.product_id,
        quantity: props?.quantity - 1,
      };
      updateCartFunc(data);
    }
  };

  const handleImage = () => {
    if (props?.data?.product_image) {
      return {uri: props?.data?.product_image};
    } else return generalImages?.placeholderImage;
  };

  return (
    <View style={styles.mainCardView}>
      <View style={styles.containerView}>
        <View style={styles.searchItemView}>
          <Image
            source={handleImage()}
            // source={{uri: props?.data?.product_image}}
            // source={generalImages?.placeholderImage}
            style={styles.searchedItemStyle}
          />
        </View>

        <View style={styles.amountView}>
          <View style={{width: 35 * vw}}>
            <TextWrapper style={styles.itemNameTextStyle}>
              {props.data?.product_name}
            </TextWrapper>
            <TextWrapper style={styles.amountTextStyle}>
              ${Number(props?.data?.product_price).toFixed(2)}
            </TextWrapper>
            {/* <TextWrapper style={styles.categoryGenderTextStyle}>
              Women
            </TextWrapper> */}

            <View style={styles.amountValueView}>
              <TouchableOpacity
                onPress={decrementValue}
                style={styles.decreaseAmountView}>
                <TextWrapper style={styles.decrementTextStyle}>-</TextWrapper>
              </TouchableOpacity>
              <View style={styles.valueView}>
                <TextWrapper style={styles.valueTextStyle}>
                  {/* {props.data?.quantity ? props.data?.quantity : amountValue} */}
                  {props?.quantity}
                </TextWrapper>
              </View>
              <TouchableOpacity
                onPress={incrementValue}
                style={styles.increaseAmountView}>
                <TextWrapper style={styles.icrementTextStyle}>+</TextWrapper>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.amountTextView}>
            <View style={styles.productAmountView}></View>

            <TouchableOpacity
              onPress={props?.onPress}
              style={styles.deleteButtonView}>
              <Image source={icons.delete} style={styles.deleteIconStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCardView: {
    justifyContent: 'center',
    marginTop: 3 * vh,
  },

  amountTextView: {
    alignItems: 'center',
    marginLeft: 8 * vw,

    width: vw * 15,
  },

  searchedItemStyle: {
    resizeMode: 'contain',
    height: 15 * vh,
    width: 32 * vw,
    borderRadius: Platform.OS === 'android' ? vw * 4 : vw * 7,
    marginLeft: vw * 3,
  },
  productAmountView: {
    width: vw * 20,
    alignItems: 'center',
  },
  searchItemView: {
    width: vw * 40,
    padding: vw * 0.5,
  },

  containerView: {
    flexDirection: 'row',
  },

  amountView: {
    flexDirection: 'row',
    width: 50 * vw,
    justifyContent: 'space-between',
    marginTop: 2 * vh,
  },

  itemNameTextStyle: {
    fontFamily: Fonts.BMB,
    fontSize: 2.2 * vh,
  },

  categoryGenderTextStyle: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 2 * vh,
    marginTop: 1 * vh,
    fontFamily: Fonts.OR,
  },

  descriptionTextStyle: {
    fontFamily: Fonts.SFD,
    fontSize: 1.5 * vh,
    fontWeight: 'bold',
    marginTop: 0.5 * vh,
  },

  textDescriptionView: {
    width: 50 * vw,
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.5 * vh,
    marginTop: 1.5 * vh,
  },

  textStyle: {
    color: theme.defaultInactiveBorderColor,
  },

  amountTextStyle: {
    color: theme.defaultForgotPasswordColor,
    fontSize: 1.7 * vh,
    fontFamily: Fonts.OB,
    width: vw * 15,
  },

  cartGreenIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  heartIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  mainButtonsView: {
    flexDirection: 'row',
    marginTop: 0.5 * vh,
  },

  heartIconView: {
    marginLeft: 4 * vw,
  },

  amountValueView: {
    backgroundColor: 'lightgray',
    width: 25 * vw,
    height: 4 * vh,
    // borderRadius: 1 * vw,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 1 * vh,
  },

  increaseAmountView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },

  valueView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },

  valueTextStyle: {
    fontSize: 1.8 * vh,
  },

  decreaseAmountView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },
  decrementTextStyle: {
    fontSize: 2.5 * vh,
  },

  deleteIconStyle: {
    resizeMode: 'contain',
    height: 9 * vw,
    width: 9 * vw,
  },

  deleteButtonView: {
    top: 2 * vh,
  },
});

export default OrderItemsContainer;
