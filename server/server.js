const express = require('express');
const {ApolloServer}= require('apollo-server-express');

const {typeDefs, resolvers}= require('./schemas');

const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3012;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server= new ApolloServer({
  typeDefs,
  resolvers
});

const startApolloServer= async (typeDefs, resolvers) => 
{

  await server.start();
}


db.once('open', () => {
  app.listen(PORT, () => 
  {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Graphql will appear at http://localhost:${PORT}${server.graphqlPath}`);
  });

});

startApolloServer(typeDefs, resolvers);