"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _http = require("http");

var _apolloServerExpress = require("apollo-server-express");

var _graphqlImport = require("graphql-import");

var _prisma = _interopRequireDefault(require("../src/prisma"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var server = new _apolloServerExpress.ApolloServer({
  typeDefs: (0, _graphqlImport.importSchema)('./schema.graphql'),
  resolvers: _resolvers.default,
  context: function context(request) {
    return {
      prisma: _prisma.default,
      request: request
    };
  }
});
server.applyMiddleware({
  app: app,
  path: '/graphql'
});
var httpServer = (0, _http.createServer)(app);
exports.default = httpServer;