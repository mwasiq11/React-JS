import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [color,setColor]=useState("olive")

  return (
   <>
    <div
    className="w-screen h-screen duration-200" 
    style={{backgroundColor:color}}
    >
    
    <div className="fixed flex flex-wrap justify-center "></div>
    <div className="flex flex-wrap justify-center gap-6 bg-slate-200 rounded-3xl py-2 ml-16 max-w-screen-xl mt-2">
      <button className="outline-none px-6 rounded-3xl"
      style={{backgroundColor:"purple"}}
      onClick={()=>setColor("purple")}> Purple
      </button>

      <button className="outline-none px-8 rounded-3xl"
      style={{backgroundColor:"red"}}
      onClick={()=>setColor("red")}> Red
      </button>

      <button className="outline-none px-8 rounded-3xl"
      style={{backgroundColor:"blue"}}
      onClick={()=>setColor("blue")}> Blue
      </button>

      <button className="outline-none px-7 rounded-3xl"
      style={{backgroundColor:"green"}}
      onClick={()=>setColor("green")}> Green
      </button>

      <button className="outline-none px-7 rounded-3xl"
      style={{backgroundColor:"yellow" ,color:"black"}}
      onClick={()=>setColor("yellow")}> Yellow
      </button>

      <button className="outline-none px-8 rounded-3xl"
      style={{backgroundColor:"Pink"}}
      onClick={()=>setColor("pink")}> Pink
      </button>

      <button className="outline-none px-8 rounded-3xl"
      style={{backgroundColor:"gray"}}
      onClick={()=>setColor("gray")}> Gray
      </button>

      <button className="outline-none px-8 rounded-3xl"
      style={{backgroundColor:"olive"}}
      onClick={()=>setColor("olive")}> Olive
      </button>

      <button className="outline-none px-7 rounded-3xl"
      style={{backgroundColor:"black"}}
      onClick={()=>setColor("black")}> Black
      </button>

    
    </div>
    </div>
   </>
  )
}

export default App
