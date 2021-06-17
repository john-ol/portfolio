import { graphql, useStaticQuery } from 'gatsby'

export const useInfo = () => {
  const data = useStaticQuery(graphql`
    query getInfoCardData {
      markdownRemark(
        frontmatter: {
          resume: { area: { eq: "general" } }
          category: { eq: "resume" }
        }
      ) {
        frontmatter {
          resume {
            area
            title
            body {
              generalInfo {
                name
                prof
                contact {
                  icon
                  text
                  link
                }
              }
            }
          }
        }
      }
      file(relativeDirectory: { eq: "resumePage" }, name: { eq: "avatar" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        name
      }
    }
  `)
  return data
}
