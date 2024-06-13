require('dotenv').config()

const { checkDBConnection } = require('./database')

checkDBConnection()