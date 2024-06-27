import TaskCard from "../TaskCard";

export function TaskList({ tasks }) {

    if (tasks.length === 0) {
        return <h1> no hay tareas aun</h1>;
    }

    return (
        <div>
            <h1>Task List</h1>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}
