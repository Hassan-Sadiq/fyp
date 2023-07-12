import {endpoints} from '../config';
import {get, customGet, deleteCall, put} from '../Api/index';
import * as types from '../types';
import {showToast} from '../Api/HelperFunction';

export const getProfileDetails = id => {
  console.log('Id =========================>', id);
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      const response = await get(`${endpoints.auth.signup}/${id}`);
      console.log(
        'Response from get Profile Details =================================>',
        response,
      );
      dispatch({
        type: types.PROFILE_DETAILS,
        payload: response,
      });
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.reject(e);
    }
  };
};
export const deleteUser = id => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await deleteCall(`${endpoints.auth.signup}/${id}`);

      dispatch({
        type: types.LOGOUT,
      });

      dispatch({
        type: types.DELETE_CART,
      });

      showToast('Your account has been deleted!');

      dispatch({
        type: types.LOADING_END,
      });

      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      showToast(e);
      return Promise.reject(e);
    }
  };
};
export const updateProfileDetails = (id, data) => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await put(`${endpoints.auth.signup}/${id}`, data, false);
      dispatch({
        type: types.UPDATE_USER,
        payload: response,
      });

      showToast('User has been updated!');
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      showToast(e);
    }
  };
};

export const logout = data => {
  console.log('PEPSI', data);
  if (!data) {
    return dispatch => {
      dispatch({
        type: types.LOGOUT,
      });

      dispatch({
        type: types.DELETE_CART,
      });

      showToast('You have been logged out');
      return Promise.resolve();
    };
  } else {
    return dispatch => {
      dispatch({
        type: types.LOGOUT_RE,
      });

      dispatch({
        type: types.DELETE_CART,
      });

      showToast('You have been re-logged out');
      return Promise.resolve();
    };
  }
};
