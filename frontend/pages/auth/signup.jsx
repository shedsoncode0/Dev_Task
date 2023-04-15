import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

// React Icons
import { BsGoogle } from 'react-icons/bs'
import { AiFillApple, AiOutlineUser } from 'react-icons/ai'
import { MdAlternateEmail } from 'react-icons/md'
import { FiLock } from 'react-icons/fi'
import { AppContext } from '../../contexts/AppContext'

// Axios Package
import axios from 'axios'
import Link from 'next/link'

function Signup() {
  const router = useRouter();

  const { setFormData, formData, currentPage, setCurrentPage, changeCurrentPageName } = useContext(AppContext);

  const { email, fullname, password } = formData;

  useEffect(() => {
    changeCurrentPageName('');
  }, [currentPage, setCurrentPage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
       email, 
       fullname, 
       password 
    }

    const apiEndPoint = "https://api-devtask.onrender.com/api/auth/register";

    const response = await axios.post(apiEndPoint, userDetails)
    
    if(response.data) {
      if(typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(response.data));

          router.push('/dashboard')
      }
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({...prev, [e.target.name]:e.target.value}));
  }

  return (
    <div className=''>
      <div className='flex justify-center items-center flex-col text-center gap-2 mt-7'>
            <h1 className='text-xl font-bold text-[#4E5D78]'>Getting Started</h1>
            <p className='text-[#4E5D78] text-[14px] font-medium'>Create an account to continue and connect with the world</p>
          <div className='flex bg-white drop-shadow-xl p-9 justify-center items-center rounded-lg gap-2 mt-2 flex-col'>
            <div className='flex gap-9'>
              <button className='text-[#4E5D78] flex justify-center items-center gap-4 bg-gray-100 px-7 py-3 rounded-lg font-poppins font-bold sm:text-[13px] text-[8px]'><BsGoogle size={"14"}/> Log in with Google</button>
              <button className='text-[#4E5D78] flex justify-center items-center gap-4 bg-gray-100 px-7 py-3 rounded-lg font-poppins font-bold text-[13px]'><AiFillApple size={"20"}/> Log in with Apple</button>
            </div>

            <div className='w-full relative flex justify-center items-center'>
              <div className='h-[2px] bg-gray-200 absolute w-full'></div>
              <h1 className='p-3 text-[#4E5D78] bg-white rounded-full z-20 font-semibold'>
                OR
              </h1>
            </div>

            <form className='w-full flex flex-col gap-8' method="post" onSubmit={handleSubmit}>
              <div className='flex items-center w-full border-2 px-4 h-11 rounded-lg'>
                <MdAlternateEmail color='#4E5D78' size='18' />
                <input onChange={handleChange} className='px-2 w-full outline-none font-medium text-[15px]' type="email" name='email' placeholder='Your Email' required/>
              </div>
              <div className='flex items-center w-full border-2 px-4 h-11 rounded-lg'>
                <AiOutlineUser color='#4E5D78' size='18'/>
                <input onChange={handleChange} className='px-2 w-full outline-none font-medium text-[15px]' type="text" name='fullname' placeholder='Your Fullname' />
              </div>
              <div className='flex items-center w-full border-2 px-4 h-11 rounded-lg'>
                <FiLock color='#4E5D78' size='18'/>
                <input onChange={handleChange} className='px-2 w-full outline-none font-medium text-[15px]' type="password" name='password' placeholder='Create Password' />
              </div>
              {/* <Link href={'/dashboard'}> */}
                <button type='submit' className='w-full h-11 rounded-lg bg-cyan-500 text-white font-medium'>Sign Up</button>
              {/* </Link> */}
            </form>
            <h1 className='mt-2 text-[14px] font-semibold text-[#4E5D78]'>Already have an account? <Link href="login"><span className='text-cyan-500 ml-2'>Sign In</span></Link> </h1>
          </div>
      </div>
    </div>
  )
}

export default Signup;