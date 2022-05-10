const {gql}= require('apollo-server-express');

const typeDefs= gql`
    type Category {
        _id: ID
        name: String
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String!
        savedProducts: [String]
        
    }
    type Product {
        _id: ID
        name: String!
        description: String!
        price: Float
        category: String
    }

    type Auth {
        token: ID
        user: User
    }

    # might need authentication here
    type Query {
        categories: [Category]
        me: User
        users: [User]
        user(username: String!): User
        products: [Product]
        product(name: String, category: String): [Product]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        
      }
`;

module.exports= typeDefs;
/**
 * type Mutation {
    }
 */