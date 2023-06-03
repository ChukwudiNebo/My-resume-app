import React, { useEffect, useState } from "react";
import Text from "../../../atoms/text/Text";
import { getDatabase, ref, set } from "firebase/database";
import PersonalInfoInput from "../../../molecules/resume/personal info/PersonalInfoInput";
import "./fillin.css";
import { getAuth } from "firebase/auth";
import {database} from "../../../../firebase/firebaseConfig"
import { getFirestore, collection, doc, setDoc } from "firebase/firestore"; 
// import { doc, setDoc } from "firebase/firestore"; 

const FillIn = () => {
  const [showless, setShowless] = useState(false);
  const [changedInputField, setChangedInputField] = useState({
    label: "First Name",
  });
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user.uid;

  const editInput = (e) => {
    // const selection = window.getSelection();
    setChangedInputField({
      ...changedInputField.label,
      [e.target.name]: e.target.value,
    });
  };

  const onInputChange = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    label: "",
  });

  useEffect(() => {
    setUserData({
      firstName: inputField.firstName,
      lastName: inputField.lastName,
      email: inputField.email,
      phoneNumber: inputField.phoneNumber,
      label: changedInputField.label,
    });
  }, [inputField]);
  const { label } = changedInputField;
  const { firstName, lastName, email, phoneNumber } = inputField;

  // const writeUserData = () => {
  //   console.log(userId, firstName, lastName);
  //   const db = getDatabase();
  //   set(ref(db, "userResume/" + userId), {
  //     firstName,
  //     lastName,
  //     email,
  //     phoneNumber,
  //     label,
  //   });
  //   console.log(userId, firstName, lastName);
  // };

  // writeUserData(
  //   userId,
  //   userData.firstName,
  //   userData.lastName,
  //   userData.email,
  //   userData.phoneNumber,
  //   changedInputField.label
  // );

  const OnSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const writeUserData = () => {
      // console.log(userId, firstName, lastName);
      const db = getDatabase();
      set(ref(db, "userResume/" + userId), {
        firstName,
        lastName,
        email,
        phoneNumber,
        label,
      });
      // console.log(userId, firstName, lastName);
    };
    // console.log(db)
    // Add a new document in collection "cities"
    // await setDoc(doc(db, "userResume/"+ userId), {
    //   firstName,
    //   lastName,
    //   email,
    //   phoneNumber,
    //   label,
    // });
    // Add a new document in collection "cities"
    await setDoc(doc(database, "cities", "new-city-id"), {
      firstName,
      lastName,
      email,
      phoneNumber,
      label,
    });

    try {
      // console.log(userId, firstName, lastName);
      e.preventDefault();
      if (user) {
        writeUserData(userId, firstName, lastName, email, phoneNumber, label);
        // writeUserData(
        //   userId,
        //   userData.firstName,
        //   userData.lastName,
        //   userData.email,
        //   userData.phoneNumber,
        //   changedInputField.label
        // );
        
       
      } else {
        console.log("User is not signed in");
        // User is not signed in, handle the error.
      }
    } catch (error) {
      console.log(error);
    }
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
                    changedInputField={changedInputField}
                    editInputFunc={editInput}
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

export default FillIn;
