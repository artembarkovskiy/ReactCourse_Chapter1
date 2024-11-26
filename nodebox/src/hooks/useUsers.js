import { useState } from "react";
import axios from "axios";

const getUsers = async () => {
  const response = await axios.get("https://reqres.in/api/users");
  return response.data.data;
};

const deleteUser = async (id) => {
  await axios.delete(`https://reqres.in/api/users/${id}`);
};

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  //const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const loadUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
      //setFilteredUsers(usersData);
    } catch (error) {
      console.error("Помилка завантаження користувачів:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      //setFilteredUsers(updatedUsers);
    } catch (error) {
      console.error("Помилка видалення користувача:", error);
    }
  };

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
    //setFilteredUsers(filtered);
  };
  const filtered = users.filter((user) =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(filter)
  );

  return {
    users,
    filtered,
    filter,
    setFilter,
    loadUsers,
    handleDelete,
    handleFilter,
  };
};
