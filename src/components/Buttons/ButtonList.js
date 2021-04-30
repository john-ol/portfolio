import styled from 'styled-components'

export const ButtonList = styled.div`
  display: flex;
  font-size: 1.3rem;
  > * {
    :not(:last-child) {
      margin-right: 1rem;
    }
  }
`
