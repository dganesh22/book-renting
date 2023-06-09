import React from 'react'
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Menu from './components/Util/Menu'
import Home from './components/Default/Home'
import Contact from './components/Default/Contact'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import UserDashboard from './components/User/UserDashboard'
import AdminDashboard from './components/Admin/AdminDashboard'
import Pnf from './components/Util/Pnf'

function App() {
  return (
    <BrowserRouter>
          <Menu/>
          <ToastContainer position={'top-center'} autoClose={4000} />
          <Routes>
              <Route path={`/`} element={<Home/>} />
              <Route path={`/contact`} element={<Contact/>} />
              <Route path={`/login`} element={<Login/>} />
              <Route path={`/register`} element={<Register/>} />
              <Route path={`/user/dashboard`} element={<UserDashboard/>} />
              <Route path={`/admin/dashboard`} element={<AdminDashboard/>} />
              <Route path={`/*`} element={<Pnf/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
