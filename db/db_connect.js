const environement = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environement];
module.exports = require('knex')(config);