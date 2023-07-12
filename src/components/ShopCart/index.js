import React from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {icons} from '../../assets/images';
// import GradientButton from '../../components/GradientButton';
import TextWrapper from '../../components/TextWrapper';
import styles from './styles';

const ShopCart = props => {
  return (
    <View style={styles.cardView}>
      {props.hideBtns ? null : (
        <TouchableOpacity
          style={styles.imgView}
          onPress={props?.navigateToDetails}>
          <Image
            resizeMode={'cover'}
            source={props.prodImage}
            style={styles.cardImg}
          />
        </TouchableOpacity>
      )}

      <View style={styles.prodDescView}>
        <View
          style={{...styles.descView, width: props.hideBtns ? '85%' : '65%'}}>
          <TextWrapper
            numberOfLines={props.hideBtns ? 4 : 4}
            style={{...styles.descProdTxt, ...props.descProdTxt}}>
            {props.description}
          </TextWrapper>
          <TextWrapper style={styles.prodPriceTxt}>
            {props.price}
          </TextWrapper>
        </View>

        {props.hideBtns ? null : (
          <View style={styles.actionView}>
            <TouchableOpacity
              style={styles.roundRemove}
              onPress={props.onPressRemove}>
              <Image source={icons.remove} style={styles.removeProdTxt} />
            </TouchableOpacity>

            <TextWrapper style={styles.cartCountTxt}>
              {props.count}
            </TextWrapper>

            <TouchableOpacity
              style={styles.roundAdd}
              onPress={props.onPressAdd}>
              <Image source={icons.add} style={styles.addProdTxt} />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.addTo}>
          {/* {props.hideBtns ? null : (
            <GradientButton
              isIcon
              style={styles.gradBtn}
              onPress={props.onPress}>
              <Image source={icons.delete} style={styles.delete} />
            </GradientButton>
          )} */}
        </View>
      </View>
    </View>
  );
};

export default ShopCart;
