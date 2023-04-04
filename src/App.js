import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

import "./App.css";
import Home from "./pages/Home/Home";
import Template from "./components/organism/template/Template";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}>
            <Route path="templates" exact element={<Template />} />
          </Route>
          <Route path="/log-in" exact element={<Login />}></Route>
          <Route path="/sign-up" exact element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
