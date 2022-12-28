import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [ popup, setPopup ] = useState({page: "", show: false});
    const [ currentPage, setCurrentPage ] = useState('task');

    return (
        <AppContext.Provider
         value={{
           popup,
           setPopup,
           currentPage,
           setCurrentPage
        }}>
            {children}
        </AppContext.Provider>
    );
}