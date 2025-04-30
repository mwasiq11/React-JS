import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <h1 className='bg-green-500 text-center p-4 text-black rounded-xl mb-6'>Tailwand test</h1>
      <Card username="The Cold Mountains" headingtext="Clip Board"/>
      <Card username="The Road Way" headingtext="Surronding Environmnet"/>


    </>
  )
}

export default App
