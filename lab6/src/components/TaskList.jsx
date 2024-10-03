import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask, onEditTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
