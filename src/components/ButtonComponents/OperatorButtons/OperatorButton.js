import React from "react";
import { tsPropertySignature } from "@babel/types";
import {withClickEffect} from "../../../HOCs/withClickEffect"

// function handleMouseDown(e) {
//   e.target.style.transform = "translateY(2px)"
//   e.target.style.boxShadow = "none"
// }

// function handleMouseUp(e) {
//   e.target.style.transform = "translateY(-2px)"
//   e.target.style.boxShadow = "0px 3px #322c2d"
// }

const OperatorButton = (props) => {
  return (
    <button 
      className="operator" 
      onMouseDown={props.handleClickDown} 
      onMouseUp={props.handleClickUp} 
      value={props.value}
      onClick={props.handleOperatorClick}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.char}
    </button>
  );
};

export default withClickEffect(OperatorButton);