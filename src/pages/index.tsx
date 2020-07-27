import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { IFluid } from "../components/card"
import styles from "./index.module.scss"

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
            visual: {
              childImageSharp: IFluid
            }
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
      <h2 className={styles.title}>Latest Posts</h2>
      <div className={styles.container}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card node={node} key={node.id} />
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___created, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            created(formatString: "YYYY.MM.DD")
            path
            description
            visual {
              childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
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
