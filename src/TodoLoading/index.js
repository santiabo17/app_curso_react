import React from "react";
import './TodoLoading.css'

function TodoLoading() {
    return [
        <div className="loader"></div>,
        <p className="load_message">sus TODOs estan siendo cargados, sera cuestión de segundos</p>
    ]
}

export { TodoLoading }