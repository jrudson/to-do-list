import React, { useCallback, useEffect } from "react";
import api from "../Services/api";
import { useQuery } from 'react-query';
import './showTasksById.css';
import useFavoriteRepoStore from "../stores/useFavoriteRepos";
import Card from "../Components/Card";

const ShowTasksById = () => {

    const getTasks = async () => {
        try {
            // const tasks = [];
            const getTasksById = await api.get(`tasks/632f0998c04ccb782983b88f`);
            const task = getTasksById.data;
            // tasks.push(task);
            return task;
        } catch (error) {
            console.log('Esse é o erro');
            console.log(error);
        }
    }

    // const favoriteRepoId = useFavoriteRepoStore((state) => state.favoriteRepoIds);
    // const addToFavorites = useFavoriteRepoStore((state) => state.addToFavorites);
    // const removeFromFavorites = useFavoriteRepoStore((state) => state.removeFromFavorites);

    // const handleAddToFavorites = useCallback((repoId) => {
    //     console.log('repoId');
    //     console.log(repoId);
    //     addToFavorites(repoId);
    // }, []);

    // const handleRemoveFromFavorites = useCallback((repoId) => {
    //     console.log('repoId');
    //     console.log(repoId);
    //     removeFromFavorites(repoId);
    // }, []);

    try {
        const query = useQuery('tasks', getTasks);

        const ongoing = query.data.filter((element) => element.status == 'Em andamento');
        const concluded = query.data.filter((element) => element.status == 'Concluido');

        return (
            <div className="container">
                {/* {query.data.map((task, index) => { */}


                return (
                <Card
                    task={task}
                    index={index}
                // addToFavorites={handleAddToFavorites}
                // removeFromFavorites={handleRemoveFromFavorites}
                // Aqui ele verifica o que está dentro do state, no caso ele está vazio, por isso só aparecem botões para "adicionar" aos favoritos
                // isFavorite={favoriteRepoId.includes(task.name_task)}
                />
                );
                {/* })} */}
            </div>
        )
    } catch (error) {
        console.log('This is error');
        console.log(error);
    }
}

export default ShowTasksById;
