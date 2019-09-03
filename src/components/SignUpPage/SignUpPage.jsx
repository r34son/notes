import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../../actions/authActions";
import "./SignUpPage.css";

const SignUpPage = ({ error, registered, onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    onSignUp(email, password);
  };
  return registered ? (
    <Redirect to="/login"></Redirect>
  ) : (
    <div className="container">
      <h1 className="header">Sign Up</h1>
      <h4 className="subheader text-opacity">Create new account!</h4>
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
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="error-msg">{error}</div>
        <button className="btn-submit" type="submit">
          Sign Up
        </button>
      </form>
      <p className="text-opacity">Already have account?</p>
      <Link className="link" to="/login">
        Log In
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.auth.signUpError,
    registered: state.auth.registered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (email, password) => dispatch(signup(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
