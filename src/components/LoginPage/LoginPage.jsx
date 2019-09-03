import React, { useState } from "react";
import { connect } from "react-redux";
import { login, login_failure } from "../../actions/authActions";
import { Link, Redirect } from "react-router-dom";
import "./LoginPage.css";

const LoginForm = ({ loggedIn, token, error, email, onLogin, onError }) => {
  const [email2, setEmail] = useState(email || "");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (!email2) return onError("You must specify email");
    if (!password) return onError("You must enter password");
    onLogin(email2, password);
  };

  return loggedIn ? (
    <Redirect to="/"></Redirect>
  ) : (
    <div className="container">
      <h1 className="header">Log in</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            <i className="fas fa-envelope-square"></i>
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email2}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="password">
            <i className="fas fa-lock"></i>
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="error-msg">{error}</div>
        <button className="btn-submit" type="submit">
          Log In
        </button>
      </form>
      <p className="text">Haven't account yet?</p>
      <Link className="link" to="/signup">
        Sign Up
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    loggedIn: state.auth.loggedIn,
    token: state.auth.token,
    error: state.auth.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(login(email, password)),
    onError: error => dispatch(login_failure(error))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
