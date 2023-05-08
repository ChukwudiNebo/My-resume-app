import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth'
import { getAuth } from "firebase/auth";

// const PrivateRoute = ({ path, ...props }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       setIsLoggedIn(!!user);
//     });
//     return () => unsubscribe();
//   }, []);
//   return isLoggedIn ? (
//       <Route
//         {...props}
//         path={path}/>):(
//           <Navigate to="/log-in" replace/>
//         );
// };
const PrivateRoute = () => {
   const [authState, setAuthState] = useState({
     authenticated: false,
     loading: true,
   });

   useEffect(() => {
     const auth = getAuth();
     const unsubscribe = auth.onAuthStateChanged((user) => {
       if (user) {
         setAuthState({
           authenticated: true,
           loading: false,
         });
       } else {
         setAuthState({
           authenticated: false,
           loading: false,
         });
       }
     });

     return () => unsubscribe();
   }, []);

   if (authState.loading) {
     return <div>Loading...</div>;
   }

   return authState.authenticated ? (
     <Outlet />
   ) : (
     <Navigate to="/log-in" replace={true} />
   );
  // const auth = getAuth();
  // console.log(auth)
  // // const user = auth.currentUser;
  // const user= auth.currentUser;
  // console.log(user)
  // if (user) {
  //   console.log(user)
  //   console.log("true");
  // } else {
  //   console.log("false");
  // }
  // return user ? <Outlet /> : <Navigate to="/log-in" />;
  // <Routes>
  //   <Route
  //     {...rest}
  //     element={user ? <Component {...rest} /> : <Navigate to="/log-in" />}
  //   />
  // </Routes>
};

export default PrivateRoute;
