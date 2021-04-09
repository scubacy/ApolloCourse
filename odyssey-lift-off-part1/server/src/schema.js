const { gql } = require ('apollo-server');

const typeDefs = gql`
type Query{
    "Query to get entries for home page"
    tracksForHome: [Track!]!
}
query getTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
  }
}
"A track is a group of modules that teaches about a specific topic"
type Track{
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}
"Author of a complete track"
type Author{
    id: ID!
    name: String!
    photo: String
}
`;

module.exports = typeDefs;