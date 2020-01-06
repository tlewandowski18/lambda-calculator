import React from "react";
import {withClickEffect} from "../../../HOCs/withClickEffect"


const SpecialButton = (props) => {
  return (
    <button className="special" value={props.command} onClick={props.handleSpecialClick} onMouseDown={props.handleClickDown} onMouseUp={props.handleClickUp}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.command}
    </button>
  );
};

export default withClickEffect(SpecialButton);