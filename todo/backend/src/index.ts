// src/index.ts
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

// Apollo Serverのインスタンスを作成
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// サーバを起動
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
