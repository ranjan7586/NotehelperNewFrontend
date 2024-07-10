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
import AdminUpload from './Pages/AdminPages/AdminUpload';
import AdminNotes from './Pages/AdminPages/AdminNotes';
import AdminUpdate from './Pages/AdminPages/AdminUpdate';
import AdminDomain from './Pages/AdminPages/AdminDomain';
import AdminUsers from './Pages/AdminPages/AdminUsers';


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
      <Route path='/admin/upload-note' element={<AdminUpload />} />
      <Route path='/admin/notes' element={<AdminNotes />} />
      <Route path='/admin/users' element={<AdminUsers />} />
      <Route path='/admin/create-domain' element={<AdminDomain />} />
      <Route path='/admin/update-note/:slug' element={<AdminUpdate />} />
      <Route path='/search' element={<AdminDashboard />} />
    </Routes>
  )
}

export default App