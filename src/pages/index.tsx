import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface IProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string
          frontmatter: {
            title: string
            created: string
            updated: string
            path: string
            description: string
          }
        }
      }[]
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const IndexPage: React.FC<IProps & PageProps> = ({ data, path }) => {
  return (
    <Layout sitePath={path}>
      <SEO title={data.site.siteMetadata.title || `HOME`} />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.path}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.created}</p>
            <p>{node.frontmatter.description}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            created(formatString: "YYYY-MM-DD")
            path
            description
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
