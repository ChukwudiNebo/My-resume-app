import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import ResumePreview from "../../../molecules/resume/resume preview/ResumePreview";
import { app, database } from "../../../../firebase/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";
import html2canvas from "html2canvas";

import "./preview.css";

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

  useEffect(() => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.body.appendChild(canvas);
    });
  }, []);

  const downloadImage = async () => {
    const resumeEl = document.querySelector(".resume");
    const canvas = await html2canvas(resumeEl);
    const data = canvas.toDataURL("image/jpg");
    const date = new Date();
    const link = document.createElement("a");
    link.href = data;
    link.download = userData ? `resume ${date} .jpg`   : "resume.jpg";
    link.click();
  };

  return (
    <>
      <div className="preview__background-image resume">
        <div style={{ margin: "100px 100px" }} className="">
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
      <button onClick={downloadImage}>Download as Image</button>

      <div>
        
      </div>
    </>
  );
};

export default Preview;
