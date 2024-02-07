const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar JSON

  type User {
    _id: ID
    email: String
    password: String
  }

  type Vapes {
    _id: ID
    brand: String
    flavor: String
    capacity_mL: Float
    battery_life: String
    nicotine_percentage: Int
    puffs: Int
    price: Float
    image: [String]
  }

  type Juice {
    _id: ID
    brand: String
    flavor: String
    size: Float
    nicotine_percentage: Int
    price: Float
    image: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getAllVapes: [Vapes]
    getAllJuices: [Juice]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
