import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Container } from '../components/Layout/layout.components'
import { ResumeWrapper } from '../components/Pages/resume/resume.components'
import { CardList } from '../components/Pages/resume/CardList/CardList'

export default function Resume() {
  return (
    <Layout>
      <Container>
        <ResumeWrapper>
          <CardList />
        </ResumeWrapper>
      </Container>
    </Layout>
  )
}
