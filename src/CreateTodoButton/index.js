import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickFunction = () => {
        // console.log(props.openModal);
        // if (props.openModal == false){
        //     props.setOpenModal(true);
        // } else {
        //     props.setOpenModal(false);
        // }
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button
            className='CreateTodoButton'
            onClick={onClickFunction}
        >
            <span className='simbol_add'>+</span>
        </button>
    );
}

export { CreateTodoButton };