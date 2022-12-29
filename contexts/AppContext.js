import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [ user, setUser ] = useState({
        email: "",
        fullname: "",
        password: ""
    });

    const [ popup, setPopup ] = useState({page: "", show: false});
    const [ currentPage, setCurrentPage ] = useState('task');
    const [error, setError] = useState(null);

    return (
        <AppContext.Provider
         value={{
            user,
            setUser,
            popup,
            setPopup,
            error,
            setError,
            currentPage,
            setCurrentPage
        }}>
            {children}
        </AppContext.Provider>
    );
}