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
    'education'
    'skills'
    'experience';
  grid-gap: 1rem;
  width: 100%;

  ${up('md')} {
    grid-template-areas:
      'general general general general general general general general education education education education'
      'summary summary summary summary summary summary summary summary summary summary summary summary'
      'skills skills skills experience experience experience experience experience experience experience experience experience';
  }

  ${up('md', 'landscape')} {
    grid-template-areas:
      'general general general general general general general general education education education education'
      'summary summary summary summary summary summary summary summary summary summary summary summary'
      'skills skills skills experience experience experience experience experience experience experience experience experience';
  }

  ${up('lg')} {
    grid-template-areas:
      'general general general general general general general general general education education education'
      'summary summary summary summary summary summary summary summary summary summary summary summary'
      'skills skills skills experience experience experience experience experience experience experience experience experience';
  }
`
