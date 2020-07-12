"use strict"
require(`ts-node`).register({
  compilerOptions: {
    module: `commonjs`,
    target: `esnext`
  }
})

module.exports = require(`./gatsby-config.ts`)
