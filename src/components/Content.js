import React from 'react'

export default function Content({children}) {
  return (
    <div className="flex-1 bg-gray-200 p-8">
        <div className="flex justify-center items-center bg-white p-8 rounded-3xl border-2 border-gray-200 w-full h-full">
            {children}
        </div>
        </div>
  )
}
