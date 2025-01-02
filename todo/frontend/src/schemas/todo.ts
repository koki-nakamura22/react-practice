import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Todo {
    id: Int!
    title: String!
    body: String!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(title: String!, body: String!): Todo
    deleteTodo(id: Int!): Todo
    updateTodo(id: Int!, title: String!, body: String!): Todo
  }
`;
