import { graphql, useStaticQuery } from 'gatsby'

export const useSkills = () => {
  const data = useStaticQuery(graphql`
    query getSkillsCardData {
      markdownRemark(
        frontmatter: {
          category: { eq: "resume" }
          resume: { area: { eq: "skills" } }
        }
      ) {
        frontmatter {
          resume {
            area
            title
            body {
              skills {
                color
                items
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
