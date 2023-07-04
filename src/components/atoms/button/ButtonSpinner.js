import React from 'react'
// import spinner from "../../../images/i.mp4";

const ButtonSpinner = ({width}) => {
  return (
    <>
      <button type="button" className="button" style={{width: "100%"}}>
        {/* <img src={spinner} alt="" style={{ width: `${width}%`,height:"30px",marginLeft:"auto",marginRight:"auto" }} /> */}
        <i
          className="fa-solid fa-spinner fa-spin"
          style={{
            width: `${width}%`,
            height: "10px",
          }}
        ></i>
      </button>
    </>
  );
}

export default ButtonSpinner
