// import React, { useState } from "react";
// import Text from "../../../atoms/text/Text";
// import PersonalInfoInput from "../../../molecules/resume/personal info/PersonalInfoInput";

// import "./fillin.css";

// import { collection,addDoc } from "firebase/firestore";

// const FillIn = () => {
//   const [showless, setShowless] = useState(true);

// const collectionRef=collection(database,'usersResume')

//   const OnSubmit = async (e) => {
//     try {
//       console.log("savee");
//       e.preventDefault();
//       addDoc(collectionRef, {
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//       });
//       console.log('data added')
//     } catch (error) {
//       console.log(error)
//     }

//   };
//   return (
//     <>
//       <div className="" style={{ marginTop: "100px" }}>
//         <div>
//           <div>
//             <Text text="Personal Information" />
//           </div>
//         </div>
//         {showless ? (
//           ""
//         ) : (
//           <form onSubmit={(e) => OnSubmit(e)}>
//             <div>
//               <div className="d-flex">
//                 <div>
//                   <Text text="Show profile picture"/>
//                 </div>
//                 <div>
//                   <PersonalInfoInput />
//                 </div>
//                 <button type="submit" onSubmit={(e) => OnSubmit(e)}>
//                   Save
//                 </button>
//               </div>
//             </div>
//           </form>
//         )}
//         <div>
//           <button onClick={() => setShowless(!showless)}>
//             Hide additional field
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FillIn;

import React, { useEffect, useState } from "react";
import Text from "../../../atoms/text/Text";
// import {app,database} from '../../../../firebase/firebaseConfig'
import { getDatabase, ref, set } from "firebase/database";
import PersonalInfoInput from "../../../molecules/resume/personal info/PersonalInfoInput";
// import { getAuth } from "firebase/auth";
import "./fillin.css";
// import { app, database } from "./firebase.js";
import { getAuth } from "firebase/auth";

// import { collection, addDoc } from "firebase/firestore";

const FiIn = () => {
  const [showless, setShowless] = useState(true);
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const { firstName, lastName, email, phoneNumber } = inputField;
  // const collectionRef = collection(database, "usersResume");
  // console.log(firstName, lastName);
  useEffect(() => {
    setUserData({
      firstName: inputField.firstName,
      lastName: inputField.lastName,
      email: inputField.email,
      phoneNumber: inputField.phoneNumber,
    });
  }, [inputField]);
  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user.uid;

  function writeUserData(userId, firstName, lastName, email, phoneNumber) {
    console.log(userId, firstName, lastName);
    const db = getDatabase();
    set(ref(db, "userResume/" + userId), {
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    console.log(userId, firstName, lastName);
  }

  const OnSubmit = async (e) => {
    try {
      console.log(userId, firstName, lastName);
      // console.log(inputField);
      e.preventDefault();
      // addDoc(collectionRef, {
      //   firstName: inputField.firstName,
      //   lastName: inputField.lastName,
      //   email: inputField.email,
      //   phoneNumber: inputField.phoneNumber,
      // });
      // const user = firebase.auth().currentUser;
      if (user) {
        writeUserData(
          userId,
          userData.firstName,
          userData.lastName,
          userData.email,
          userData.phoneNumber
        );
        console.log(userId, userData.firstName, userData.lastName);
        // setInputField({
        //   firstName,
        //   lastName,
        //   email,
        //   phoneNumber,
        // });
        // Call the writeUserData function with the userId and other user data.
        // writeUserData(
        //   userId,
        //   inputField.firstName,
        //   inputField.lastName,
        //   inputField.email,
        //   inputField.phoneNumber
        // );
        // console.log(userId, firstName, lastName);
      } else {
        // User is not signed in, handle the error.
      }

      // writeUserData();
      console.log("data added", writeUserData());
    } catch (error) {
      console.log(error);
    }
  };

  const onInputChange = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
    console.log(inputField);
  };

  return (
    <>
      <div className="" style={{ marginTop: "100px" }}>
        <div>
          <div>
            <Text text="Personal Information" />
          </div>
        </div>
        {showless ? (
          ""
        ) : (
          <form onSubmit={(e) => OnSubmit(e)}>
            <div>
              <div className="d-flex">
                <div>
                  {/* show profile picture  */}
                  <Text text="Show profile picture" />
                </div>
                <div>
                  <PersonalInfoInput
                    inputField={inputField}
                    onInputChange={onInputChange}
                  />
                </div>
                <button type="submit" onSubmit={(e) => OnSubmit(e)}>
                  Save
                </button>
              </div>
            </div>
          </form>
        )}
        <div>
          <button onClick={() => setShowless(!showless)}>
            Hide additional field
          </button>
        </div>
      </div>
    </>
  );
};

export default FiIn;
