// @flow

import express from 'express'

const router = express.Router()

router.post('/', (req, res, next) => {
  res.json({success: true})
})

export default router
