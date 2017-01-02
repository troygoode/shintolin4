const path = require('path')
const express = require('express')

const server = express()

if (process.env.NODE_ENV === 'production') {
  // serve client's "build" artifacts
  server.use(express.static(path.join(__dirname, 'client', 'build')))
}

if (!module.parent) {
  const PORT = process.env.PORT || 3000
  server.listen(PORT, () => {
    console.log(`Shintolin is running on port ${PORT}.`)
  })
}

module.exports = server
