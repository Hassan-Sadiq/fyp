import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {getSingleProductDetails} from '../../redux/actions/productsActions';

export const useGetProductDetailsHook = () => {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState();
  const [variationFlag, setVariationFlag] = useState(false)
  const productDetailsFunc = useCallback(id => {
    dispatch(getSingleProductDetails(id)).then(res => {

 if(res?.attributes){
     res?.attributes.find((val) =>{
      if(val.name === 'Size' || val.name === 'Size:'){
        setVariationFlag(true)
      }
    })
  }
      setProductDetails(res);
    })
  }, []);
  return [productDetails, productDetailsFunc, variationFlag];
};
