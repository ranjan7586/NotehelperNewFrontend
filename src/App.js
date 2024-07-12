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
import UserUpload from './Pages/UserPages/UserUpload';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Address from './Pages/Address';
import Disclaimer from './Pages/Disclaimer';
import Feedback from './Pages/Feedback';
import Search from './Pages/Search';
import NoteDetails from './Pages/NoteDetails';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='/address' element={<Address />} />
      <Route path='/disclaimer' element={<Disclaimer />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/search' element={<Search />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/admin/upload-note' element={<AdminUpload />} />
      <Route path='/admin/notes' element={<AdminNotes />} />
      <Route path='/admin/users' element={<AdminUsers />} />
      <Route path='/admin/create-domain' element={<AdminDomain />} />
      <Route path='/admin/update-note/:slug' element={<AdminUpdate />} />
      <Route path='/user/upload-note' element={<UserUpload />} />
      <Route path='/note-details/:slug' element={<NoteDetails/>}/>


    </Routes>
  )
}

export default App