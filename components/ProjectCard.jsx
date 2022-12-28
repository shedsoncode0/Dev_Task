import React from 'react'

function ProjectCard() {
  return (
    <div className='bg-white drop-shadow-lg rounded-md overflow-hidden max-w-xs w-full'>
        <div className='flex text-white'>
            <h1 className='bg-cyan-500 font-medium text-sm px-2 rounded-tr-md'>Full-Stack</h1>
        </div>
        <div>
            <h1 className='text-center p-2 font-semibold text-lg'>Brand Name</h1>
            <div className='flex w-full py-4 justify-evenly space-x-4'>
                <div className='w-16 h-16 bg-slate-700 rounded-full'></div>
                <div className='space-y-2'>
                    <h1 className='text-slate-400 text-sm'>Members: <span className='font-medium text-black'>9</span></h1>
                    <h1 className='text-slate-400 text-sm'>StartD: <span className='font-medium text-black'>12th may</span></h1>
                    <h1 className='text-slate-400 text-sm'>DeadL: <span className='font-medium text-black'>30th may</span></h1>
                    <h1 className='text-slate-400 text-sm'>Pay: <span className='font-medium text-black'>13,000</span></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard