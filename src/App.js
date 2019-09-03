import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
}

export default App;
