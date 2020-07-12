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
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-code-titles`,
        `gatsby-remark-prismjs`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 900,
            quality: 100,
            linkImagesToOriginal: false
          }
        },
        {
          resolve: `gatsby-remark-external-links`,
          options: {
            target: `_blank`,
            rel: `noopener noreferrer`
          }
        }
      ]
    }
  },
  `gatsby-plugin-sass`,
  `gatsby-plugin-sharp`,
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
