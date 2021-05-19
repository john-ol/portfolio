import styled from 'styled-components'
import { up } from 'styled-breakpoints'
export const ResumeWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`

export const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 100%;
  ${up('sm')} {
    grid-template-columns: 1fr 1fr;
  }
`
