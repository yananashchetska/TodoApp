import React from "react";
import { TodoListProps } from "../../types/types";
import { Todo } from "../Todo/Todo";

export const Todos: React.FC<TodoListProps> = React.memo(
  ({ todos, onDelete, onComplete }) => {
    console.log("TODOS are rendering");
    return (
      <ul
        className="is-flex is-flex-direction-column"
        style={{ width: "50vw" }}
      >
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            isCompleted={todo.isCompleted}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </ul>
    );
  }
);
