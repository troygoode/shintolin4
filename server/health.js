// @flow

import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  // https://tools.ietf.org/html/draft-inadarei-api-health-check-01
  res.json({
    status: 'pass'
  })
})

export default router
