'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const path = require('path')


const env = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ENDPOINT: '"http://127.0.0.1:8000"'
  API_ENDPOINT: '"https://sipmen-api.herokuapp.com"'
})

module.exports = merge(env, {
  test: {}
})
