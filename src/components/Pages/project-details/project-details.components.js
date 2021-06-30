import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { Container } from '../../Layout/layout.components'
import { Col, Row } from '../../Grid/grid.components'

export const ProjectContainer = styled(Container)`
  display: flex;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.white};

  ${up('md', 'landscape')} {
    padding: 0;
    background-color: transparent;
  }
`

export const ProjectRow = styled(Row)`
  ${up('md', 'landscape')} {
    flex-direction: row-reverse;
  }
`

export const ImageCol = styled(Col)`
  flex-direction: column;

  ${up('md', 'landscape')} {
    margin-bottom: 0;
    align-items: center;
    justify-content: center;
  }
`
export const ImageTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  padding-top: 1.2rem;
  border-top: 0.1rem solid ${(props) => props.theme.colors.borders};

  ${up('sm')} {
    font-size: 1.5rem;
  }

  ${up('md')} {
    font-size: 1.7rem;
  }

  ${up('md', 'landscape')} {
    display: none;
  }
`
export const ProjectImage = styled.div`
  margin-bottom: 1.5rem;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  ${up('md', 'landscape')} {
    max-width: 90%;
  }
`

export const InfoCol = styled(Col)`
  ${up('md', 'landscape')} {
    background-color: ${(props) => props.theme.colors.white};
  }
`
