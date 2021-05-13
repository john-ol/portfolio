import styled, { css } from 'styled-components'

export const SiteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
export const Container = styled.div`
  max-width: 161rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
    `}

  ${({ grow }) =>
    grow &&
    css`
      flex-grow: 1;
    `}
`
