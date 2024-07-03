import { createContext, useState, useEffect } from "react";
import { dataTasks } from "../data/dataTasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTask] = useState([]);

    function createTask(task) {
        setTask([
            ...tasks,
            {
                id: tasks.length,
                titulo: task.titulo,
                descripcion: task.descripcion,
            },
        ]);
    }

    function deleteTask(taskId) {
        setTask(tasks.filter((task) => task.id !== taskId));
    }

    useEffect(() => {
        setTask(dataTasks);
    }, []);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
