import { graphql, useStaticQuery } from 'gatsby'

export const useHelmetData = () => {
  const data = useStaticQuery(graphql`
    query getHelmetData {
      site {
        siteMetadata {
          author
          description
          keywords
          title
          image
        }
      }
    }
  `)
  return data.site.siteMetadata
}
