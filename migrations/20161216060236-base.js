'use strict'

import path from 'path'
import boilerplate from 'db-migrate-boilerplate'

const MIGRATION = '20161216060236-base'

module.exports = boilerplate({
  upPath: path.join(__dirname, 'sqls', `${MIGRATION}-up.sql`),
  downPath: path.join(__dirname, 'sqls', `${MIGRATION}-down.sql`)
})
