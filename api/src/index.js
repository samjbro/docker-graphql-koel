import '@babel/polyfill'

import server from './server.js'

const PORT = 4000

server.listen(PORT, () => {
  console.log(`API listening on port ${4000}`)
})