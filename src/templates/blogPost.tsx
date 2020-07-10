import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FluidObject } from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface IProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        created: string
        updated: string
        path: string
        description: string
        visual: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
      }
    }
  }
}

const BlogPostTemplate: React.FC<IProps> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.created}</p>
      <p>{post.frontmatter.updated}</p>
      {post.frontmatter.visual?.childImageSharp?.fluid && (
        <Img fluid={post.frontmatter.visual.childImageSharp.fluid} />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        created(formatString: "YYYY-MM-DD")
        updated(formatString: "YYYY-MM-DD")
        path
        description
        visual {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPostTemplate
