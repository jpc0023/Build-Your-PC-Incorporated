const {gql}= require('apollo-server-express');

const typeDefs= gql`
    type User {
        _id: ID
        username: String!
        email: String!
        savedProducts: [Product]
    }

    type Product {
        _id: ID
        name: String!
        description: String!
        price: Float
        category: String 
    }

    # might need authentication here
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User

        products: [Product]
        product(name: String): Product
        productGroup(category: String): [Product]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addProduct(name: String, description: String, price: Float, category: String): Product
    }

`;

module.exports= typeDefs;
/**
 * future mutation options:
 * deleteUser, deleteProduct, updateUser, updateProduct
 */