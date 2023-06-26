import React, { useState } from "react";
import './styles.css';
import { RiPlayListAddLine, RiDeleteBin5Line } from 'react-icons/ri';
import api from "../../Services/api";
import AddTask from "../newTasks/AddTasks";
import useFavoriteRepoStore from "../../stores/useFavoriteRepos";

const Card = ({ task }) => {

    console.log('task');
    console.log(task);

    const addToFavorites = useFavoriteRepoStore((state) => state.addToFavorites);

    const handleAddToFavorites = (status) => {
        addToFavorites(status);
    }

    if (task.length > 0) {
        return (
            <div className="container-cards">
                <AddTask />
                <div className="cardFather">
                    {
                        //Melhorar esse código porque ficou uma bosta
                        task[0].status == 'Concluido' ? <p className="title">Finalizadas</p> :
                            task[0].status == 'Em andamento' ? <p className="title2">Em Andamento</p> :
                                task[0].status == 'Nova' ? <p className="title3">Por vir</p>
                                    : null
                    }
                    {
                        task.map((element, index) => {
                            return (
                                <div key={index} className="card">
                                    <RiDeleteBin5Line
                                        color="red"
                                        size={30}
                                        className="delete-buttom"
                                        onClick={async () => {
                                            const id = element.id;
                                            const response = await api.delete(`/updateTask/deletetaskt/${id}`);
                                            console.log('response');
                                            console.log(response);
                                        }}
                                    />
                                    <h1 className="titleTask">{element.name_task}</h1>
                                    <p className="subtitlesTasks">{element.status}</p>
                                    <p className="subtitlesTasks">{element.isCompleted}</p>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="bottom">
                    <RiPlayListAddLine
                        color="white"
                        size={25}
                        className="icon-add"
                        onClick={() => {
                            handleAddToFavorites(true);
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Card;
