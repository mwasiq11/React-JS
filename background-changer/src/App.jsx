// import { useState } from 'react'
// import './App.css'

// function App() {
//  let [color,setColor]=useState("olive")

//   return (
//    <>
//     <div
//     className="w-screen h-screen duration-200" 
//       style={{backgroundColor:color}}
//     >
//     <div className="fixed flex flex-wrap justify-center "></div>
//     <div className="flex flex-wrap justify-center gap-6 bg-slate-200 rounded-3xl py-4 ml-16 w-[90%]">
//       <button className="outline-none px-6 py-3 rounded-3xl bg-purple-700"
//       onClick={()=>setColor(color="purple")}>
//       Purple
//       </button>

//       <button className="outline-none px-6 py-3 rounded-3xl bg-red-600"
//       onClick={()=>setColor(color="red")}> Red
//       </button>

//       <button className="outline-none px-6 py-3 rounded-3xl bg-blue-700"
//       style={{backgroundColor:"blue"}}
//       onClick={()=>setColor(color="blue")}> Blue
//       </button>

//       <button className="outline-none px-6 py-3 rounded-3xl bg-green-700"
//       onClick={()=>setColor(color="green")}> Green
//       </button>

//       <button className="outline-none px-6 py-3 rounded-3xl bg-yellow-500"
//       onClick={()=>setColor(color="yellow")}> Yellow
//       </button>

//       <button className="outline-none px-6 py-3 rounded-3xl bg-pink-600"
//       onClick={()=>setColor(color="pink")}> Pink
//       </button>

//       <button className="outline-none px-6 py-3 rounded-3xl bg-gray-500"
//       onClick={()=>setColor(color="gray")}> Gray
//       </button>

//       <button className="outline-none px-6 py-3 rounded-3xl bg-violet-400"
//       onClick={()=>setColor("olive")}> Voilet
//       </button>

//       <button className="outline-none px-6 py-3 rounded-3xl bg-black text-white"
//       onClick={()=>setColor(color="black")}> Black
//       </button>

    
//     </div>
//     </div>
//    </>
//   )
// }

// export default App


import React, { useState, useRef, useEffect } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

useEffect(()=>{
      if (isRunning) {
        timerRef.current=setInterval(()=>{
          setSeconds(prev =>prev+1)
        },1000)
      }
      else{
        clearInterval(timerRef.current)
      }
},[isRunning])

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', gap:'4rem'}}>
      <h1>⏱ Stopwatch: {seconds}s</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => {
        setIsRunning(false);
        setSeconds(0);
      }}>Reset</button>
    </div>
  );
}

export default Stopwatch;


