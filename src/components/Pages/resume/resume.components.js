import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { Container } from '../../Layout/layout.components'

export const ResumeContainer = styled(Container)``

export const ResumeGrid = styled.section`
  padding: 1.5rem 0;
  display: grid;
  grid-template-areas:
    'general'
    'summary'
    'experience'
    'education';
  grid-gap: 1rem;
  width: 100%;

  ${up('md')} {
    grid-template-areas:
      'general summary summary'
      'education summary summary'
      'experience experience experience';
  }
`
