import React from "react";
import "./UserCard.css";

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="user-avatar"
      />
      <span className="user-name">{`${user.first_name} ${user.last_name}`}</span>
      <button
        onClick={() => onDelete(user.id)}
        className="delete-button"
      >
        Видалити
      </button>
    </div>
  );
};

export default UserCard;
