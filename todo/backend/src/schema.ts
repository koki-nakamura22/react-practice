import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    description: String!
    completed: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    todos: [Todo!]!
    todo(id: ID!): Todo
  }

  type Mutation {
    addTodo(title: String!, description: String): Todo!
    updateTodo(id: ID!, title: String, description: String, completed: Boolean): Todo!
    deleteTodo(id: ID!): Boolean!
  }
`;
