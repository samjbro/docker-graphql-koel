import express from 'express'
import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'

import prisma from './prisma'
import resolvers from './src/resolvers'

const app = express()

const server = new ApolloServer({
  typeDefs: importSchema('./schema.graphql'),
  resolvers,
  context: (request) => ({ prisma, request })
})

server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)

const PORT = 4000

httpServer.listen(PORT, () => {
  console.log(`API listening on port ${4000}`)
})