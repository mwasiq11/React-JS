import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './Appwrite/Auth'
import { login, logout } from './store/AuthSlice'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Container from './components/container/Container'


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
   
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 '>
     <div className='bg-blue-500 ml-12'>Tailwind</div>
      
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  
  ) : null

 

}


export default App
