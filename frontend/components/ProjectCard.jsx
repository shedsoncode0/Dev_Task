import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

function ProjectCard({ brandName, members, pay, startD, deadL }) {
  return (
    <div className='bg-white drop-shadow-lg hover:shadow-xl transition-all rounded-md overflow-hidden max-w-xs w-full cursor-pointer'>
        <div className='flex text-white justify-between'>
            <h1 className='bg-cyan-500 font-medium text-sm px-2 rounded-tr-md'>Full-Stack</h1>
            <HiDotsHorizontal color='black' size={23} className="mr-3 top-1 relative"/>
        </div>
        <div>
            <h1 className='text-center p-2 font-semibold text-lg'>{ brandName }</h1>
            <div className='flex w-full py-4 justify-evenly space-x-4'>
                <div className='w-16 h-16 bg-slate-700 rounded-full'></div>
                <div className='space-y-2'>
                    <h1 className='text-slate-400 text-sm'>Members: <span className='font-medium text-black'>{ members }</span></h1>
                    <h1 className='text-slate-400 text-sm'>StartD: <span className='font-medium text-black'>{ startD }</span></h1>
                    <h1 className='text-slate-400 text-sm'>DeadL: <span className='font-medium text-black'>{ deadL }</span></h1>
                    <h1 className='text-slate-400 text-sm'>Pay: <span className='font-medium text-black'>{ pay }</span></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard