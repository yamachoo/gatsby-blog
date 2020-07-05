import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SeoQuery } from "../../types/graphql-types"

interface IProps {
  description?: string
  meta?: Meta[]
  title: string
}

interface Meta {
  name: string
  content: string
}

const SEO: React.FC<IProps & SeoQuery> = ({ description, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: `ja`
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
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
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
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
