import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import SidebarDraw from "../SidebarDraw/SidebarDraw";
import { ContainerSidebar } from "./styles";
import { IconLogout } from "./styles";

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        console.log("Abri");
        setSidebar(!sidebar)
    };

    return (
        <ContainerSidebar>
            <FaBars color="white" size={30} onClick={showSidebar} />
            {sidebar && <SidebarDraw active={setSidebar} />}
        </ContainerSidebar>
    );
}

export default Sidebar;

