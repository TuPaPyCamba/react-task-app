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
        <div className="max-w-md mx-auto"> 
            <form onSubmit={handleSubmit} className="bg-neutral-600 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea una tarea nueva</h1>
                <input
                    onChange={(e) => setTitulo(e.target.value)}
                    className="bg-slate-300 p-3 w-full mb-2"
                    placeholder="Ingrese el nombre de la tarea" value={titulo} autoFocus
                />
                <textarea
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="bg-slate-300 p-3 w-full mb-2"
                    placeholder="Ingrese la descripcion de la tarea" value={descripcion}
                />
                <button className="bg-green-400 px-3 py-1 text-white">Guardar</button>
            </form>
        </div>
    );
}

export default TaskForm;
