import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import LoginAdmin from '../pages/Admin/LoginAdmin'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Dashboard from '../pages/Admin/Dashboard'
import Shipping from '../pages/Admin/Shipping'
import AddShipping from '../pages/Admin/AddShipping'
import DetailShipping from '../pages/Admin/DetailShipping'


export default function Navigator() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Navigate to='/login'/>}/>
            <Route path='/LoginAdmin' element={<LoginAdmin/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/Shipping' element={<Shipping/>}/>
            <Route path='/AddShipping' element={<AddShipping/>}/>
            <Route path='/DetailShipping' element={<DetailShipping/>}/>
        </Routes>
    </Router>
  )
}
