import * as types from "./authActionTypes";

export const signup_failure = error => {
  return {
    type: types.SIGNUP_FAILURE,
    error
  };
};

const signup_success = email => {
  return {
    type: types.SIGNUP_SUCCESS,
    email
  };
};

export const signup = (email, password) => dispatch => {
  return fetch("http://localhost:5000/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then((res /*тут можно сразу логинить */) =>
      res.json().then(data => dispatch(signup_success(email)))
    )
    .catch(err => err.json().then(err => dispatch(signup_failure(err))));
};

export const login_failure = error => {
  return {
    type: types.LOGIN_FAILURE,
    error
  };
};

const login_success = (token, email) => {
  return {
    type: types.LOGIN_SUCCESS,
    token,
    email
  };
};

export const login = (email, password) => dispatch => {
  return fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res =>
      res.json().then(data => dispatch(login_success(data.token, email)))
    )
    .catch(err => err.json().then(err => dispatch(login_failure(err))));
};

export const logout = () => {
  return {
    type: types.LOG_OUT
  };
};
