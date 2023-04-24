/** @format */

import React, { useState } from "react";

import { HiDotsHorizontal, HiOutlineTrash } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";
import { motion } from "framer-motion";

function TodoCard({ title, time, description }) {
  const [desc, setDesc] = useState(false);
  const [option, setOption] = useState(false);

  const openOptions = () => {
    setOption(!option);
  };

  const openDesc = () => {
    setDesc(!desc);
  };

  return (
    <div className="rounded-md flex max-w-3xl  bg-white shadow-md transition-all">
      <div className="w-5 bg-red-400 rounded-l-md cursor-pointer"></div>

      <div className="max-w-3xl flex flex-col flex-1 ">
        <div className="flex justify-between items-center text-[#4E5D78] bg-slate-100 px-4 py-1">
          <h2 className="text-sm text-gray-400 font-semibold">
            added: <span className="text-[#4E5D78]">2m ago</span>
          </h2>
          <HiDotsHorizontal
            onClick={openOptions}
            size={23}
            className="cursor-pointer"
          />
        </div>
        <div className="flex-1 px-4 text-[#4E5D78] relative flex-col items-center py-2 transition-all">
          {option && (
            <div className="w-[170px] bg-white shadow-lg absolute z-30 right-0 rounded-md overflow-hidden">
              <ul className="">
                <li
                  // onClick={() => deleteProject(project._id)}
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

          <h1 className="font-bold">
            {title}{" "}
            <span
              onClick={() => openDesc()}
              className="text-gray-300 text-[12px] cursor-pointer ml-2"
            >
              {desc ? "less" : "more"}
            </span>
          </h1>
          <motion.p
            // initial={{ height: 0 }}
            // animate={{ transitionDuration: 1, height: 200 }}
            className={desc ? "mt-2 block " : "hidden"}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
