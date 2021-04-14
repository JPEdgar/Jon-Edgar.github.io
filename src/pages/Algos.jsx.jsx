// import React, { useState } from "react";

import MyPath from "../components/MyPath/MyPath";

export default function Algos() {
  // const [algo, setAlgo] = useState("");

  // function handleClick(input) {
  //   setAlgo(input);
  // }

  // const handleComp = () => {
  //   if (algo === "Pathing") {
  //     return <MyPath />;
  //   }
  // };

  return (
    <div className="test">
      {/* <button onClick={() => handleClick("Pathing")}>Pathing Algoritm</button>
      <h3>{algo}</h3>
      {handleComp()} */}
      <MyPath />
    </div>
  );
}
