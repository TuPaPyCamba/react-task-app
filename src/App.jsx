import { TaskList } from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useEffect, useState } from "react";
import { dataTasks } from "./data/dataTasks";

function App() {

  const [tasks, setTask] = useState([])

  useEffect(() => {
    setTask(dataTasks)
  }, [])

  function createTask(task) {
    setTask([...tasks, {
      id: tasks.length,
      titulo: task.titulo,
      descripcion: task.descripcion,
  }])
  }

  function deleteTask(taskId){
    setTask(tasks.filter(task => task.id !== taskId))
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
