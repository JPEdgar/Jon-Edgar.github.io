import React, { useState } from "react";

import MyPath from "../components/MyPath/MyPath";

export default function Algos() {
  const [algo, setAlgo] = useState("Pathing");

  function handleClick(input) {
    setAlgo(input);
  }

  const handleComp = () => {
    if (algo === "Pathing") {
      return <MyPath />;
    }
  };

  return (
    <div>
      <button onClick={() => handleClick("Pathing")}>Pathing Algoritm</button>
      <h3 className="subjectTitle">{algo}</h3>
      {handleComp()}
    </div>
  );
}
