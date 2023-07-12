import React, {useCallback, useState} from 'react';
import {View, FlatList, RefreshControl, Platform} from 'react-native';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';

import SearchHeader from '../../../components/Headers/SearchHeader';

import {useDispatch} from 'react-redux';

import {
  searchProducts,
  searchProductsWithFilters,
} from '../../../redux/actions/productsActions';

import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';

import ProductsContainer from '../../../components/Containers/ProductsContainer';
import {vh, vw} from '../../../units';
import theme from '../../../utils/theme';

const SearchScreen = props => {
  const dispatch = useDispatch();
  // console.log(props?.route?.params, 'propsSearchHERE');

  console.log(props?.route?.params?.ranges, 'newParams');

  const [searchedProduct, setSearchedProduct] = useState(
    props?.route?.params?.item,
  );

  const [minValue, setMinValue] = useState(
    props?.route?.params?.ranges ? props?.route?.params?.ranges[0] : 1,
  );
  const [maxValue, setMaxValue] = useState(
    props?.route?.params?.ranges ? props?.route?.params?.ranges[1] : 1000,
  );

  const [products, setProducts] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const fetchSearchedData = () => {
    props.navigation.setParams({gestureEnabled: false});
    setRefreshing(true);

    if (props?.route?.params?.ranges) {
      dispatch(
        searchProductsWithFilters(searchedProduct, minValue, maxValue),
      ).then(response => {
        setProducts(response);
        setRefreshing(false);
      });
    } else {
      dispatch(searchProducts(searchedProduct)).then(response => {
        setProducts(response);
        setRefreshing(false);
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchSearchedData();
    }, []),
  );

  const renderCategoriesRow = () => {
    return (
      <View style={styles.rowForCategories}>
        <View style={styles.categoriesTextView}>
          <TextWrapper style={styles.categoriesTextStyle}>Results</TextWrapper>
        </View>

        <View style={styles.viewAllTextButtonView}>
          <TextWrapper style={styles.viewAllTextButton}>
            {products?.length ? products?.length : 'No'} Items found
          </TextWrapper>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.productsContainerStyle}>
        <ProductsContainer data={item} />
      </View>
    );
  };

  const renderList = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
          numColumns={2}
          refreshing={refreshing}
          contentContainerStyle={{
            paddingBottom: Platform.OS === 'android' ? vh * 18 : vh * 22,
          }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={fetchSearchedData}
            />
          }
          style={styles.listView}
        />
      </View>
    );
  };

  return (
    <View style={styles.scroll} contentContainerStyle={styles.content}>
      {/* <SearchHeader
        style={styles.searchHeaderStyle}
        tintColor={theme.defaultBackgroundColor}
        title="Search"
        type="true"
      /> */}
      {renderCategoriesRow()}
      {renderList()}
    </View>
  );
};
export default SearchScreen;
