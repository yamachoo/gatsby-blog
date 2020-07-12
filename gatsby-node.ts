import path from "path"
import { GatsbyNode } from "gatsby"

const blogPostTemplate = path.resolve(`./src/templates/blogPost.tsx`)

interface Result {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          path: string
        }
      }
    }[]
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter
}) => {
  const contentsResult = await graphql<Result>(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___created] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (contentsResult.errors || !contentsResult.data) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  contentsResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}
    })
  })
}
