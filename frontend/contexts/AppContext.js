/** @format */

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [popup, setPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState("");
  const PORT = "http://localhost:5000";

  // Save user to LocalStorage
  let user;
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const [projectFormData, setProjectFormData] = useState({
    members: "",
    startDate: "",
    deadLine: "",
    pay: "",
    name: "",
    important: true,
  });

  // User Sign Up details
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  let currentPageRoute;

  // get current page name in Localhost
  useEffect(() => {
    if (typeof window !== "undefined") {
      currentPageRoute = JSON.parse(localStorage.getItem("currentPageName"));
      setCurrentPage(currentPageRoute);
    }
  }, [currentPage, setCurrentPage, changeCurrentPageName]);

  // Set current page name in Localhost
  function changeCurrentPageName(pageName) {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentPageName", JSON.stringify(pageName));
    }
  }

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        projectFormData,
        setProjectFormData,
        projects,
        setProjects,
        user,
        popup,
        setPopup,
        error,
        setError,
        currentPage,
        setCurrentPage,
        changeCurrentPageName,
        PORT,
        projectId,
        setProjectId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
