import * as types from "../actions/authActionTypes";

const storedToken = localStorage.getItem("token");
const storedEmail = localStorage.getItem("email");

const initialState = {
  loggedIn: !!storedToken,
  token: storedToken,
  email: storedEmail
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
        loggedIn: false,
        email: action.email,
        signUpError: null
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
