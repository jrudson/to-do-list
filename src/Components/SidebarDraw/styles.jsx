import styled from 'styled-components';


export const ContainerSidebarActive = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    position: fixed;
    left: ${props => props.sidebar ? '0' : '-100%'};
    background-color: #2A2E2A;
    animation: showSidebar 1s;

    > svg {
        color: white;
        left: 255px;
        position: fixed;
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-top: 10px;
        animation: showButtom 1s;
      }
    
      @keyframes showSidebar {
        from {
          opacity: 0;
          width: 0;
        }
        to {
          opacity: 1;
          width: 300px;
        }
      }

      @keyframes showButtom {
        from {
          opacity: 0;
          width: 0;
        }
        to {
          opacity: 1;
          width: 0;
        }
      }
`;

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 195px;
    width: 100%;
    margin-top: 50px;
`;

export const Text = styled.p`
    display: flex;
    color: white;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
    }
`;

export const NameAndPhoto = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 80px;
`;

export const Photo = styled.img`
    border-radius: 30px;
    box-sizing: border-box;
    width: 60px;
    height: 60px;

`;

export const Name = styled.p`
    color: white;
`;
