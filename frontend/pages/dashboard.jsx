import React, { useContext, useEffect } from 'react'
import TodoContainer from '../components/TodoContainer'
import { HiOutlineFilter } from 'react-icons/hi'
import ProjectCard from '../components/ProjectCard'
import { AppContext } from '../contexts/AppContext';

function Dashboard() {
    const { currentPage, setCurrentPage, changeCurrentPageName } = useContext(AppContext);

    useEffect(() => {
        changeCurrentPageName('dashboard');
    }, [currentPage, setCurrentPage]);

  return (
    <div className='h-full'>
        <div className='flex w-full justify-between items-center space-x-4'>
            <h1>Projects: <span className='font-medium'>23</span></h1>
            <input className='border px-3 py-1 max-w-xl w-full rounded-md font-medium outline-none placeholder:text-slate-200' type="text" placeholder='find project...' />
            <div className='flex items-center space-x-2 text-md font-medium'>
                <h1 className=''>Filter</h1>
                <HiOutlineFilter />
            </div>
        </div>

        <div className='py-10 flex w-full flex-1 justify-center gap-20 flex-wrap'>
            <h1 className='text-center py-48 text-3xl font-bold text-slate-200'>
                You have no project 
            </h1>
        </div>
    </div>
  )
}

export default Dashboard