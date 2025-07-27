import "./App.css";
import { useState } from "react";
function App() {
  const [counter,setCounter] = useState(1);
  let addValue=()=>{
    if (counter>=20) {
      setCounter(null)
    }
    else{
      setCounter(counter+1);

    }
      
    }
  
  return(



    <>
    <button className="bg-blue-500"
    onClick={addValue}>
      Click me 
    </button>
       counter {counter}
    </>
  // let [counter, setCounter] = useState(1);
  // let addValue = () => {
  //   if(counter>=20){
  //     setCounter(counter="")
  //   }
  //   else{

  //     setCounter(counter+1)
  //   }  
   
  // };
  // let removeValue=()=>{
  //   if(counter<=0){
  //     setCounter(counter="")
  //   }
  //   else{

  //     setCounter(counter-1)
  //   }
  // };  
  // return (
  //   <>
  //     <h1>Uper button {counter}</h1>
  //     <button onClick={addValue}>Add value {counter}</button>
  //     <br />
  //     <button 
  //     onClick={removeValue}>Remove value {counter}</button>
  //     <h1>Lower button {counter}</h1>
  //   </>
  );
}

export default App;
