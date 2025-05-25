import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './Appwrite/Auth'
import { login, logout } from './store/AuthSlice'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'


function App() {
const [loading,setloading]=useState(true)
const dispatch=useDispatch()
useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if (userData) {
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
  })
  .finally(()=>setloading(false))
},[])

return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <h1 className="text-4xl font-bold text-blue-600">Tailwind is working!</h1>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>

  </div>
):null

 

}


export default App
