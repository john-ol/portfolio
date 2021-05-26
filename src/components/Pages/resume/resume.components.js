import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { Container } from '../../Layout/layout.components'

export const ResumeContainer = styled(Container)``

export const ResumeGrid = styled.section`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 100%;

  ${up('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }
`
