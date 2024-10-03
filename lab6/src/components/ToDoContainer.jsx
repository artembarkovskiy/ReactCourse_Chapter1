import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskSearch from "./TaskSearch";
import useGetAllToDo from "../hooks/useGetAllToDo";
import Loading from "./Loading";

function ToDoContainer() {
  const [searchTitle, setSearchTitle] = useState("");
  const { data, setData, isLoading } = useGetAllToDo();

  function handleEditTask(todo) {
    setData((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
  }

  function handleAddTask(task) {
    setData((prev) => [task, ...prev]);
  }

  function handleDeleteTask(id) {
    setData((prev) => prev.filter((x) => x.id !== id));
  }

  const filteredTasks = data.filter((x) =>
    x.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <>
      <TaskSearch searchTitle={searchTitle} setSearchTitle={setSearchTitle} />

      <TaskForm onAddTask={handleAddTask} />

      <Loading loading={isLoading}>
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
        />
      </Loading>
    </>
  );
}

export default ToDoContainer;
