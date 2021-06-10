import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { Container } from '../../Layout/layout.components'
import { Col, Row } from '../../Grid/grid.components'

export const ProjectContainer = styled(Container)`
  ${up('md', 'landscape')} {
    display: flex;
    flex-grow: 1;
  }
`

export const ProjectRow = styled(Row)`
  ${up('md', 'landscape')} {
    flex-direction: row-reverse;
    align-items: center;
  }
`

export const ImageCol = styled(Col)`
  padding: 1rem;
  flex-direction: column;
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.other.cardradius};

  ${up('md')} {
    padding: 2rem;
  }

  ${up('md', 'landscape')} {
    margin-top: 0;
    padding: 0;
    margin-right: 2.5rem;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
  }
`
export const ImageTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  ${up('md', 'landscape')} {
    display: none;
  }
`
export const ProjectImage = styled.div``

export const InfoCol = styled(Col)`
  ${up('md', 'landscape')} {
    margin-left: 2.5rem;
  }
`
