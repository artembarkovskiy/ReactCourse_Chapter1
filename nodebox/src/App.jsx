import React from "react";
import UserList from "./components/UserList";
import { useUsers } from "./hooks/useUsers";
import "./App.css";

function App() {
  const {
    filteredUsers,
    filter,
    loadUsers,
    handleDelete,
    handleFilter,
  } = useUsers();

  return (
    <div className="App">
      <h2>Користувачі з API:</h2>
      <button onClick={loadUsers} className="load-button">Завантажити користувачів</button>
      <input
        type="text"
        placeholder="Фільтрувати за ім'ям"
        value={filter}
        onChange={handleFilter}
        className="filter-input"
      />
      <UserList users={filteredUsers} onDelete={handleDelete} />
    </div>
  );
}

export default App;
