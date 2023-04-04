import React from "react";

const ImgNfontAwesome = ({ img,height,width, fontAwesome }) => {
    return (
        <>
      <div style={{ color: "green" }}>
        {img ? (
          <img src={img} alt=""  style={{width:`${width}px`,height:`${height}px`}}/>
        ) : fontAwesome ? (
          <i className={`${fontAwesome}`}></i>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ImgNfontAwesome;
