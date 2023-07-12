import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {getProductVariations} from '../../redux/actions/productsActions';

export const useGetProductvariationHook = () => {
  const dispatch = useDispatch();
  const [productVariantion, setProductVariations] = useState();
  const productVariationFunc = useCallback(id => {
    dispatch(getProductVariations(id)).then(res => {
      console.log("ListoFproducts from useGetProductvariationHook ===>", res)
      setProductVariations(res);
    });
  }, []);
  return [productVariantion, productVariationFunc];
};
