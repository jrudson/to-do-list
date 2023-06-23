import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import useFavoriteRepoStore from "../../stores/useFavoriteRepos";
import useManagerProjects from "../../stores/useManagerProjects";
import api from "../../Services/api";
import {
    ContainerForm,
    OutFormTop,
    OutFormSide,
    ContainerModalWithElements,
    InputTitle,
    ContainerInputName,
    InputCompleteDescription,
    Texts,
    OptionStatus,
    SelectStatus,
    ContainerStatusAndDate,
    FatherStatusAndDate,
    Date,
    FatherDate,
    Title,
    ButtomCreate
} from "./AddTaskStyles";

Modal.setAppElement('#root');

const AddTask = () => {

    // Gerencia os valores selecionados dos campos de seleção
    const [statusOption, setStatusOption] = useState('');
    const [projectsOption, setProjectOption] = useState('');

    const handleChangeStatusOption = (event) => {
        setStatusOption(event.target.value);
    };

    const handleChangeProjectOption = (event) => {
        setProjectOption(event.target.value);
    }


    // Fecha o modal de que adiciona uma task quando selecionado
    const test = useFavoriteRepoStore((state) => state.favoriteRepoIds);
    const removeFromFavorites = useFavoriteRepoStore((state) => state.removeFromFavorites);

    const handleRemoveFromFavorites = () => {
        removeFromFavorites(false);
    }

    const projects = useManagerProjects((state) => state.allProjects);

    console.log('projects');
    console.log(projects);

    // Criar um quadrado dentro do modal com as informação que precisamos para add a task, para que assim possamos também ter acesso ao clique fora do modal para fecha-lo
    const customStyles = {
        content: {
            display: 'flex',
            marginTop: '-5%',
            marginLeft: '-5%',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            backgroundColor: '#2A2E2A',
        }
    };

    return (
        <Modal
            style={customStyles}
            isOpen={test}
        >
            <OutFormTop onClick={handleRemoveFromFavorites} />


            <ContainerModalWithElements>
                <OutFormSide onClick={handleRemoveFromFavorites} />

                <ContainerForm>
                    <Title>Crie uma nova tarefa</Title>
                    <ContainerInputName>
                        <Texts>Nome da tarefa: </Texts>
                        <InputTitle type="text" />
                    </ContainerInputName>


                    <Texts>Projeto: </Texts>
                    <SelectStatus value={projectsOption} onChange={handleChangeProjectOption}>
                        <OptionStatus value="">Selecione uma opção</OptionStatus>
                        <OptionStatus value="opcao1">Opção 1</OptionStatus>
                        <OptionStatus value="opcao2">Opção 2</OptionStatus>
                        <OptionStatus value="opcao3">Opção 3</OptionStatus>
                    </SelectStatus>

                    <ContainerStatusAndDate>
                        <FatherStatusAndDate>
                            <Texts>Status: </Texts>
                            <SelectStatus required value={statusOption} onChange={handleChangeStatusOption}>
                                <OptionStatus value="" disabled>Selecione uma opção</OptionStatus>
                                <OptionStatus value="opcao1">Nova</OptionStatus>
                                <OptionStatus value="opcao2">Em andamento</OptionStatus>
                                <OptionStatus value="opcao3">Concluida</OptionStatus>
                            </SelectStatus>
                        </FatherStatusAndDate>
                        <FatherDate>
                            <Texts>Data: </Texts>
                            <Date type="date" />
                        </FatherDate>
                    </ContainerStatusAndDate>

                    <Texts>Descrição: </Texts>
                    <InputCompleteDescription type="text" />

                    <ButtomCreate
                    >CREATE</ButtomCreate>

                </ContainerForm>

                <OutFormSide onClick={handleRemoveFromFavorites} />
            </ContainerModalWithElements>


            <OutFormTop onClick={handleRemoveFromFavorites} />
        </Modal>
    );
}

export default AddTask;
