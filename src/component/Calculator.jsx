import React from 'react';
import Styles from "./Calculator.module.css"
import Button from './Button/buton';
import { useState } from 'react';
import {evaluate} from "mathjs";

function Calculator() {

    const [display, setDisplay] = useState(false)
    const [input, setInput] = useState("");

    const [result, setResult] = useState(null);

    const handleClick = (e) => {
      const value = e.target.value;
      if (value === "=") {
        calculateResult();
      } else if (value === "c") {
        handleClear();
      } else {
        setInput((prev) => prev + value);
      }
    }

    const handleClear = (e) =>{
      setInput("");
      setResult(null)
    }

    const calculateResult = (e) => {
      try{
        const evaluateExp = evaluate(input);
        
        if (evaluateExp){
          setResult(evaluateExp);
          setDisplay(true);
        }else if (input === ""){
          setDisplay(true);
          setResult("Error");
        }else{
          setDisplay(true)
          setResult(evaluateExp)
          console.log(result);
        }
      }catch(e){
        setResult(e);
      }
    }

  return (
    <div className = {Styles.Cal} >
      <div className={Styles.heading}>
        <h1>React Calculator</h1>
      </div>
      <div>
        <input className={Styles.inputbox} value = {input} type="text" name="inputExp"  />
      </div>
      <div>
        {display?<h5>{result}</h5>:<></>}
      </div>

      <div className={Styles.gridContainer}> 
          <Button str = {7} handleClick= {handleClick} />
          <Button str = {8} handleClick= {handleClick} />
          <Button str = {9} handleClick= {handleClick} />
          <Button str = {"+"} handleClick= {handleClick} />
          <Button str = {4} handleClick= {handleClick} />
          <Button str = {5} handleClick= {handleClick} />
          <Button str = {6} handleClick= {handleClick} />
          <Button str = {"-"} handleClick= {handleClick} />
          <Button str = {1} handleClick= {handleClick} />
          <Button str = {2} handleClick= {handleClick} />
          <Button str = {3} handleClick= {handleClick} />
          <Button str = {"*"} handleClick= {handleClick} />
          <Button str = {"c"} handleClick= {handleClick} />
          <Button str = {0} handleClick= {handleClick} />
          <Button str = {"="} handleClick= {handleClick} />
          <Button str = {"/"} handleClick= {handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
