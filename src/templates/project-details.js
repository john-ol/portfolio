import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../components/Layout/Layout'
import {
  ProjectContainer,
  ProjectRow,
  InfoCol,
  ImageCol,
  ImageTitle,
  ProjectImage,
} from '../components/Pages/project-details/project-details.components'
import { ProjectDetailsCard } from '../components/Pages/project-details/ProjectDetailsCard/ProjectDetailsCard'

export default function ProjectDetails({ data }) {
  const { title } = data.markdownRemark.frontmatter
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
            <ImageTitle>Images:</ImageTitle>
            <ProjectImage>
              <GatsbyImage image={image} alt={title} />
            </ProjectImage>
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
        stack {
          title
          tech {
            src
            title
            link
          }
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
