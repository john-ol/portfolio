import styled, { css } from 'styled-components'

export const ProjectTag = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  border-radius: ${(props) => props.theme.other.cardradius};
  ${({ type }) =>
    type === 'Personal website' &&
    css`
      background-color: ${(props) => props.theme.colors.projects.personal};
    `}
  ${({ type }) =>
    type === 'Application' &&
    css`
      background-color: ${(props) => props.theme.colors.projects.webapp};
    `}
`
