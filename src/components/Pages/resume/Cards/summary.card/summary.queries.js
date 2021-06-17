import { graphql, useStaticQuery } from 'gatsby'

export const useSummary = () => {
  const data = useStaticQuery(graphql`
    query getSummaryCardData {
      markdownRemark(
        frontmatter: {
          resume: { area: { eq: "summary" } }
          category: { eq: "resume" }
        }
      ) {
        frontmatter {
          resume {
            area
            title
            body {
              summary {
                text
              }
            }
          }
        }
      }
    }
  `)
  return data.markdownRemark.frontmatter.resume
}
