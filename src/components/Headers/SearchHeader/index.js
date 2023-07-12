import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import TextWrapper from '../../../components/TextWrapper';
import styles from './styles';
import {generalImages, icons} from '../../../assets/images';
import theme from '../../../utils/theme';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const SearchHeader = props => {
  const navigation = useNavigation();
  const cartReducer = useSelector(state => state.cartReducer);

  const renderHeaderButton = () => {
    if (props.type === 'drawer') {
      return (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.drawerButtonView}>
          <Image source={icons.drawer} style={styles.drawerIconStyle} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.drawerButtonView}>
          <Image
            source={icons.leftArrow}
            style={[
              styles.drawerIconStyle,
              {
                tintColor: props?.tintColor
                  ? props?.tintColor
                  : theme.whiteBackground,
              },
            ]}
          />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={[styles.searchView, props.style]}>
      {renderHeaderButton()}

      {props.product ? (
        <Text style={[props.style]}>{props.title}</Text>
      ) : (
        <TextWrapper
          numberOfLines={2}
          style={[styles.searchTextStyle, props.style]}>
          {props.title}
        </TextWrapper>
      )}
      <View style={styles.searchIconsView}>
        {props.title == 'Privacy Policy' ||
        props.title == ' Terms & Conditions' ? (
          <></>
        ) : (
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
        )}

        <TouchableOpacity
          onPress={() => {
            props.filter
              ? navigation.navigate('FilterScreen')
              : navigation.navigate('TypeSearchScreen');
          }}
          style={styles.searchIconButtonView}>
          {props.filter ? (
            <Image style={styles.searchIconStyle} source={icons.filter} />
          ) : null}
        </TouchableOpacity>

        {props.type ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('FilterScreen')}
            style={[styles.searchIconButtonView, styles.extraIconStyle]}>
            <Image style={styles.searchIconStyle} source={icons.filter} />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default SearchHeader;
