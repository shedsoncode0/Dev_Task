import React, { useState } from 'react'

import { HiDotsHorizontal } from 'react-icons/hi'

function TodoCard({title, time, desc}) {
    const [ decs, setDesc ] = useState(false);

    const openDesc = () => {
        if (decs === true) setDesc(false)
        else setDesc(true);
    }

  return (
    <div className='rounded-md flex max-w-3xl overflow-hidden bg-white shadow-md'>
        <div className='h-20 w-5 bg-red-400 cursor-pointer'></div>

        <div className='max-w-3xl flex flex-col flex-1 '>
            <div className='flex justify-between items-center text-[#4E5D78] bg-slate-100 px-4 py-1'>
                <h2 className='text-sm text-gray-400 font-semibold'>added: <span className='text-[#4E5D78]'>2m ago</span></h2>
                <HiDotsHorizontal size={23} className/>
            </div>
            <div className='flex-1 px-4 text-[#4E5D78] flex-col items-center py-2 transition-all'>
                <h1 className='font-bold '>{title} <span onClick={() => openDesc()} className='text-gray-300 text-[12px] cursor-pointer'>{decs ? "less" : "more"}</span></h1>
                <p className={decs ? "mt-2 block" : "hidden"}>{decs}</p>
            </div>
        </div>
    </div>
  )
}

export default TodoCard