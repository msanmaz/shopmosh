
import React from 'react'
import Head from "common/head"
import { useState } from "react"
import Login from "../../components/Login/User-Login"
import Register from '../../components/Register/User-Register'
import NavBar from '../../components/NavBar/Nav-Bar'

const LoginUser = () => {
 const [currentView, setCurrentView] = useState('Login')



  return (
    <>
      <Head title="Sign in" description="Sign in to your RLVX account." />
    <NavBar/>
      <div className="w-full flex justify-center py-24">
      {currentView === "Login" ? <Login setCurrentView={setCurrentView} /> : <Register setCurrentView={setCurrentView} />}
    </div>
    </>
  )
}



export default LoginUser
