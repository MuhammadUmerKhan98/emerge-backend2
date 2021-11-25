import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import chalk from "chalk";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolvers.js";

async function initServer() {
  const app = express();
  app.use(cors());
  dotenv.config();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.send("Server started successfully");
  });

  try {
    await mongoose.connect(process.env.database);
    console.log("Connected to mongodb Successfully");
  } catch (error) {
    console.log(error);
  }

  const PORT = process.env.PORT || 4001;
  app.listen(PORT, () =>
    console.log("App is listening on port : " + chalk.yellow(PORT))
  );
}

initServer();
