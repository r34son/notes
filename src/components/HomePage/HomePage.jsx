import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/authActions";
import Notes from "../Notes/Notes";
import "./HomePage.css";

const HomePage = ({ email, logged, logOut }) => {
  return (
    <>
      <header>
        <div className="logo">Notes</div>
        {logged && (
          <div className="profile">
            <div className="border email">{email}</div>
            <div className="logout" onClick={logOut}>
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </div>
        )}
      </header>
      {logged ? (
        <Notes />
      ) : (
        <div className="box">
          <div className="signup card">
            <h1 className="text-opacity">Sign Up</h1>
            <p className="text">
              Create account and use our perfect service! You will never forget
              anything with this notes!
            </p>
            <Link className="link border border-blue" to="/signup">
              Sign Up
            </Link>
          </div>
          <span className="divider">or</span>
          <div className="login card">
            <h1 className="text-opacity">Log In</h1>
            <p className="text">
              Use notes every day and your life will be much easier!
            </p>
            <Link className="link border border-red" to="/login">
              Log In
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    logged: state.auth.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
