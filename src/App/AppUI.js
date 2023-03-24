import React from 'react';
import './App.css'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import { TodoLoading } from '../TodoLoading';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
        <h1 className='title_app'>
            Miles de TODOs te esperan!
        </h1>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
            {loading && <TodoLoading/>}
            {error && <TodoError/>}
            {(!loading && !searchedTodos.length) && <TodoEmpty/>}     
            {searchedTodos.map( todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        
            ))}
        </TodoList>
        {!!openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}
        <CreateTodoButton
            openModal = { openModal}
            setOpenModal={setOpenModal}
        />
      </React.Fragment>
    );
};

export { AppUI };