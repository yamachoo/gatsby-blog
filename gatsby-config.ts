export const siteMetadata = {
  title: `Yamablog`
}

export const plugins = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`
    }
  },
  `gatsby-transformer-remark`,
  `gatsby-plugin-emotion`,
  {
    resolve: `gatsby-plugin-graphql-codegen`,
    options: {
      fileName: `types/graphql-types.d.ts`
    }
  }
]
