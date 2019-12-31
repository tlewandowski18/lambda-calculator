import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";



const Specials = () => {

  const [commands] = useState(specials);

  return (
    <>
      
       {commands.map((special, idx) => {
         return <SpecialButton command={special} key={idx}/>
       })}
    </>
  );
};

export default Specials;
