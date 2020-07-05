export const siteMetadata = {
  title: `Yamablog`,
  description: `@yamachooのブログです。勉強した内容や興味のあること等をアウトプットの一環として発信します。`,
  author: `@yamachoo`
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
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Yamablog`,
      short_name: `Yamablog`,
      start_url: `/`,
      background_color: `#EFEFEF`,
      theme_color: `#0F4C81`,
      display: `standalone`,
      icon: `static/images/icon.png`
    }
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`
]
