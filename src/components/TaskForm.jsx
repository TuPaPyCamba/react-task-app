import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ titulo, descripcion })
        setTitulo('')
        setDescripcion('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ingrese el nombre de la tarea" value={titulo} autoFocus
            />
            <textarea
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Ingrese la descripcion de la tarea" value={descripcion}
            />
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;
