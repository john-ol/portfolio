import { graphql, useStaticQuery } from 'gatsby'

export const useExperience = () => {
  const data = useStaticQuery(graphql`
    query getExperienceCardData {
      markdownRemark(
        frontmatter: {
          resume: { area: { eq: "experience" } }
          category: { eq: "resume" }
        }
      ) {
        frontmatter {
          resume {
            area
            title
            body {
              experience {
                date
                list
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
