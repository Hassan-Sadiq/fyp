import React, {useState} from 'react';

import {Text, View, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';

import SearchHeader from '../../../components/Headers/SearchHeader';

import {icons} from '../../../assets/images';

import styles from './styles';
import theme from '../../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import {showToast} from '../../../redux/Api/HelperFunction';

const TypeSearchScreen = props => {
  // console.log(props?.route?.params?.ranges, 'propsSearch')

  const navigation = useNavigation();
  const [searchedItem, setSearchedItem] = useState();
  // const [min, setMin] = useState(props?.route?.params?.ranges[0]);
  // const [max, setMax] = useState(props?.route?.params?.ranges[1]);

  const onHandleSearchItem = () => {
    if (searchedItem) {
      navigation.navigate('SearchScreen', {
        item: searchedItem,
      });
    } else {
      showToast('Please enter product name');
    }
  };

  const onClearText = () => {
    setSearchedItem(null);
  };
  const renderSearchBox = () => {
    return (
      <View style={styles.mainSearchBoxView}>
        <TouchableOpacity
          onPress={onHandleSearchItem}
          style={styles.searchIconViewStyle}>
          <Image style={styles.searchIconStyle} source={icons.search} />
        </TouchableOpacity>

        <View style={styles.textInputView}>
          <TextInput
            value={searchedItem}
            onChangeText={text => setSearchedItem(text)}
            placeholder="Search"
            placeholderTextColor={theme.defaultForgotPasswordColor}
            onSubmitEditing={onHandleSearchItem}
            style={styles.textInputStyle}
          />
        </View>

        {searchedItem ? (
          <TouchableOpacity onPress={onClearText} style={styles.crossIconView}>
            <Image style={styles.crossIconStyle} source={icons.cross} />
          </TouchableOpacity>
        ) : (
          <View style={styles.crossIconView}></View>
        )}
      </View>
    );
  };
  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      {/* <SearchHeader
        style={styles.searchHeaderStyle}
        tintColor={theme.defaultBackgroundColor}
        title="Search"
        filter="false"
      /> */}
      {renderSearchBox()}
    </ScrollWrapper>
  );
};
export default TypeSearchScreen;
