require(`ts-node`).register({
  compilerOptions: {
    module: `commonjs`,
    target: `esnext`
  }
})

module.exports = require(`./ts-gatsby/gatsby-config.ts`)
