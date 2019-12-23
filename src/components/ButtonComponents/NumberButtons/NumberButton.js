import React from "react";


const NumberButton = (props) => {
  return (
    <button className="number">
      {props.text}
    </button>
  );
};

export default NumberButton;
