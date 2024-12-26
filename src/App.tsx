import todos from "./data/todos.json";

import { Todos } from "./components/Todos/Todos";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./types/types";
import { useCallback, useMemo, useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Button } from "./components/Button/Button";

function App() {
  const [allTodos, setAllTodos] = useState(todos);
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const getMaxId = useMemo(() => {
    return (todos: TodoItem[]) => Math.max(0, ...todos.map(todo => todo.id));
  }, []);

  const addTodo = useCallback((todo: TodoItem) => {
    setAllTodos((prevTodos: TodoItem[]) => {
      const newTodo = {
        ...todo,
        id: getMaxId(prevTodos) + 1,
      };

      return [newTodo, ...prevTodos];
    });
  }, []);

  const deleteTodo = useCallback((todoId: number) => {
    setAllTodos((currentTodos) =>
      currentTodos.filter((currTodo) => currTodo.id !== todoId)
    );
  }, []);

  const filterTasks = useCallback((query: string) => {
    setQuery(query);
    console.log('query is: ' + query);
  }, []);
  
  const filteredTodos = query
  ? allTodos.filter((todo) => todo.title.includes(query))
    : allTodos;
  
  const completeTodo = useCallback((todoId: number) => {
    setAllTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);

  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log("count is: " + count);
  }, [count]);


  console.log("app is rendering");

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
        <Button increaseCount={increaseCount} count={count} />
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
