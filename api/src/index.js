import '@babel/polyfill'

// import server from './server.js'

const express = require('express')

const server = express()

const PORT = 4000

server.listen(PORT, () => {
  console.log(`API listening on port ${4000}`)
})