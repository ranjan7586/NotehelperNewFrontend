import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import AboutPage from './Pages/About'
import Notes from './Pages/Notes'
import Registration from './Pages/Registration'
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard';
import AdminDashboard from './Pages/AdminPages/AdminDashboard';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/search' element={<AdminDashboard />} />
    </Routes>
  )
}

export default App