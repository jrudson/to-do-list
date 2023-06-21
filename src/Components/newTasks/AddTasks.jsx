import React, { useState } from "react";
import Modal from "react-modal";
import useFavoriteRepoStore from "../../stores/useFavoriteRepos";
import {
    ContainerForm,
    OutFormTop,
    OutFormSide,
    ContainerModalWithElements,
    InputTitle,
    ContainerInputName,
    InputCompleteDescription,
    ContainerInputCompleteDescription,
    Texts
}
    from "./AddTaskStyles";

const AddTask = () => {


    const test = useFavoriteRepoStore((state) => state.favoriteRepoIds);
    console.log('test new');
    console.log(test);

    const removeFromFavorites = useFavoriteRepoStore((state) => state.removeFromFavorites);

    const handleRemoveFromFavorites = () => {
        removeFromFavorites(false);
    }

    // Criar um quadrado dentro do modal com as informação que precisamos para add a task, para que assim possamos também ter acesso ao clique fora do modal para fecha-lo

    const customStyles = {
        content: {
            display: 'flex',
            alignItems: 'center',
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
                    <ContainerInputName>
                        <Texts>Nome da tarefa: </Texts>
                        <InputTitle type="text" />
                    </ContainerInputName>

                    <ContainerInputCompleteDescription>
                        <Texts>Descrição: </Texts>
                        <InputCompleteDescription type="text" />
                    </ContainerInputCompleteDescription>
                    <Texts>Status</Texts>
                    <p>Projeto</p>
                </ContainerForm>

                <OutFormSide onClick={handleRemoveFromFavorites} />
            </ContainerModalWithElements>


            <OutFormTop onClick={handleRemoveFromFavorites} />
        </Modal>
    );
}

export default AddTask;