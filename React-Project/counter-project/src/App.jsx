import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(1);
  let addValue = () => {
    if(counter>=20){
      setCounter(counter="")
    }
    else{

      setCounter(counter+1)
    }  
   
  };
  let removeValue=()=>{
    if(counter<=0){
      setCounter(counter="")
    }
    else{

      setCounter(counter-1)
    }
  };  
  return (
    <>
      <h1>Uper button {counter}</h1>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button 
      onClick={removeValue}>Remove value {counter}</button>
      <h1>Lower button {counter}</h1>
    </>
  );
}

export default App;
