import React from 'react'
import { Layout } from '../components/Layout/Layout'
import {
  ResumeContainer,
  ResumeGrid,
} from '../components/Pages/resume/resume.components'
import { GeneralInfo } from '../components/Pages/resume/Cards/info.card/Info'
import { Summary } from '../components/Pages/resume/Cards/summary.card/Summary'
import { Experience } from '../components/Pages/resume/Cards/experience.card/Experience'
import { Education } from '../components/Pages/resume/Cards/education.card/Education'
import { Skills } from '../components/Pages/resume/Cards/skills.card/Skills'

export default function Resume() {
  return (
    <Layout>
      <ResumeContainer>
        <ResumeGrid>
          <GeneralInfo />
          <Summary />
          <Skills />
          <Experience />
          <Education />
        </ResumeGrid>
      </ResumeContainer>
    </Layout>
  )
}
