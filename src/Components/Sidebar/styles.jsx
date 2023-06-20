import styled from 'styled-components';

export const ContainerSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 60px;
    background-color: #2A2E2A;
    > svg {
        margin: 0 20px;
        display: flex;
        cursor: pointer;
        margin-top: 10px;
    }
`;

export const IconLogout = styled.div`
    display: flex;
    transform: rotate(270deg);
    cursor: pointer;
    margin-bottom: 10px;
`;
