import React from "react";
import './styles.css';

const Card = ({ task, index, addToFavorites, removeFromFavorites, isFavorite }) => {

    const handleToogleFavorite = () => {
        if (isFavorite) {
            removeFromFavorites(task.name_task);
        } else {
            addToFavorites(task.name_task);
        }
    }

    return (
        <div key={index} className="containerCard">
            <h1 className="titleTask">{task.name_task}</h1>
            <p className="subtitlesTasks">{task.status}</p>
            <p className="subtitlesTasks">{task.isCompleted}</p>
            <p className="subtitlesTasks">{task.doneAt}</p>
            {/* <button onClick={handleToogleFavorite}>
                {!isFavorite ? 'Add to favorites' : 'Remove from favorites'}
            </button> */}
        </div>
    );
}

export default Card;
