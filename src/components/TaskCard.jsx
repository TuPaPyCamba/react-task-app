function TaskCard({task}) {
    return (
        <div>
            <h1>{task.titulo}</h1>
            <p>{task.descripcion}</p>
        </div>
    )
}

export default TaskCard
