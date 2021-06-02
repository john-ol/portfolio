import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../components/Layout/Layout'
import {
  ProjectContainer,
  ProjectRow,
  InfoCol,
  ImageCol,
} from '../components/Pages/project-details/project-details.components'
import { ProjectDetailsCard } from '../components/Pages/project-details/ProjectDetailsCard/ProjectDetailsCard'

export default function ProjectDetails({ data }) {
  const image = getImage(
    data.markdownRemark.frontmatter.featured.childImageSharp
  )

  return (
    <Layout>
      <ProjectContainer>
        <ProjectRow>
          <InfoCol>
            <ProjectDetailsCard data={data.markdownRemark} />
          </InfoCol>
          <ImageCol>
            {/* <ProjectImage>
              <GatsbyImage image={image} alt={title} />
            </ProjectImage> */}
          </ImageCol>
        </ProjectRow>
      </ProjectContainer>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($id: String) {
    markdownRemark(frontmatter: { path: { eq: $id } }) {
      frontmatter {
        title
        type
        demo
        sourceCode
        stack
        frontEnd {
          icon
          title
        }
        featured {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      html
    }
  }
`
