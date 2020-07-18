export const siteMetadata = {
  title: `Yamablog`,
  description: `@yamachooのブログです。勉強した内容や興味のあること等をアウトプットの一環として発信します。`,
  author: `@yamachoo567`,
  siteUrl: `https://yamachoo.com`
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
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.title,
      short_name: siteMetadata.title,
      start_url: `/`,
      background_color: `#eee`,
      theme_color: `#0f4c81`,
      display: `standalone`,
      icon: `src/assets/images/icon.png`
    }
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,
  {
    resolve: `gatsby-plugin-robots-txt`,
    options: {
      policy: [{ userAgent: `*`, allow: `/` }]
    }
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: siteMetadata.siteUrl,
      stripQueryString: true
    }
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `UA-133288356-1`,
      head: true
    }
  }
]
