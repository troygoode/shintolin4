'use strict'

const path = require('path')
const boilerplate = require('db-migrate-boilerplate')

module.exports = boilerplate({
  upPath: path.join(__dirname, 'sqls', '20161216060236-base-up.sql'),
  downPath: path.join(__dirname, 'sqls', '20161216060236-base-down.sql')
})
