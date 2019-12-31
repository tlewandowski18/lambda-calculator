import React, { useState } from "react";
import { operators } from "../../../data"
import OperatorButton from "./OperatorButton"

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ops] = useState(operators);

  return (
    <>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {ops.map((operator, idx) => {
         return <OperatorButton key={idx} char={operator.char} />
       })}
    </>
  );
};

export default Operators;
