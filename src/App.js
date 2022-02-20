import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Authorization, Login, ChangePassword } from "./pages";

import "./scss/app.scss";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchItems } from "./redux/actions/app";

function App() {
  // const dispatch = useDispatch();
  // const myItems = useSelector(({ app }) => app);

  // console.log(myItems);

  // React.useEffect(() => {
  //   dispatch(fetchItems());
  // }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Authorization />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/changePassword" element={<ChangePassword />} exact />
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
