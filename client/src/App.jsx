import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Outlet } from 'react-router-dom'
import Login from './pages/Login'
import SidebarWithHeader from './components/SidebarWithHeader'
import Topbar from './components/Topbar'


function App() {
 

 
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Topbar/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
    
  )
}

export default App
