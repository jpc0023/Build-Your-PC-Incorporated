const {gql}= require('apollo-server-express');

const typeDefs= gql`
    type User {
        _id: ID
        username: String!
        email: String!
        savedProducts: [String]
    }

    type Product {
        _id: ID
        name: String!
        description: String!
        price: Float
        category: [String] # might need input type here instead of string
    }

    # might need authentication here

    type Query {
        me: User
        users: [User]
        user(username: String!): User

        products: [Product]
        product(name: String, category: String): [Product]
    }

    type Mutation {

    }

`;

module.exports= typeDefs