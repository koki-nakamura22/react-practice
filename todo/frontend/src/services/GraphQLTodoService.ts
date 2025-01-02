import { ITodoService, Todo } from "./ITodoService";
import { ApolloClient, NormalizedCacheObject, gql } from "@apollo/client";

export class GraphQLTodoService implements ITodoService {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async fetchTodoList(): Promise<Todo[]> {
    const { data } = await this.client.query({
      query: gql`
        query {
          todos {
            id
            title
            description
          }
        }
      `,
      fetchPolicy: "no-cache",
    });

    return data.todos;
  }

  async addTodo(todo: Todo): Promise<void> {
    await this.client.mutate({
    mutation: gql`
      mutation {
        addTodo(title: "${todo.title}", description: "${todo.description}") {
            id
        }
      }
    `,
    });
  }

  async deleteTodo(id: number): Promise<void> {
    await this.client.mutate({
      mutation: gql`
        mutation {
          deleteTodo(id: ${id})
        }
      `,
    });
  }

  async editTodo(todo: Todo): Promise<void> { 
    await this.client.mutate({
      mutation: gql`
        mutation {
          updateTodo(id: ${todo.id}, title: "${todo.title}", description: "${todo.description}")
        }
      `,
    });
  }
}
