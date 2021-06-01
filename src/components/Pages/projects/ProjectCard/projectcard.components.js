import styled, { css } from 'styled-components'

export const Card = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  border-radius: ${(props) => props.theme.other.cardradius};
  transition: all 0.1s linear;
  :hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
  }
  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 8rem;
    border-radius: inherit;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(48, 48, 48, 0.9009804605435925) 70%,
      rgba(52, 52, 52, 1) 100%
    );
  }
`
export const CardImage = styled.div`
  > div {
    border-radius: ${(props) => props.theme.other.cardradius};
  }
`
export const CardInfo = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 1rem;
  padding: 0 1.2rem;
  font-size: 1.9rem;
  z-index: 1;
`

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
`

export const ProjectType = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: inline-block;
  padding: 0.7rem 1rem;
  background-color: ${(props) => props.theme.colors.projects.webapp};
  border-radius: 0.3rem;
  ${({ type }) =>
    type === 'Personal site' &&
    css`
      background-color: ${(props) => props.theme.colors.projects.personal};
    `}
`

export const ProjectTypeText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
`
