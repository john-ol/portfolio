const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/projects/${node.frontmatter.path}`,
      component: path.resolve('./src/templates/project-details.js'),
      context: { id: node.frontmatter.path },
    })
  })
}
