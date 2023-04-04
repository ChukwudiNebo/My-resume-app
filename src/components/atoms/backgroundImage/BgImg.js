import React from "react";

const BgImg = ({ img,width,height }) => {
  return (
    <>
      <img src={img} alt="" style={{height:`${height}px`,width:`${width}px`}}/>
    </>
  );
};

export default BgImg;
