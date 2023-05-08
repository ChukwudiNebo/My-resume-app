import React, { useState, useEffect } from "react";

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

// import useWindowResize from './useWindowResize'
// const Component =()=>{
//     const {width,height}=useWindowResize();

//     let buttonWidth;
//     if(width<=640){
//         // small screen
//         buttonWidth="50%";

//     }else if(width>640&&width<=1024){
//         // medium screen
//         buttonWidth="60%"
//     }
//     return(
//         <>
//         <MyButton width={buttonWidth}></MyButton>
//         </>
//     )
// }

export default useWindowResize;
