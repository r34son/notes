import * as types from "../actions/authActionTypes";

const initialState = {
  loggedIn: false,
  registered: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_FAILURE:
      return { ...state, loggedIn: false, loginError: action.error };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        error: null,
        email: action.email
      };
    case types.SIGNUP_FAILURE:
      return { ...state, signUpError: action.error };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        registered: true,
        loggedIn: false,
        email: action.email
      };
    case types.LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        email: null,
        token: null
      };
    default:
      return state;
  }
};
