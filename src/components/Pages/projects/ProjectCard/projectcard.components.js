import styled from 'styled-components'
import { ProjectTag } from '../../../Project-tag/project-tag.components'

export const Card = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  border-radius: ${(props) => props.theme.other.cardradius};
  transition: all 0.1s ease-in;
  :hover {
    transform: scale(1.03);
    box-shadow: 0px 8px 5px -2px rgba(0, 0, 0, 0.27);
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

export const AllProjectTags = styled(ProjectTag)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  font-size: 1rem;
  padding: 0.8rem 1rem;
`
