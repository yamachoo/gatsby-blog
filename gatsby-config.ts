export const siteMetadata = {
  title: `Yamablog`
}

export const plugins = [
  `gatsby-plugin-emotion`,
  {
    resolve: `gatsby-plugin-graphql-codegen`,
    options: {
      fileName: `types/graphql-types.d.ts`
    }
  }
]
