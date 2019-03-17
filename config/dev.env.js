'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ENDPOINT: '"http://sipmen.mdev"'
  API_ENDPOINT: '"https://sipmen-api.herokuapp.com"'
})
