const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

// resolvers
const resolvers = {
  Query: {
    highlights: () => highlights,
    highlight: (parent, args) => {
      return highlights.find(highlight => highlight.id == args.id);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`📚 Hello there, highlights are ready at ${url}`);
});

// some sample data
let highlights = [
  {
    id: "1",
    content: "One day I will find the right words, and they will be simple.",
    title: "Dharma Bums",
    author: "Jack Kerouac"
  },
  {
    id: "2",
    content:
      "In the limits of a situation there is humor, there is grace, and everything else.",
    title: "Arbitrary Stupid Goal",
    author: "Tamara Shopsin"
  }
];
