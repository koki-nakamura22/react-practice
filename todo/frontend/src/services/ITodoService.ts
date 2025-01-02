export interface Todo {
  id: number;
  title: string;
  description: string;
}

export interface ITodoService {
  fetchTodoList(): Promise<Todo[]>;
  addTodo(todo: Todo): Promise<void>;
  deleteTodo(id: number): Promise<void>;
  editTodo(todo: Todo): Promise<void>;
}
