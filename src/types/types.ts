export type TodoItem = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type TodoProps = {
  todos: TodoItem[];
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
};

export type SearchBarItem = {
  query: string;
};
