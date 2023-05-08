import React from "react";
import page404 from "../../../images/404.png";
import Text from "../../atoms/text/Text";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="text-center">
        <img
          src={page404}
          alt="Nothing found"
          style={{ height: "70vh", marginTop: "50px", width: "50%" }}
        />
        <div>
          <h3>Something missing??</h3>
          <div className="d-flex justify-content-center">
            <p>Create An Account</p>
            <Link to="/log-in" className="mx-1">
              <Text text="Sign in" />
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
