import React from 'react'
import Navbar from '../../components/Navbar'
import FormLogin from '../../components/FormLogin'

export default function LoginAdmin() {
  return (
    <div>
      <Navbar loginTo="/Login"/>
      <FormLogin  to='/Dashboard'/>
    </div>
  )
}
