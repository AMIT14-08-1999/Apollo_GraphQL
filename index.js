const { ApolloServer, gql } = require("apollo-server");
const {typeDefs}=require("./schema")
const {db}=require("./db")
const {Query}=require("./resolvers/Query")
const {Product}=require("./resolvers/Product")
const {Category}=require("./resolvers/Category");
const { Mutation } = require("./resolvers/Mutation");
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Product,
    Category
  },
  context: {
   db
  }

});




server.listen().then(({ url }) => {
    console.log("Server is ready at "+ url);
})
// 2:56:00

//https://www.youtube.com/watch?v=qux4-yWeZvo