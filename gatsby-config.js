module.exports = {
  siteMetadata: {
    title: `Yamablog`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    }
  ]
}
