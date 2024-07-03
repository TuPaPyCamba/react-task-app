import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext)

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize">{task.titulo}</h1>
            <p className="text-gray-300 text-sm">{task.descripcion}</p>
            <button className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-500" onClick={() => deleteTask(task.id)}>
                Eliminar Tarea
            </button>
        </div>
    )
}

export default TaskCard
