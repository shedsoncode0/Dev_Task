import React from 'react'

import { BsCurrencyDollar } from 'react-icons/bs'
import { HiOutlineUserGroup } from 'react-icons/hi'

function Popup() {
  return (
    <div className='absolute w-screen h-screen bg-[#0000005d] top-0 left-0 flex justify-center items-center px-4'>
        <form className='w-full max-w-md bg-white flex flex-col space-y-5 p-10 rounded-md' action="" method="post">
            <div className='flex items-center w-full space-x-4'>
              <div className='flex px-2 items-center w-full h-11 rounded-lg border-2 space-x-2'>
                <input className='w-full outline-none font-medium text-[15px]' type="number" name='members' placeholder='Members' required/>
                <HiOutlineUserGroup size={19}/>
              </div>
              <div className='flex px-2 items-center w-full h-11 rounded-lg border-2'>
                <input className='w-full outline-none font-medium text-[15px]' type="number" name='pay' placeholder='Pay' required/>
                <BsCurrencyDollar size={19}/>
              </div>
            </div>
            
            <div className='flex items-center w-full space-x-4'>
              <h1 className='font-medium text-gray-300'>StartD</h1>
              <input className='border-2 px-2 h-11 rounded-lg w-full outline-none font-medium text-[15px]' type="date" name='startD'/>
            </div>

            <div className='flex items-center w-full space-x-4'>
              <h1 className='font-medium text-gray-300'>DeadL</h1>
              <input className='border-2 px-2 h-11 rounded-lg w-full outline-none font-medium text-[15px]' type="date" name='DeadL'/>
            </div>

            <div className='flex justify-between relative pt-10'>
                <button type='submit' className='px-5 h-8 rounded-lg bg-red-500 text-white font-medium'>close</button>
                <button type='submit' className='px-5 h-8 rounded-lg bg-blue-500 text-white font-medium'>create</button>
            </div>

          </form>
    </div>
  )
}

export default Popup