import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Nav from "./Nav";
import Popup from "./Popup";

function Layout({ children }) {
    const { popup } = useContext(AppContext);

    return (
        <div className="px-6 md:max-w-2x1 max-w-7xl md:mx-auto font-poppins">
            <Nav />
            <main>{ children }</main>
            {popup.show && (
                <Popup />
            )}
        </div>
    )
}

export default Layout;