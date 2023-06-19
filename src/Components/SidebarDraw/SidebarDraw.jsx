import React from "react";
import { FaBars } from "react-icons/fa";
import './styles.css';

const SidebarDraw = ({ active }) => {

    const closeSidebar = () => {
        active(false);
    }

    return (
        <div className="containerSidebarActive">
            <FaBars className="buttomSidebarActive" color="white" size={30} onClick={closeSidebar} />
        </div>
    );
}

export default SidebarDraw;
