import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {generalImages, icons} from '../../../assets/images';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';

import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import SearchHeader from '../../../components/Headers/SearchHeader';
import {getEntertainment} from '../../../redux/actions/productsActions';
import theme from '../../../utils/theme';

import {useDispatch} from 'react-redux';

const EntertainmentScreen = props => {
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [categories, setCategories] = useState([]);
  const [entertainment, setEntertainment] = useState([]);

  useEffect(() => {
    // handleOnGetCategories();
    handleEntertainment();
  }, []);

  // const handleOnGetCategories = () => {
  //   console.log('handleOnGetCategories categories: ', categories);
  //   dispatch(getProductsCategories(pageNo))
  //     .then(response => {
  //       console.log('handleOnGetCategories reponse: ', response);
  //       if (Array.isArray(response)) {
  //         const newCategories = [...categories];
  //         response.map(val => {
  //           newCategories.push(val);
  //         });
  //         setPageNo(pageNo + 1);
  //         console.log(
  //           'handleOnGetCategories updated categories: ',
  //           newCategories,
  //         );
  //         setCategories(newCategories); //categories.concat(response)
  //       }
  //     })
  //     .catch(e => {
  //       console.log(e, 'error');
  //     });
  // };

  const handleEntertainment = () => {
    dispatch(getEntertainment()).then(response => {
      setEntertainment(response);
    });
  };

  console.log(entertainment, 'entertainment');

  const renderCategoriesView = ({item}) => {
    const handleCategoriesImages = () => {
      if (item?.image == null) {
        return generalImages.placeholderImage;
      } else {
        return {uri: item?.image};
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
    return (
      <View style={styles.flatListView}>
        <FlatList
          data={entertainment}
          initialNumToRender={10}
          renderItem={renderCategoriesView}
          // onEndReached={() => handleOnGetCategories()}
          keyExtractor={(item, index) => item.id + index + Math.random()}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.whiteBackground,
      }}>
      <SearchHeader
        tintColor={theme.defaultBackgroundColor}
        title="Entertainment"
        type="drawer"
      />
      {renderCategoriesList()}
    </View>
  );
};
export default EntertainmentScreen;
