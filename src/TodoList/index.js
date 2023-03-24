import React from 'react';
import './TodoList.css';

function TodoList(props) {
    return (
        <section>
            <h1 className='todos_list_title'>TODOs</h1>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };