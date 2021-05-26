import React from 'react'
import { Layout } from '../components/Layout/Layout'
import {
  ResumeContainer,
  ResumeGrid,
} from '../components/Pages/resume/resume.components'
import { Cards } from '../components/Pages/resume/Cards/Cards'

export default function Resume() {
  return (
    <Layout>
      <ResumeContainer>
        <ResumeGrid>
          <Cards />
        </ResumeGrid>
      </ResumeContainer>
    </Layout>
  )
}
