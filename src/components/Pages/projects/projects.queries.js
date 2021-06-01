import { graphql, useStaticQuery } from 'gatsby'

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    query UseProjects {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          id
          frontmatter {
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
  `)
  return data.allMarkdownRemark
}
