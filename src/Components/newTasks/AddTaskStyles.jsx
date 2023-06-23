import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    width: 40%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.84);
    border-radius: 20px;
    flex-direction: column;
    border-width: 2px;
    border-color: black;
`;

export const OutFormTop = styled.div`
    width: 100%;
    height: 3%;
    position: relative;
`;

export const Title = styled.p`
    font-size: 17px;
    color: black;
    align-self: center;
    font-weight: bold;
`;

export const OutFormSide = styled.div`
    width: 35%;
    height: 100%;
    position: relative;
`;

export const ContainerModalWithElements = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
`;

export const ContainerInputName = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const InputTitle = styled.input`
    display: flex;
    height: 30px;
    width: 94%;
    border-radius: 10px;
    margin: 2px 10px;
    border-width: 1.5px;
    border-color: black;
`;

export const Texts = styled.p`
    display: flex;
    font-size: 15px;
    color: black;
    margin: 12px 12px 2px 22px;
`;

export const SelectStatus = styled.select`
    display: flex;
    width: 95%;
    height: 35px;
    border-radius: 10px;
    margin: 2px 10px;
    border-width: 1.5px;
    border-color: black;
    cursor: pointer;
`;

export const OptionStatus = styled.option`
    width: 100%;
    height: 30px;
    cursor: pointer;
`;


export const InputCompleteDescription = styled.textarea`
    height: 35%;
    width: 94%;
    border-radius: 10px;
    margin: 2px 10px;
    border-width: 1.5px;
    border-color: black;
`;

export const ContainerInputCompleteDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const ContainerStatusAndDate = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FatherStatusAndDate = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const Date = styled.input`
    display: flex;
    font-size: 17px;
    color: black;
    margin: 2px 10px;
    height: 50%;
    width: 88%;
    border-radius: 10px;
    border-width: 1.5px;
    border-color: black;
    cursor: pointer;
`;

export const FatherDate = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const ButtomCreate = styled.button`
    display: flex;
    height: 35px;
    width: 20%;
    align-self: flex-end;
    margin-right: 3%;
    margin-top: 25px;
    border-radius: 10px;
    border-width: 1.5px;
    border-color: black;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #24a0ed;
    cursor: pointer;
`;







export const InputSimpleDescription = styled.input`

`;

export const ContainerInputSimpleDescription = styled.div`

`;