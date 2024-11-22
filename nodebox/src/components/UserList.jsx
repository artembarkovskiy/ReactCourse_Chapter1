import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, onDelete }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UserList;
