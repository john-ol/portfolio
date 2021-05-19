import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Container } from '../components/Layout/layout.components'
import {
  ResumeWrapper,
  ResumeGrid,
} from '../components/Pages/resume/resume.components'
import { Cards } from '../components/Pages/resume/Cards/Cards'

export default function Resume() {
  return (
    <Layout>
      <Container>
        <ResumeWrapper>
          <ResumeGrid>
            <Cards />
          </ResumeGrid>
        </ResumeWrapper>
      </Container>
    </Layout>
  )
}
