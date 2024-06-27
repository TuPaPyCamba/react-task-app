import { dataTasks } from "./dataTasks";
import { useState, useEffect } from "react";

export function TaskList() {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        setTask(dataTasks);
    }, []);

    if (tasks.length === 0) {
        return <h1> no hay tareas aun</h1>;
    }

    return (
        <div>
            <h1>Task List</h1>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h1>{task.titulo}</h1>
                    <p>{task.descripcion}</p>
                </div>
            ))}
        </div>
    );
}
