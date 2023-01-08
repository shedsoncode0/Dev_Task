import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    let user;
    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem('user'));
    }

    const [ formData, setFormData ] = useState({
        email: "",
        fullname: "",
        password: ""
    });

    let currentPageRoute;

    const [ popup, setPopup ] = useState({page: "", show: false});
    const [ currentPage, setCurrentPage ] = useState('');
    const [error, setError] = useState(null);

    // get current page name in Localhost
    useEffect(() => {
        if (typeof window !== "undefined") {
            currentPageRoute = JSON.parse(localStorage.getItem('currentPageName'));
            setCurrentPage(currentPageRoute)
        }
    }, [currentPage, setCurrentPage, changeCurrentPageName]);

      // Set current page name in Localhost
    function changeCurrentPageName(pageName) {
          if (typeof window !== 'undefined') {
              localStorage.setItem('currentPageName', JSON.stringify(pageName))
          }
    }
    

    return (
        <AppContext.Provider
         value={{
            formData,
            setFormData,
            user,
            popup,
            setPopup,
            error,
            setError,
            currentPage,
            setCurrentPage,
            changeCurrentPageName
        }}>
            {children}
        </AppContext.Provider>
    );
}