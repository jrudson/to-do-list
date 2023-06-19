import React from "react";
import './styles.css';

const Card = ({ task }) => {

    console.log('task');
    console.log(task);

    return (
        <div className="cardFather">
            {
                //Melhorar esse código porque ficou uma bosta
                task[0].status == 'Concluido' ? <p className="title">Finalizadas</p> :
                    task[0].status == 'Em andamento' ? <p className="title2">Em Andamento</p> :
                        task[0].status == 'Nova' ? <p className="title3">Por vir</p>
                            : null
            }
            <div className="scrollContainer">
                {
                    task.map((element, index) => {
                        return (
                            <div key={index} className="card">
                                <h1 className="titleTask">{element.name_task}</h1>
                                <p className="subtitlesTasks">{element.status}</p>
                                <p className="subtitlesTasks">{element.isCompleted}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card;
