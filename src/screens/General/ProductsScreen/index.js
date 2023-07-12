import React, {useEffect, useState} from 'react';

import {FlatList, RefreshControl, View} from 'react-native';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';

import SearchHeader from '../../../components/Headers/SearchHeader';

import styles from './styles';
import theme from '../../../utils/theme';

import ProductsContainer from '../../../components/Containers/ProductsContainer';

import {useProductsHook} from '../../../hooks/useProductsHook';
import {vh, vw} from '../../../units';
import {
  getProducts,
  getProductsByCategory,
} from '../../../redux/actions/productsActions';
import {useDispatch} from 'react-redux';
import TextWrapper from '../../../components/TextWrapper';
import {Fonts} from '../../../assets/fonts';

const ProductsScreen = props => {
  const [pageNo, setPageNo] = useState(1);
  const [products, setProducts] = useState([]);
  const [extraDataState, setExtraDataState] = useState([]);
  const [fetchMore, setFetchMore] = useState(true);

  const [listProductsState, listProductsFunc] = useProductsHook();
  const [productsList, setProductsList] = useState();
  const [datafetch, setDataFetch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    handleOnGetProducts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    handleOnGetProducts();
    setRefreshing(false);
  };

  const handleOnGetProducts = () => {
    if (props?.route?.params?.categoryId) {
      dispatch(getProductsByCategory(props?.route?.params?.categoryId, pageNo))
        .then(response => {
          if (Array.isArray(response)) {
            const newProducts = [...products, ...response];

            setPageNo(pageNo + 1);
            setProducts(newProducts);
            setDataFetch(true);
          }
        })
        .catch(e => {
          console.log(e, 'error');
        });
    } else {
      dispatch(getProducts(pageNo))
        .then(response => {
          if (Array.isArray(response)) {
            const newProducts = [...products, ...response];
            setPageNo(pageNo + 1);
            setProducts(newProducts);
            setDataFetch(true);
          }
        })
        .catch(e => {
          console.log(e, 'error');
        });
    }
  };

  console.log('ListoFproducts from ProductScreen ==>', products);

  const renderEmptyContainer = () => {
    return (
      <View
        style={{
          height: vh * 80,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {datafetch && products.length <= 0 ? (
          <TextWrapper style={{font: Fonts.KB, fontSize: vh * 3}}>
            {' '}
            No Products Found
          </TextWrapper>
        ) : null}
      </View>
    );
  };
  const renderProductItem = ({item}) => {
    return (
      <View style={styles.containerStyle}>
        <ProductsContainer data={item} />
      </View>
    );
  };

  const listProducts = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          initialNumToRender={10}
          numColumns={2}
          keyExtractor={(item, index) => item.id + index + Math.random()}
          style={styles.listView}
          ListEmptyComponent={renderEmptyContainer()}
          refreshing={refreshing}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          // onEndReached={() => handleOnGetProducts()}
          key={'hel'}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.scroll}>
      <SearchHeader
        style={styles.productScreenStyle}
        product={true}
        title={
          props?.route?.params?.categoryName
            ? props?.route?.params?.categoryName
            : 'Products'
        }
        tintColor={theme.defaultBackgroundColor}
      />
      {listProducts()}
    </View>
  );
};
export default ProductsScreen;
