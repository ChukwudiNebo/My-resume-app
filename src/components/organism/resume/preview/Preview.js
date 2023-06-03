import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import ResumePreview from "../../../molecules/resume/resume preview/ResumePreview";
import { app, database } from "../../../../firebase/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";

import "./preview.css"

const Preview = () => {
  const [userData, setUserData] = useState([]);
  // const collectionRef = collection(database, "usersResume");
  // getDocs(collectionRef)
  //   .then((response) =>
  //     console.log(
  //       response.docs.map((item) => {
  //         return { ...item.data(), id: item.id };
  //       })
  //     )
  //   )
  //   .catch((error) => console.log(error));

  useEffect(() => {
    const fetchData = async () => {
      const data = [];
      const querySnapshot = await getDocs(collection(database, "cities"));
      // using the forEach method to push each document's data into an array
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setUserData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="preview__background-image">
        <div style={{ margin: "100px 100px" }}>
          {userData.map((user) => (
            <div key={user.id}>
              <ResumePreview
                key={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                phoneNumber={user.phoneNumber}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Preview;
