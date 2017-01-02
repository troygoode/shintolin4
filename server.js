import path from 'path'
import express from 'express'

const DEFAULT_PORT = 3001
const server = express()

if (process.env.NODE_ENV === 'production') {
  // serve client's "build" artifacts
  server.use(express.static(path.join(__dirname, 'client', 'build')))
}

if (!module.parent) {
  const PORT = process.env.PORT || DEFAULT_PORT
  server.listen(PORT, () => {
    console.log(`Shintolin is running on port ${PORT}.`)
  })
}

export default server
