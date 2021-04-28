import { graphql, useStaticQuery } from 'gatsby'
export const useHeroImg = () => {
  const data = useStaticQuery(graphql`
    query GetHeroImage {
      file(relativeDirectory: { eq: "mainPage" }, name: { eq: "hero" }) {
        name
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  `)
  return data
}
