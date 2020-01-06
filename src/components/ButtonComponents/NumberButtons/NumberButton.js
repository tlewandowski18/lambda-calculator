import React from "react";
import {withClickEffect} from "../../../HOCs/withClickEffect"


const NumberButton = (props) => {
  return (
    <button className="number" onMouseDown={props.handleClickDown} onMouseUp={props.handleClickUp} onClick={props.handleNumberClick} value={props.num}>
      {props.num}
    </button>
  );
};

export default withClickEffect(NumberButton);
