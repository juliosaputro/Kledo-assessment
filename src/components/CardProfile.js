import React from 'react'
import Rows from './Rows'
import { url_image } from '../utils/api'
import {useSelector} from 'react-redux'

export default function CardProfile() {
  const {userReducer} = useSelector(s=>s)

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
    <h2 className="text-5xl font-bold mb-6">Profile</h2>

    <div className="flex bg-gray-100 p-8 rounded-3xl border-2 border-gray-200 w-full max-w-3xl h-1/2">
      <div className='w-2/3'>
        <Rows title='Nama' value={userReducer.value.data.user.name}/>
        <Rows title='Alamat' value='Malybu Mansion'/>
        <Rows title='No. HP' value={userReducer.value.data.user.phone_number}/>
        <Rows title='Email' value={userReducer.value.data.user.email}/>
        <Rows title='Motto' value='The best thing about a boolean is even if you are wrong, you are only off by a bit'/>
      </div>
      <div className='flex-1 '>
        <img src={url_image} alt='' className='w-28 h-28 rounded-full mx-auto'/>
      </div>
    </div>
  </div>
  )
}
