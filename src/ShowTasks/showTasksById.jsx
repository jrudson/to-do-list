import React, { useCallback, useEffect } from "react";
import api from "../Services/api";
import { useQuery } from 'react-query';
import './showTasksById.css';
import Card from "../Components/Cards/Card";
import Sidebar from "../Components/Sidebar/Sidebar";
import useManagerProjects from "../stores/useManagerProjects";

const ShowTasksById = () => {

    const addToProjects = useManagerProjects((state) => state.addToProjects);

    const handleAddToProjects = (data) => {
        addToProjects(data);
    }

    const getAllProjects = async () => {
        const allProjects = await api.get('/allprojects');
        handleAddToProjects(allProjects.data);
    }

    useEffect(() => {
        getAllProjects();
    }, [ShowTasksById]);


    const getTasks = async () => {
        try {
            const getTasksById = await api.get(`tasks/632f0998c04ccb782983b88f`);
            const task = getTasksById.data;
            return task;
        } catch (error) {
            console.log('Esse é o erro');
            console.log(error);
        }
    }

    try {
        const query = useQuery('tasks', getTasks);

        // Se não tiver nenhum elemento com o status da lista vai dar um erro
        // Impossível rodar a tela com qualquer um dos elementos vazios
        // Resolver bug

        const recent = query.data.filter((element) => element.status === 'Nova');
        const ongoing = query.data.filter((element) => element.status === 'Em andamento');
        const concluded = query.data.filter((element) => element.status === 'Concluido');

        return (
            <div className="container">
                <div className="sidebarContainer">
                    <Sidebar />
                </div>
                <div className="containerCards">
                    <div className="cards">
                        <Card
                            task={recent}
                        />
                    </div>
                    <div className="cards">
                        <p className="titulo">Minhas Tarefas</p>
                        <Card
                            task={ongoing}
                        />
                    </div>

                    <div className="cards">
                        <Card
                            task={concluded}
                        />
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.log('This is error');
        console.log(error);
    }
}

export default ShowTasksById;
