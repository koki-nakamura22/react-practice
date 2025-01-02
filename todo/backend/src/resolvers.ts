import { IResolvers } from '@graphql-tools/utils';

interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

// data store on memory
const todos: Todo[] = [
  {
    id: '1',
    title: '初期タスク1',
    description: 'これは初期タスクの説明です。',
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: '初期タスク2',
    description: 'これは別の初期タスクの説明です。',
    completed: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const resolvers: IResolvers = {
  Query: {
    todos: () => todos,
    todo: (_: any, args: { id: string }) => todos.find(todo => todo.id === args.id) || null,
  },
  Mutation: {
    addTodo: (_: any, args: { title: string; description?: string }) => {
      const newTodo: Todo = {
        id: (todos.length + 1).toString(),
        title: args.title,
        description: args.description,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      todos.push(newTodo);
      return newTodo;
    },
    updateTodo: (_: any, args: { id: string; title?: string; description?: string; completed?: boolean }) => {
      const todo = todos.find(todo => todo.id === args.id);
      if (!todo) throw new Error('タスクが見つかりません。');

      if (args.title !== undefined) todo.title = args.title;
      if (args.description !== undefined) todo.description = args.description;
      if (args.completed !== undefined) todo.completed = args.completed;
      todo.updatedAt = new Date().toISOString();

      return todo;
    },
    deleteTodo: (_: any, args: { id: string }) => {
      const index = todos.findIndex(todo => todo.id === args.id);
      if (index === -1) return false;
      todos.splice(index, 1);
      return true;
    },
  },
};
