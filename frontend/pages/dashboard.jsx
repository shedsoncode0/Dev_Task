import React, { useContext, useEffect, useState } from 'react'
import { HiOutlineFilter, HiOutlineUserGroup } from 'react-icons/hi'
import ProjectCard from '../components/ProjectCard'
import { AppContext } from '../contexts/AppContext';
import { BsCurrencyDollar } from 'react-icons/bs';
import Popup from '../components/Popup';
import axios from 'axios';

function Dashboard() {
    const { 
        currentPage, 
        changeCurrentPageName, 
        popup, 
        setPopup, 
        projectFormData, 
        setProjectFormData, 
        user,
        projects,
        setProjects
    } = useContext(AppContext);

    const { members, pay, startDate, deadLine, name, important } = projectFormData;

    useEffect(() => {
        changeCurrentPageName('dashboard');

        async function getAllProjects() {
            const apiEndPoint = "http://localhost:5000/api/project/all";
    
            const response = await axios.get(apiEndPoint, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                }
            });
            setProjects(response.data);
        }
        
        getAllProjects()
    }, [currentPage, setProjectFormData, popup]);


    const handleChange = (e) => {
        setProjectFormData((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const projectDetails = {
            members, 
            pay, 
            startDate,
            deadLine,
            name,
            important
         }

        const apiEndPoint = "http://localhost:5000/api/project/create";

        const response = await axios.post(apiEndPoint, projectDetails, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        });

        if (response.data) {
            console.log(response.data)
            setPopup(false)
        }
    }

  return (
    <div className='h-full'>
        <div className='flex w-full justify-between items-center space-x-4'>
            <h1>Projects: <span className='font-medium'> {projects.length} </span></h1>
            <input className='border px-3 py-1 max-w-xl w-full rounded-md font-medium outline-none placeholder:text-slate-200' type="text" placeholder='find project...' />
            <div className='flex items-center space-x-2 text-md font-medium'>
                <h1 className=''>Filter</h1>
                <HiOutlineFilter />
            </div>
        </div>

            {projects.length > 0 ? (
                <div className='py-10 flex w-full flex-1 justify-center gap-20 flex-wrap'>
                    {
                        projects.map((project) => (
                            <ProjectCard
                             key={project._id} 
                             brandName={project.name} 
                             members={project.members} 
                             startD={project.startDate} 
                             deadL={project.deadLine}
                             pay={project.pay}
                             project={project} 
                             important={project.important}
                            />
                        ))
                    }
                 </div>
            ) : (<h1 className='w-full text-center py-40 text-2xl font-bold text-slate-200'>You have no Project</h1>)}

        {popup && (
            <Popup handleSubmit={handleSubmit}>
                    <div className='flex px-2 items-center w-full h-11 rounded-lg border-2 space-x-2'>
                        <input onChange={handleChange} value={name}  className='w-full outline-none font-medium text-[15px]' type="text" name='name' placeholder='Brand Name'/>
                        <HiOutlineUserGroup size={19}/>
                    </div>
                <div className='flex items-center w-full space-x-4'>
                    <div className='flex px-2 items-center w-full h-11 rounded-lg border-2 space-x-2'>
                        <input onChange={handleChange} value={members}  className='w-full outline-none font-medium text-[15px]' type="number" name='members' placeholder='Members'/>
                        <HiOutlineUserGroup size={19}/>
                    </div>
                    <div className='flex px-2 items-center w-full h-11 rounded-lg border-2'>
                        <input onChange={handleChange} value={pay} className='w-full outline-none font-medium text-[15px]' type="number" name='pay' placeholder='Pay'/>
                        <BsCurrencyDollar size={19}/>
                    </div>
                </div>

                <div className='flex items-center w-full space-x-4'>
                  <h1 className='font-medium text-gray-300'>StartD</h1>
                  <input onChange={handleChange} value={startDate} className='border-2 px-2 h-11 rounded-lg w-full outline-none font-medium text-[15px]' type="date" name='startDate'/>
                </div>

                <div className='flex items-center w-full space-x-4'>
                    <h1 className='font-medium text-gray-300'>DeadL</h1>
                    <input onChange={handleChange} value={deadLine} className='border-2 px-2 h-11 rounded-lg w-full outline-none font-medium text-[15px]' type="date" name='deadLine'/>
                </div>
                <div className='flex items-center w-full space-x-2'>
                    <label className='font-semibold text-slate-500' htmlFor="important">Important</label>
                    <input onChange={handleChange} value={"k"} className='border-2 h-5 w-5 outline-none' type="checkbox" name='important'/>
                </div>
            </Popup>
        )}
    </div>
  )
}

export default Dashboard