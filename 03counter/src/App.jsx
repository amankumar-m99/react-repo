import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=0;

  const [counter, setCounter]= useState(0); // first value is a variable and second value is a function
  // if a value not provided then you get a NaN

  const addValue = ()=>{
    // counter = counter + 1;
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    setCounter((prevValue)=>prevValue+1);
    setCounter((prevValue)=>prevValue+1);
    setCounter((prevValue)=>prevValue+1);
    setCounter((prevValue)=>prevValue+1);
    console.log(counter);
  }
  const subtractValue = ()=>{
    // counter = counter - 1;
    // setCounter(counter-1);
    // setCounter(counter-1);
    // setCounter(counter-1);
    // setCounter(counter-1);
    setCounter((prevValue)=>prevValue-1);
    setCounter((prevValue)=>prevValue-1);
    setCounter((prevValue)=>prevValue-1);
    setCounter((prevValue)=>prevValue-1);
    console.log(counter);
  }

  return (
    <>
    <h1>Counter</h1>
    <h2>{counter}</h2>
    <button onClick={addValue}>Add value</button>{" "}
    <button onClick={subtractValue}>Subtract value</button>
    </>
  )
}

export default App
