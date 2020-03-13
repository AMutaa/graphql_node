const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`📚 Hello there, highlights are ready at ${url}`);
});
