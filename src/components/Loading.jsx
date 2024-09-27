import React from "react";
import gif from "/public/loading.gif";
const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-white">
      <img className="object-cover h-[65%]" src={gif} alt="Loading..." />
    </div>
  );
};

export default Loading;
