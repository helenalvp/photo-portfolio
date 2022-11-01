import "./index.scss"
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Layout = () => {
    return (
        <div className="App">
            <Sidebar/>
            Hello
            <Outlet/>
        </div>
    )
}

export default Layout;