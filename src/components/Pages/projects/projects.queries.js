import { graphql, useStaticQuery } from 'gatsby'

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    query UseProjects {
      allMarkdownRemark(
        sort: { fields: frontmatter___projects___date, order: DESC }
        filter: { frontmatter: { category: { eq: "projects" } } }
      ) {
        nodes {
          id
          frontmatter {
            projects {
              path
              title
              type
              thumb {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark
}
