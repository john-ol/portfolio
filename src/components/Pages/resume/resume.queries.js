import { graphql, useStaticQuery } from 'gatsby'

export const useAvatar = () => {
  const data = useStaticQuery(graphql`
    query GetAvatar {
      file(relativeDirectory: { eq: "resumePage" }, name: { eq: "avatar" }) {
        name
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  `)
  return data
}
