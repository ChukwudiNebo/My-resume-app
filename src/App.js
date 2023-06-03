import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

import "./App.css";
import Home from "./pages/Home/Home";
import Template from "./components/organism/template/Template";
import FillIn from "./components/organism/resume/fill in/FillIn";
// import Design from "./components/organism/resume/design/Design";
import Preview from "./components/organism/resume/preview/Preview";

// import { app, database } from "./firebase/firebaseConfig";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// private route
import PrivateRoute from "./private route/PrivateRoute";
import NotFound from "./components/organism/not found/NotFound";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Router>
        <Routes>
          {/* wrapped all route under protected routes element  */}
          <Route path="/" exact element={<PrivateRoute />}>
            <Route path="/" exact element={<Home />}>
              <Route path="/templates" exact element={<Template />} />
              <Route path="fill-in" exact element={<FillIn />} />
              <Route path="/resume">
                {/* <Route path="/design" exact element={<Design />} /> */}
                {/* preview is will be a modal in future */}
                <Route path="preview" exact element={<Preview />} />
              </Route>
            </Route>

            {/* <Route path="example" exact element={<Example />} /> */}
            {/* <Route path="templates" exact element={<Template />} /> */}
            {/* </Route> */}
          </Route>
          <Route path="*" exact element={<NotFound />} />
          <Route path="/log-in" exact element={<Login />}></Route>
          <Route path="/sign-up" exact element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
