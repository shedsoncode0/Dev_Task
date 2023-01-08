import React from 'react'
import Tracker from './Tracker'

function ProjectTypeCard() {
  return (
    <div className='bg-white drop-shadow-lg hover:shadow-xl transition-all rounded-md overflow-hidden max-w-xs w-full cursor-pointer'>
        {/* <div className='flex text-white'>
            <h1 className='bg-cyan-500 font-medium text-sm px-2 rounded-tr-md'>Full-Stack</h1>
        </div> */}
        <div>
            <h1 className='text-center p-2 font-semibold text-lg'>Backend</h1>
            <div className='flex w-full p-4 justify-evenly flex-col space-y-4'>
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
                <div className='flex items-center space-x-2'>
                    <h1 className='font-medium'>Tasks</h1>
                    <p className='flex-1 min-w-7 h-1 bg-gray-300'></p>
                    <h1 className='w-9 h-9 bg-gray-400 rounded-md grid place-items-center font-medium text-white'>44</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectTypeCard