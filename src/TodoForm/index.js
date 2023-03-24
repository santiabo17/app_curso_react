import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={ onSubmit } className="form">
            <label className="tittle_form">Que quieres hacer hoy?</label>
            <textarea
                className="text_area_form"
                value={newTodoValue}
                onChange={onChange}
                placeholder="Pasear al perro"
            />
            <div className="btn_container">
                <button
                    className="btn_form btn_form_submit"
                    type="submit"
                >
                    Añadir TODO
                </button>
                <button
                    className="btn_form btn_form_cancel"
                    type="button"
                    onClick={ onCancel }
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };