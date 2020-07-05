const path = require(`path`)

const blogPostTemplate = path.resolve(`./src/templates/blogPost.tsx`)

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter
}) => {
  const contentsResult = await graphql(`
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

  if (contentsResult.errors) {
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
