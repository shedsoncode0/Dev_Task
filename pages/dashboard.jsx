import React from 'react'
import TodoContainer from '../components/TodoContainer'
import { HiOutlineFilter } from 'react-icons/hi'
import ProjectCard from '../components/ProjectCard'

function Dashboard() {
  return (
    <div className='h-full'>
        <div className='flex w-full justify-between items-center'>
            <h1>Project: <span className='font-medium'>23</span></h1>
            <input className='border px-3 py-1 max-w-xl w-full rounded-md font-medium outline-none placeholder:text-slate-200' type="text" placeholder='find project...' />
            <div className='flex items-center space-x-2 text-md font-medium'>
                <h1 className=''>Filter</h1>
                <HiOutlineFilter />
            </div>
        </div>

        <div className='py-10 flex w-full flex-1 justify-between gap-10 flex-wrap'>
            {/* <h1 className='text-center py-48 text-3xl font-bold text-slate-200'>
                You have no project 
            </h1> */}
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  )
}

export default Dashboard