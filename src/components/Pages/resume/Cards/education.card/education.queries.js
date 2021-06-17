import { graphql, useStaticQuery } from 'gatsby'

export const useEducation = () => {
  const data = useStaticQuery(graphql`
    query getEducationCardData {
      markdownRemark(
        frontmatter: {
          resume: { area: { eq: "education" } }
          category: { eq: "resume" }
        }
      ) {
        frontmatter {
          resume {
            area
            title
            body {
              education {
                date
                subtitle
                title
              }
            }
          }
        }
      }
    }
  `)
  return data.markdownRemark.frontmatter.resume
}
