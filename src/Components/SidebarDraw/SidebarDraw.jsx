import React from "react";
import { FaBars } from "react-icons/fa";

import {
    ContainerSidebarActive,
    ContainerList,
    Text,
    NameAndPhoto,
    Photo,
    Name
} from "./styles";

import homer from '../../images/homer.webp';

const SidebarDraw = ({ active }) => {

    const closeSidebar = () => {
        console.log("Fechei")
        active(false);
    }

    return (
        <ContainerSidebarActive sidebar={active}>
            <FaBars color="white" size={30} onClick={closeSidebar} />
            <NameAndPhoto>
                <Photo src={homer} />
                <Name>Homer Simpson</Name>
            </NameAndPhoto>
            <ContainerList>
                <Text>Dashboard</Text>
                <Text>Tasks</Text>
                <Text>Projetos</Text>
            </ContainerList>
        </ContainerSidebarActive>
    );
}

export default SidebarDraw;
