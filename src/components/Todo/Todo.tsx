import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoItemProps } from "../../types/types";
import { faCheckCircle, faCircle } from "@fortawesome/free-regular-svg-icons";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Todo: React.FC<TodoItemProps> = React.memo (({
  id,
  title,
  description,
  isCompleted,
  onDelete,
  onComplete,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleComplete = () => {
    onComplete(id);
  }

  console.log(`${id} todo is rendering`);
  
  return (
    <li 
      key={id} 
      className="box is-flex"
      style={{ textDecoration: isCompleted ? "line-through" : "none"}}
    >
      <FontAwesomeIcon
        onClick={handleComplete}
        icon={isCompleted ? faCheckCircle : faCircle}
        size="lg"
        style={{
          color: isCompleted ? "green" : "gray",
          cursor: "hand"
        }}
      />
      <div
        className="is-flex ml-4  is-flex-direction-column is-justify-content-space-between is-align-content-center"
          style={{ width: "100%" }}

      >
        <div
          className="is-flex is-justify-content-space-between is-align-content-center "
        >
          <h3
            className="title">{title}
          </h3>
          <button className="icon button" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
          </button>
        </div>
        <p>{description}</p>
        <p>Status: {isCompleted ? "Completed" : "Not Completed"}</p>
      </div>
    </li>
  );
});
