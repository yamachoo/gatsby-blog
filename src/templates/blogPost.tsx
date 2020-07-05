import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogPostQuery } from "../../types/graphql-types"

interface IProps {
  data: BlogPostQuery
}

const BlogPostTemplate: React.FC<IProps> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      {post &&
      post.html &&
      post.frontmatter &&
      post.frontmatter.title &&
      post.frontmatter.description ? (
        <>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description}
          />
          <div>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.created}</p>
            <p>{post.frontmatter.updated}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </>
      ) : (
        `ERROR`
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        created(formatString: "YYYY-MM-DD")
        updated(formatString: "YYYY-MM-DD")
        path
        description
      }
    }
  }
`

export default BlogPostTemplate
