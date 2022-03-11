import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Result from "./Result";
import './Header.css';
const Input_Component=()=>{
    
    const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);



  const calculate = (e) => {
    e.preventDefault();
    const bmi = +mass / (+height) ** 2*10000;
    setBmi(bmi);
  };




    return(
    <div> 
<form onSubmit={calculate}>
     <input type="text" placeholder="Enter Height" className="var1" value={height} onChange={(e) => setHeight(e.target.value)}/>
     <input type="text" placeholder="Enter Weight" className="var2" value={mass} onChange={(e) => setMass(e.target.value)}/>
     <button type="submit" className="var3">calculate</button>
      </form>
      <p>bmi: {bmi}</p>
      <Result bmi={bmi}/>
    </div>)


} ;export default Input_Component