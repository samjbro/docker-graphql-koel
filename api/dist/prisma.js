"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaBinding = require("prisma-binding");

var _process$env = process.env,
    PRISMA_HOST = _process$env.PRISMA_HOST,
    PRISMA_PORT = _process$env.PRISMA_PORT,
    PRISMA_SERVICE = _process$env.PRISMA_SERVICE,
    PRISMA_STAGE = _process$env.PRISMA_STAGE,
    PRISMA_SECRET = _process$env.PRISMA_SECRET;
var endpoint = "http://".concat(PRISMA_HOST, "/").concat(PRISMA_SERVICE, "/").concat(PRISMA_STAGE);
var prisma = new _prismaBinding.Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: endpoint,
  secret: PRISMA_SECRET
});
exports.default = prisma;