import { useState } from "react";

function TaskForm({ createTask }) {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ titulo, descripcion })
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ingrese el nombre de la tarea"
            />
            <textarea
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Ingrese la descripcion de la tarea"
            />
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;
