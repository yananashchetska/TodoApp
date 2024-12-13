import todos from "./data/todos.json";

import { Todos } from "./components/Todos/Todos";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./types/types";
import { useMemo, useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [allTodos, setAllTodos] = useState(todos);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  const addTodo = (newTodo: TodoItem) => {
    setAllTodos((prevTodos: TodoItem[]) => [newTodo, ...prevTodos]);
  };

  const deleteTodo = (todoId: number) => {
    setAllTodos((currentTodos) =>
      currentTodos.filter((currTodo) => currTodo.id !== todoId)
    );
  };

  const filterTasks = (query: string) => {
    setQuery(query);
  };

  const completeTodo = (todoId: number) => {

    setAllTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  //FOR OPTIMIZATION TEST
  const handleButtonClick = () => {
    setCount((prev) => prev + 1);
  };

  const filteredTodos = useMemo(() => {
    return query
      ? allTodos.filter((todo) => todo.title.includes(query))
      : allTodos;
  }, [query, allTodos]);

  return (
    <div
      className=" is-flex
      is-flex-direction-column
      is-justify-content-center
      is-align-items-center
      "
    >
      <div className="content">
        <h1 className="title is-size-1">Your todos:</h1>
        <p className="title is-size-4">Test optimization</p>
        <button className="button" onClick={handleButtonClick}>
          {count}
        </button>
        <p className="title is-size-4">Search by title</p>
        <SearchBar filterTasks={filterTasks} />
        <p className="title is-size-4">Create new todo</p>
        <Form addTodo={addTodo} />
        <Todos
          todos={filteredTodos}
          onDelete={deleteTodo}
          onComplete={completeTodo}
        />
      </div>
    </div>
  );
}

export default App;
