import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Eyecatch from "../components/eyecatch"
import { IFluid } from "../components/eyecatch"

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
          childImageSharp: IFluid
        }
      }
    }
  }
  path: string
}

const BlogPostTemplate: React.FC<IProps> = ({ data, path }) => {
  const post = data.markdownRemark

  return (
    <Layout sitePath={path}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.created}</p>
        <p>{post.frontmatter.updated}</p>
        {post.frontmatter.visual?.childImageSharp?.fluid && (
          <Eyecatch fluid={post.frontmatter.visual.childImageSharp.fluid} />
        )}
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
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
