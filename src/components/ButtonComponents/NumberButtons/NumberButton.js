import React from "react";


const NumberButton = (props) => {
    console.log(props)
  return (
    <button className="number">
      {props.num}
    </button>
  );
};

export default NumberButton;
