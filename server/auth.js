// @flow

import express from 'express'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'

const router = express.Router()

router.post('/', async (req, res) => {
  const sign = promisify(jwt.sign)
  const token = await sign({
    userId: 1,
    displayName: 'Troy'
  }, process.env.JWT_SECRET)

  res.json({
    'token_type': 'bearer',
    'access_token': token,
    'expires_in': 20,
    'refresh_token': null
  })
})

export default router
