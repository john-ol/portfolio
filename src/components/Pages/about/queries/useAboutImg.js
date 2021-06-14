import { graphql, useStaticQuery } from 'gatsby'
export const useAboutImg = () => {
  const data = useStaticQuery(graphql`
    query GetAboutImage {
      file(relativeDirectory: { eq: "aboutPage" }, name: { eq: "avatar" }) {
        name
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  `)
  return data
}
