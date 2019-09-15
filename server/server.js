require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server-express"); // eslint-disable-line no-unused-vars
const express = require('express');
const path = require('path');

const typeDefs = require("./graphql/typeDefs.js");
const resolvers = require("./graphql/resolvers");

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });


exports.app = app;
exports.server = server;