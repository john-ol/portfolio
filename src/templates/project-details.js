import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import {
  ProjectContainer,
  ProjectRow,
  InfoCol,
  ImageCol,
} from './project-details.components'

export default function ProjectDetails({ data }) {
  const { title } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <ProjectContainer>
        <ProjectRow>
          <InfoCol></InfoCol>
          <ImageCol>Image</ImageCol>
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
      }
    }
  }
`
