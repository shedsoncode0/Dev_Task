import Nav from "./Nav";

function Layout({ children }) {
    return (
        <div className="px-6 md:max-w-2x1 max-w-7xl md:mx-auto font-poppins">
            <Nav />
            <main>{ children }</main>
        </div>
    )
}

export default Layout;