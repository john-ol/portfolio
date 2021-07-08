import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../components/Layout/Layout'
import { Seo } from '../components/Seo/Seo'
import {
  ProjectContainer,
  ProjectRow,
  InfoCol,
  ImageCol,
  ImageTitle,
  ProjectImage,
} from '../components/Pages/project-details/project-details.components'
import { ProjectDetailsCard } from '../components/Pages/project-details/ProjectDetailsCard/ProjectDetailsCard'
import {
  infoColAnimation,
  imageColAnimation,
} from '../components/Pages/project-details/project-details.animation'
export default function ProjectDetails({ data }) {
  const { title } = data.markdownRemark.frontmatter.projects
  const image = getImage(
    data.markdownRemark.frontmatter.projects.featured.childImageSharp
  )

  return (
    <Layout>
      <Seo pageTitle={title} />
      <ProjectContainer>
        <ProjectRow>
          <InfoCol
            variants={infoColAnimation}
            initial='hidden'
            animate='visible'
          >
            <ProjectDetailsCard data={data.markdownRemark} />
          </InfoCol>
          <ImageCol
            variants={imageColAnimation}
            initial='hidden'
            animate='visible'
          >
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
    markdownRemark(frontmatter: { projects: { path: { eq: $id } } }) {
      frontmatter {
        projects {
          title
          description
          type
          demo
          sourceCode
          sourceCodeBack
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
      }
      html
    }
  }
`
