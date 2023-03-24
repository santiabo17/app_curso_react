import React from 'react';
import './TodoItem.css';


function TodoItem(props) {
    return ( 
        <li className={`${props.completed && 'completed'}`}>
            <span 
                className={`done ${props.completed && 'activate'}`}
                onClick = {props.onComplete}
                >
                    ✔
            </span>
            <p>{props.text}</p>
            <span 
                className='delete'
                onClick={props.onDelete}
                >
                    X
            </span>
        </li>
    )
}

export { TodoItem };