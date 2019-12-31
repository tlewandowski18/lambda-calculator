import React from "react";
import { tsPropertySignature } from "@babel/types";

const OperatorButton = (props) => {
  return (
    <button className="operator">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.char}
    </button>
  );
};

export default OperatorButton;