import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskSearch from '../components/TaskSearch';
import '../src/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  function handleAddTask(task) {
    setTasks((prev) => [task, ...prev]);
  }
  

  function handleDeleteTask(id) {
    setTasks((prev) => prev.filter((x) => x.id !== id));
  }

  const filteredTasks = tasks.filter((x) =>
    x.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <>
      <PageTitle />
      <TaskSearch searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default App;
