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
    'skills'
    'experience'
    'education';
  grid-gap: 1rem;
  width: 100%;

  ${up('md')} {
    grid-template-areas:
      'summary summary summary summary summary summary summary summary summary summary summary summary'
      'general general general general general general general general education education education education'
      'skills skills skills experience experience experience experience experience experience experience experience experience';
  }

  ${up('md', 'landscape')} {
    grid-template-areas:
      'summary summary summary summary summary summary summary summary summary summary summary summary'
      'general general general general general general general general education education education education'
      'skills skills skills experience experience experience experience experience experience experience experience experience';
  }

  ${up('lg')} {
    grid-template-areas:
      'summary summary summary summary summary summary summary summary summary summary summary summary'
      'general general general general general general general general general education education education'
      'skills skills skills experience experience experience experience experience experience experience experience experience';
  }
`
