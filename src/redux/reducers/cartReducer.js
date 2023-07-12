import {REHYDRATE} from 'redux-persist/es/constants';
import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.cartReducer;

export default (state = initialState, action) => {
  console.log('actionsss', action);
  console.log('inside cart reducer');
  switch (action.type) {
    // case REHYDRATE

    case types.ADD_TO_CART: {
      let cart1 = state.cartItems;
      let index1 = cart1.findIndex(
        x => x?.product_id == action.payload.product_id,
      );
      let index2 = cart1.findIndex(
        x => x?.variation_id == action.payload?.variation_id,
      );
      console.log('Cart1 =====>  index1', index1);
      console.log('Cart1 =====>  index2', index2);
      console.log('Cart1 =====>  index2', cart1);
      console.log('Cart1 =====>  action.payload', action.payload);

      if (index1 > -1) {
        if (action.payload?.variation_id) {
          if (index2 > -1) {
            state.cartItems[index2].quantity += action.payload.quantity;
            return {
              ...state,
            };
          } else {
            var newcart = [action.payload];
            return {
              ...state,
              cartItems: [...cart1, ...newcart],
            };
          }
        } else {
          state.cartItems[index1].quantity += action.payload.quantity;
          return {
            ...state,
          };
        }
      } else {
        var newcart = [action.payload];
        return {
          ...state,
          cartItems: [...cart1, ...newcart],
        };
      }
    }
    case types.UPDATE_CART: {
      let newCart = [...state.cartItems];
      for (var i = 0; i < newCart.length; i++) {
        if (newCart[i].product_id === action.ItemId) {
          newCart[i].quantity = action.ItemQuantity;
        }
      }

      return {...state, cartItems: newCart};
    }

    case types.DELETE_FROM_CART: {
      console.log('propsDATAHERE', state.cartItems);
      let cart = state.cartItems;
      let index = cart.findIndex(x => x.product_id == action.itemId);

      if (index > -1) {
        cart.splice(index, 1);
        return {
          ...state,
          cartItems: [...cart],
        };
      } else {
        return {
          ...state,
        };
      }
    }

    case types.DELETE_CART:
      return {...state, cartItems: []};

    default:
      return state;
  }
};
