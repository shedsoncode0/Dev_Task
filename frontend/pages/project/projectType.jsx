/** @format */

import React, { useContext, useEffect, useState } from "react";
import { HiOutlineFilter, HiOutlineUserGroup } from "react-icons/hi";
import { SpinnerDotted } from "spinners-react";
import ProjectTypeCard from "../../components/ProjectTypeCard";
import axios from "axios";
import { AppContext } from "../../contexts/AppContext";
import Popup from "../../components/Popup";
import Input from "../../components/Input";
import { useRouter } from "next/router";

function ProjectType() {
  const router = useRouter();
  // const projectId = router.query.projectId || "";
  const { popup, setPopup, changeCurrentPageName, PORT, projectId } =
    useContext(AppContext);
  const [projectTypes, setProjectTypes] = useState([]);
  const [typeName, setTypeName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataIsLoading, setDataIsLoading] = useState(false);

  const getProjectType = () => {
    setDataIsLoading(true);
    const apiEndPoint = `${PORT}/api/project/project_type/all/${projectId}`;
    alert(apiEndPoint);
    setIsLoading(true);
    axios
      .get(apiEndPoint)
      .then((response) => {
        console.log(response);
        setProjectTypes(response.data);
        setIsLoading(false);
        setDataIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProjectType();
    changeCurrentPageName("project_type");
  }, [projectId]);

  const createType = (e) => {
    e.preventDefault();
    const apiEndPoint = `${PORT}/api/project/project_type/create`;
    setIsLoading(true);

    axios
      .post(apiEndPoint, { name: typeName, projectId })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setPopup(false);
        getProjectType();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="h-full">
        <div className="flex w-full justify-between items-center space-x-4">
          <h1>
            Project Types:{" "}
            <span className="font-medium">{projectTypes.length} </span>
          </h1>
          <input
            className="border px-3 py-1 max-w-xl w-full rounded-md font-medium outline-none placeholder:text-slate-200"
            type="text"
            placeholder="find project types..."
          />
          <div className="flex items-center space-x-2 text-md font-medium">
            <h1 className="">Filter</h1>
            <HiOutlineFilter />
          </div>
        </div>
        {dataIsLoading ? (
          <div className="w-full mt-32 flex-1 flex justify-center items-center">
            <SpinnerDotted
              size={70}
              color="rgba(6, 182, 212, 0.5)"
              thickness={200}
            />
          </div>
        ) : (
          <div>
            {projectTypes.length > 0 ? (
              <div className="py-10 flex w-full flex-1 justify-center gap-20 flex-wrap mt-10">
                {projectTypes.map((type) => (
                  <ProjectTypeCard
                    key={type._id}
                    completed={type.completed}
                    deleted={type.deleted}
                    ongoing={type.onGoing}
                    name={type.name}
                    tasks={type.tasks.length}
                  />
                ))}
              </div>
            ) : (
              <h1 className="w-full text-center py-40 text-2xl font-bold text-slate-200">
                No Project Type
              </h1>
            )}
          </div>
        )}
      </div>

      {popup && (
        <Popup>
          <form
            onSubmit={createType}
            className="w-full max-w-xl bg-white flex flex-col  space-y-5 p-10 rounded-xl"
          >
            <div className="flex px-2  items-center w-full h-11 rounded-lg border-2 space-x-2">
              <Input
                onChange={(e) => setTypeName(e.target.value)}
                value={typeName}
                type="text"
                name="name"
                placeholder="Name..."
              />
            </div>

            <div className="flex justify-between relative pt-10">
              <button
                onClick={() => setPopup(false)}
                className="px-5 h-8 rounded-lg bg-red-500 text-white font-medium"
              >
                close
              </button>
              <button
                type="submit"
                className="px-5 h-8 rounded-lg bg-blue-500 text-white font-medium"
              >
                {isLoading ? (
                  <SpinnerDotted size={25} color="white" thickness={200} />
                ) : (
                  "Add"
                )}
              </button>
            </div>
          </form>
        </Popup>
      )}
    </div>
  );
}

export default ProjectType;
