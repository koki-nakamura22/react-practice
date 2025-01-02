import React, { createContext, useContext } from 'react';
import { ITodoService } from '../services/ITodoService';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { GraphQLTodoService } from '../services/GraphQLTodoService';

interface TodoServiceProviderProps {
  client: ApolloClient<NormalizedCacheObject>;
  children: React.ReactNode;
}

const TaskServiceContext = createContext<ITodoService | null>(null);

export const TodokServiceProviderComponent: React.FC<TodoServiceProviderProps> = ({ client, children }) => {
  const service = new GraphQLTodoService(client);
  return (
    <TaskServiceContext.Provider value={service}>
      {children}
    </TaskServiceContext.Provider>
  );
};

export const useTodoService = (): ITodoService => {
  const context = useContext(TaskServiceContext);
  if (!context) {
    throw new Error('useTodoService must be used within a TodoServiceProvider');
  }
  return context;
};
