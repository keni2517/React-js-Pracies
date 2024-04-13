import React from "react";
// import image from "../assets/img.jpg";
//import img from "../assets/img.jpg";

function App2() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 20) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night';
  }

  return (
    <>
      <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjQ4MS1iYi1uaW5nLTEyYl8xLmpwZw.jpg" className="m-auto mt-6 h-[600px] w-[1200px]"></img>
      {/* <img src={img}></img> */}
      <h1 className="text-4xl text-center absolute top-[180px] left-[350px] bg-gradient-to-r from-purple-500 to-pink-500 border border-[indigo-500] border-4 rounded-md">Hello :Good {timeOfDay}!</h1>
    </>
  )
};

export default App2;