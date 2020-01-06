import React, {useState, useEffect} from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display"


import Logo from "./components/DisplayComponents/Logo";
import { parse } from "path";



function App() {
  const [display, setDisplay] = useState("0")
  const [storedValue, setStoredValue] = useState("")
  const [operator, setOperator] = useState("")

  function handleNumberClick(e) {
    setDisplay(prevDisplay => prevDisplay === "0" ? e.target.value : prevDisplay + e.target.value)
  }


  function handleOperatorClick(e){
    const clickedOperator = e.target.value
    if (clickedOperator !== "=" && clickedOperator !== operator) {
      setOperator(() => clickedOperator)
      setStoredValue(() => display)
      setDisplay(() => "")
    } else if (clickedOperator === "=") {
      const expression = `${storedValue} ${operator} ${display}`
      const value = eval(expression)
      setDisplay(() => value.toString())
      setStoredValue(() => "")
      setOperator(() => "")
    } 
    
  }

  function handleSpecialClick(e){
    if (e.target.value === "C") {
      setDisplay(() => "0")
      setStoredValue(() => "")
      setOperator(() => "")
    } else if (e.target.value === "+/-") {
      const num = parseInt(display, 10)
      const negNum = -num
      setDisplay(() => negNum.toString())
    } else {
      const num = parseInt(display, 10)
      const perNum = num / 100
      setDisplay(() => perNum.toString())
    }
  }

  console.log(display)
  console.log(storedValue)
  console.log(operator)

  return (
    <div className="container">
      <Logo />
      <Display display={display}/>
      

      <div className="main">
      
          <div className="col-1">
            <Specials handleSpecialClick={handleSpecialClick}/>
            <Numbers handleNumberClick={handleNumberClick}/>
          </div>
          <div className="col-2">
            <Operators handleOperatorClick={handleOperatorClick}/>
            
          </div>
      
      </div>
    </div>
  );
}

export default App;
