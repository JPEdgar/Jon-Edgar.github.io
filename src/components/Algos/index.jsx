import React, { useState } from "react";

// libraries
// import { Button } from "react-bootstrap";

import MyPath from "./MyPath";

const Algos = () => {
  const [algo, setAlgo] = useState("Pathing");

  // to be added once more algorithms are added
  // const handleClick = (input) => {
  //   setAlgo(input);
  // };

  const handleComp = () => {
    if (algo === "Pathing") {
      return <MyPath />;
    }
  };

  return (
    <>
      {/* to be added once I create more algorithms */}
      {/* <Button style={{ width: "150px" }} onClick={() => handleClick("Pathing")}>
        Pathing Algoritm
      </Button> */}
      {handleComp()}
    </>
  );
};

export default Algos;
