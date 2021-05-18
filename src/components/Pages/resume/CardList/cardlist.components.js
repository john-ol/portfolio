import styled from 'styled-components'
import { up } from 'styled-breakpoints'
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 100%;
  ${up('sm')} {
    grid-template-columns: 1fr 1fr;
  }
`
