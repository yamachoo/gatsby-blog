import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import keyvisual from "../../static/images/keyvisual.png"

interface IProps {
  description?: string
  meta?: {
    name: string
    content: string
  }[]
  title: string
  image?: string
}

const SEO: React.FC<IProps> = ({ description, meta, title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const siteTitle = site.siteMetadata.title
  const author = site.siteMetadata.author
  const metaDescription = description || site.siteMetadata.description
  const siteUrl = site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang: `ja`
      }}
      title={title}
      titleTemplate={title !== siteTitle ? `%s | ${siteTitle}` : siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: image ? `${siteUrl}${image}` : keyvisual
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:creator`,
          content: author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta || [])}
    />
  )
}

export default SEO
