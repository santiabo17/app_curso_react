import React from "react";
import './TodoEmpty.css'
import img from './carpeta_vacia.png'

function TodoEmpty() {
    return [
        <div className="empty_container">
            <p className="empty_message">No tienes pendiente ningún TODO, anade uno nuevo!</p>
            <img className="img" src={img}></img>
        </div>  
    ]
}

export { TodoEmpty }