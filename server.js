const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");
const Query = require("./server/resolvers/query");

const prisma = new PrismaClient({
  errorFormat: "minimal",
});

const resolvers = {
  Query,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, "./server/schema.graphql"),
    "utf8"
  ),
  resolvers,
  playground: true,
  introspection: true,
  context: {
    prisma,
  },
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`Server is up on port ${port}`)});


 