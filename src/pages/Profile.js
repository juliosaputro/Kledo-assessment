import React from 'react'
import Navbar from '../components/Navbar';
import CardProfile from '../components/CardProfile';

export default function Profile() {
   
  return (
    <div>
        <Navbar loginTo='/LoginAdmin'/>
        <CardProfile/>
    </div>
  )
}
