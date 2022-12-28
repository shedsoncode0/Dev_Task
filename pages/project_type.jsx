import React from 'react'
import { HiOutlineFilter } from 'react-icons/hi'
import ProjectTypeCard from '../components/ProjectTypeCard'

function ProjectType() {
  return (
    <div>
        <div className='h-full'>
        <div className='flex w-full justify-between items-center space-x-4'>
            <h1>Project Types: <span className='font-medium'>23</span></h1>
            <input className='border px-3 py-1 max-w-xl w-full rounded-md font-medium outline-none placeholder:text-slate-200' type="text" placeholder='find project types...' />
            <div className='flex items-center space-x-2 text-md font-medium'>
                <h1 className=''>Filter</h1>
                <HiOutlineFilter />
            </div>
        </div>

            <div className='py-10 flex w-full flex-1 justify-center gap-20 flex-wrap mt-10'>
                <ProjectTypeCard />
                <ProjectTypeCard />
                <ProjectTypeCard />
                <ProjectTypeCard />
                <ProjectTypeCard />
                <ProjectTypeCard />
            </div>
    </div>
    </div>
  )
}

export default ProjectType