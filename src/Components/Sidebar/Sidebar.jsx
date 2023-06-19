import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import './styles.css';
import SidebarDraw from "../SidebarDraw/SidebarDraw";

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    let width;
    sidebar == true ? width = 300 : width = 60;

    return (
        <div className="containerSidebar" style={{ width: `${width}px` }}>
            <FaBars className="buttomSidebar" color="white" size={30} onClick={showSidebar} />
            {sidebar && <SidebarDraw active={setSidebar} />}
            <AiOutlineLogout color="red" size={30} className="iconLogout" onClick={console.log('Cliquei no logout')} />
        </div>
    );
}

export default Sidebar;

