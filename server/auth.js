// @flow

import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  res.json({
    userId: 1,
    displayName: 'Troy'
  })
})

export default router
