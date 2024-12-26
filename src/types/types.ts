export type TodoItem = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

type TodoActions = {
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
};

export type TodoListProps = {
  todos: TodoItem[];
} & TodoActions;

export type TodoItemProps = TodoItem & TodoActions;

export type FormProps = {
  addTodo: (todo: TodoItem) => void;
}

export type SearchProps = {
  // query: string;
  filterTasks: (task: string) => void;
}

export type ButtonProps = {
  count: number;
  increaseCount: (count: number) => void;
}