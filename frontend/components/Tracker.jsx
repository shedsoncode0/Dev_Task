import React from 'react'

function Tracker() {
  return (
    <div className='flex-1 bg-white shadow-lg rounded-md overflow-hidden'>
        <h1 className='w-full py-2 text-center font-semibold bg-slate-100'>Tracker</h1>


        <div className='flex flex-col space-y-3 p-6'>

            <div className='flex items-center space-x-2'>
                <h1 className='font-medium'>Completed</h1>
                <p className='flex-1 min-w-7 h-1 bg-gray-300'></p>
                <h1 className='w-9 h-9 bg-green-600 rounded-md grid place-items-center font-medium text-white'>12</h1>
            </div>
            <div className='flex items-center space-x-2'>
                <h1 className='font-medium'>Deleted</h1>
                <p className='flex-1 min-w-7 h-1 bg-gray-300'></p>
                <h1 className='w-9 h-9 bg-red-400 rounded-md grid place-items-center font-medium text-white'>5</h1>
            </div>
            <div className='flex items-center space-x-2'>
                <h1 className='font-medium'>ongoing</h1>
                <p className='flex-1 min-w-7 h-1 bg-gray-300'></p>
                <h1 className='w-9 h-9 bg-yellow-400 rounded-md grid place-items-center font-medium text-white'>24</h1>
            </div>

        </div>
    </div>
  )
}

export default Tracker