const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" } } }
      ) {
        nodes {
          frontmatter {
            projects {
              path
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/projects/${node.frontmatter.projects.path}`,
      component: path.resolve('./src/templates/project-details.js'),
      context: { id: node.frontmatter.projects.path },
    })
  })
}
