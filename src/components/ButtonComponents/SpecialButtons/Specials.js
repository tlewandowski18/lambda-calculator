import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
import { tsPropertySignature } from "@babel/types";



const Specials = (props) => {

  const [commands] = useState(specials);

  return (
    <>
      
       {commands.map((special, idx) => {
         return <SpecialButton command={special} key={idx} handleSpecialClick={props.handleSpecialClick}/>
       })}
    </>
  );
};

export default Specials;
