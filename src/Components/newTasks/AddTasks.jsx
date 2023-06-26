import React, { useState } from "react";
import Modal from "react-modal";
import useFavoriteRepoStore from "../../stores/useFavoriteRepos";
import useManagerProjects from "../../stores/useManagerProjects";
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
import api from "../../Services/api";

Modal.setAppElement('#root');

const AddTask = () => {

    // Gerencia os valores selecionados dos campos de seleção
    const [statusOption, setStatusOption] = useState('');
    const [projectsOption, setProjectOption] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeStatusOption = (event) => {
        setStatusOption(event.target.value);
    };

    const handleChangeProjectOption = (event) => {
        setProjectOption(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }


    // Fecha o modal de que adiciona uma task quando selecionado
    const test = useFavoriteRepoStore((state) => state.favoriteRepoIds);
    const removeFromFavorites = useFavoriteRepoStore((state) => state.removeFromFavorites);

    const handleRemoveFromFavorites = () => {
        removeFromFavorites(false);
    }

    const projects = useManagerProjects((state) => state.allProjects);

    console.log('projectsOption');
    console.log(projectsOption);

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
                        <InputTitle type="text" value={title} onChange={handleTitle} />
                    </ContainerInputName>


                    <Texts>Projeto: </Texts>
                    <SelectStatus required value={projectsOption} onChange={handleChangeProjectOption}>
                        <OptionStatus value="" disabled>Selecione uma opção</OptionStatus>
                        {
                            projects.map((project, index) => {
                                return (
                                    <OptionStatus value={project.id} key={index}>{project.title}</OptionStatus>
                                )
                            })
                        }
                    </SelectStatus>

                    <ContainerStatusAndDate>
                        <FatherStatusAndDate>
                            <Texts>Status: </Texts>
                            <SelectStatus required value={statusOption} onChange={handleChangeStatusOption}>
                                <OptionStatus value="" disabled>Selecione uma opção</OptionStatus>
                                <OptionStatus value="Nova">Nova</OptionStatus>
                                <OptionStatus value="Em andamento">Em andamento</OptionStatus>
                                <OptionStatus value="Concluida">Concluido</OptionStatus>
                            </SelectStatus>
                        </FatherStatusAndDate>
                        <FatherDate>
                            <Texts>Data: </Texts>
                            <Date type="date" value={date} onChange={handleDateChange} />
                        </FatherDate>
                    </ContainerStatusAndDate>

                    <Texts>Descrição: </Texts>
                    <InputCompleteDescription type="text" value={description} onChange={handleChangeDescription} />

                    <ButtomCreate
                        onClick={async () => {

                            const newTask = await api.post('/tasks', {
                                name_task: title,
                                projectsId: projectsOption,
                                status: statusOption,
                                isCompleted: false,
                                doneAt: `${date}T00:00:00Z`,
                                description: description,
                                name: 'f',
                                projectName: ''
                            });
                            console.log(`newTask`);
                            console.log(newTask);
                        }}
                    >
                        CREATE
                    </ButtomCreate>

                </ContainerForm>

                <OutFormSide onClick={handleRemoveFromFavorites} />
            </ContainerModalWithElements>


            <OutFormTop onClick={handleRemoveFromFavorites} />
        </Modal>
    );
}

export default AddTask;
