import React from "react";
import { Routes, Route } from "react-router-dom";
import { Authorization, Login, ChangePassword } from "./pages";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Authorization />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/changePassword" element={<ChangePassword />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
