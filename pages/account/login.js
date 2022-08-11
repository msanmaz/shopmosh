
import React from 'react'

import { useState } from "react"
import Login from "../../components/Login/User-Login"
import Register from '../../components/Register/User-Register'
import Layout from '../../common/Layout/lay-out'

const LoginUser = () => {
 const [currentView, setCurrentView] = useState('Login')



  return (
    <>
      <div className="w-full flex justify-center py-24">
      {currentView === "Login" ? <Login setCurrentView={setCurrentView} /> : <Register setCurrentView={setCurrentView} />}
    </div>
    </>
  )
}


export default LoginUser

LoginUser.getLayout = (page) => {
  return <Layout title={'LOGIN'}>{page}</Layout>
}
