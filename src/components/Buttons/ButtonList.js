import styled from 'styled-components'

export const ButtonList = styled.div`
  display: flex;

  > * {
    :not(:last-child) {
      margin-right: 1rem;
    }
  }
`
