import { useState } from "react";

function TaskItem({ task, onDeleteTask, onEditTask }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState(task.title);
  function handleEdit() {
    setIsEditMode(true);

    if (isEditMode) {
      const toDo = {
        id: task.id,
        title: title,
      };

      onEditTask(toDo);
      setIsEditMode(false);
    }
  }
  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <li>
      {isEditMode ? (
        <>
          <input
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="Введіть зміну"
          />
        </>
      ) : (
        <span>{task.title}</span>
      )}
      <button onClick={() => onDeleteTask(task.id)}>Видалити</button>
      <button onClick={handleEdit}>
        {isEditMode ? "Зберегти" : "Редагувати"}
      </button>
    </li>
  );
}
export default TaskItem;
