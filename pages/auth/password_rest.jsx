import React from 'react'
import { BsGenderAmbiguous, BsGoogle, BsGenderMale } from 'react-icons/bs'
import { AiFillApple, AiOutlineUser, AiOutlineCalendar } from 'react-icons/ai'
import { MdAlternateEmail } from 'react-icons/md'
import { FiLock } from 'react-icons/fi'
import Link from 'next/link'

function PasswordReset() {
  return (
    <div className='flex justify-center items-center flex-col text-center gap-2 mt-7'>
          <h1 className='text-xl font-bold text-[#4E5D78]'>Forgot password?</h1>
          <p className='text-[#4E5D78] text-[14px] font-medium'>Enter your details to receive a rest link</p>
        <div className='flex bg-white drop-shadow-xl p-9 justify-center items-center rounded-lg gap-2 mt-2 flex-col'>

          <form className='w-full flex flex-col gap-5' action="" method="post">    
            <div className='flex items-center w-[450px] border-2 px-4 h-11 rounded-lg'>
              <MdAlternateEmail color='#4E5D78' size='18' />
              <input className='px-2 w-full outline-none font-medium text-[15px]' type="email" name='email' placeholder='Your Email' required/>
            </div>
            <button type='submit' className='w-full h-11 rounded-lg bg-cyan-500 text-white font-medium'>Send</button>
          </form>
          <h1 className='mt-2 text-[14px] font-semibold text-[#4E5D78]'> <span className='text-cyan-500 ml-2'><Link href='/auth/login' legacyBehavior>Back to Sign in</Link></span></h1>
        </div>
    </div>
  )
}

export default PasswordReset;