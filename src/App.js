import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Authorization, Login, ChangePassword, Home } from "./pages";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Authorization />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/changePassword" element={<ChangePassword />} exact />
          <Route path="/home" element={<Home />} exact />
        </Routes>

        <nav className="container-form container-form__nav">
          <Link to="/">
            <button className="button">Authorization</button>
          </Link>
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
          <Link to="/changePassword">
            <button className="button">ChangePassword</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
