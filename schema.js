const { gql } = require("apollo-server");

// Construct our schemas here
// Define the Highlight schemas
// Define a query for highlights or a highlight

const typeDefs = gql`
  type Highlight {
    id: ID!
    content: String!
    title: String
    author: String
  }

  type Query {
    highlights: [Highlight]!
    highlight(id: ID!): Highlight
  }
`;

module.exports = typeDefs;
