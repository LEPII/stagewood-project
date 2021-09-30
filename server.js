const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
const path = require("path");
const Query = require("./src/resolvers/query")

const resolvers = {
  Query,};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "./src/schema.graphql"), "utf8"),
  resolvers,
  context: {
    prisma,
  }
});


server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
