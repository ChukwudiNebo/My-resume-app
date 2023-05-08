import React, { useEffect, useState } from "react";
import Text from "../../../atoms/text/Text";
import { getDatabase, ref, set } from "firebase/database";
import PersonalInfoInput from "../../../molecules/resume/personal info/PersonalInfoInput";
import "./fillin.css";
import { getAuth } from "firebase/auth";

const FillIn = () => {
  const [showless, setShowless] = useState(true);
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user.uid;


    const OnSubmit = async (e) => {}


    const onInputChange = (e) => {
      setInputField({
        ...inputField,
        [e.target.name]: e.target.value,
      });
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
}

export default FillIn
