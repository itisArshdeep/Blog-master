import { useDispatch } from 'react-redux'
import './App.css'
import { useEffect, useState } from 'react'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"



function App() {
  const [loading ,setLoading]= useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    }).finally(()=>{
      setLoading(false)
    })
  },[])

  return !loading?(
    <div className='main-h-screen flex flex-wrap content-between bg-gray-400'>
      <Header/>
      <main>
        {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
  ):null
}

export default App
