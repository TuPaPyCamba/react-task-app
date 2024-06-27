import { useState } from "react";

function TaskForm() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre);
        console.log(descripcion);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingrese el nombre de la tarea"
            />
            <input
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Ingrese la descripcion de la tarea"
            />
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;
