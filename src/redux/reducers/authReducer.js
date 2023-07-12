import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.authReducer;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
      return {
        ...state,
        customer: action.payload,
      };
    case types.LOGIN:
      return {
        ...state,
        user: action.payload.user.id,
        customer: action.payload,
        loggedin: true,
        isLoading: false,
      };
    case types.CREDENTIALS:
      return {
        ...state,
        userEmail: action.payload.data.email,
        password: action.payload.data.password,
      };
    case types.PROFILE_DETAILS:
      return {
        ...state,
        customer: action.payload,
      };
    case types.LOGOUT: {
      return {
        ...initialState,
      };
    }

    case types.LOGOUT_RE: {
      return {
        user: null,
        loggedin: false,
        isLoading: false,
        customer: {},
      };
    }
    default:
      return state;
  }
};

export default authReducer;
