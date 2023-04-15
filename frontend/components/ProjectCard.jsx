import axios from "axios";
import React, { useContext, useState } from "react";
import { HiOutlineTrash, HiDotsHorizontal } from "react-icons/hi";
import { RiAlarmWarningLine, RiEdit2Line } from "react-icons/ri";
import { AppContext } from "../contexts/AppContext";

function ProjectCard({
  brandName,
  members,
  pay,
  startD,
  deadL,
  project,
  important,
  onClick,
}) {
  const { setPopup, user, projects, setProjects } = useContext(AppContext);

  const [option, setOption] = useState(false);

  const openOptions = () => {
    if (option === true) setOption(false);
    else setOption(true);
  };

  const deleteProject = async (projectId) => {
    const apiEndPoint = `http://localhost:5000/api/project/delete/${projectId}`;

    const response = await axios.delete(apiEndPoint, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });

    setOption(false);
    console.log(response.data);
    let result = projects.filter((project) => project._id !== projectId);
    setProjects(result);
    return response.data;
  };

  return (
    <div
      onClick={onClick}
      className="bg-white shadow-lg hover:shadow-xl transition-all rounded-md max-w-xs w-full cursor-pointer"
    >
      <div className="flex text-white justify-between relative">
        <h1 className="bg-cyan-500 font-medium text-sm px-2 rounded-tr-md rounded-tl-md">
          Full-Stack
        </h1>
        <HiDotsHorizontal
          onClick={() => openOptions()}
          color="black"
          size={23}
          className="mr-3 top-1 relative"
        />
      </div>
      <div className="relative">
        {option && (
          <div className="w-[170px] bg-white shadow-lg absolute z-30 -right-10 rounded-md overflow-hidden">
            <ul className="">
              <li
                onClick={() => deleteProject(project._id)}
                className="flex px-3 py-2 hover:bg-slate-100 items-center space-x-4 w-full"
              >
                <HiOutlineTrash size={20} /> <span>Delete</span>
              </li>
              <li className="flex px-3 py-2  hover:bg-slate-100 items-center space-x-4 w-full">
                <RiEdit2Line size={20} /> <span>Edit</span>
              </li>
            </ul>
          </div>
        )}

        <h1 className="text-center p-2 font-semibold text-lg">{brandName}</h1>
        <div className="flex w-full py-4 justify-evenly space-x-4 relative">
          <div className="w-16 h-16 bg-slate-700 rounded-full"></div>
          {important && (
            <RiAlarmWarningLine
              className="absolute bottom-4 left-0 text-red-400"
              size={20}
            />
          )}

          <div className="space-y-2">
            <h1 className="text-slate-400 text-sm">
              Members: <span className="font-medium text-black">{members}</span>
            </h1>
            <h1 className="text-slate-400 text-sm">
              StartD: <span className="font-medium text-black">{startD}</span>
            </h1>
            <h1 className="text-slate-400 text-sm">
              DeadL: <span className="font-medium text-black">{deadL}</span>
            </h1>
            <h1 className="text-slate-400 text-sm">
              Pay: <span className="font-medium text-black">{pay}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
