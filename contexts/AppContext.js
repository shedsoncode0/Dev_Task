import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [ popup, setPopup ] = useState({page: "", show: false});

    return (
        <AppContext.Provider
         value={{
           popup,
           setPopup,
        }}>
            {children}
        </AppContext.Provider>
    );
}