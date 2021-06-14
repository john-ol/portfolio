import { graphql, useStaticQuery } from 'gatsby'

export const useAboutText = () => {
  const data = useStaticQuery(graphql`
    query GetAboutText {
      markdownRemark(frontmatter: { category: { eq: "about" } }) {
        html
      }
    }
  `)
  return data.markdownRemark
}
