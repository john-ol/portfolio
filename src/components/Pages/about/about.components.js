import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { Container } from '../../Layout/layout.components'
import { Col, Row } from '../../Grid/grid.components'
import AboutIcon from '../../../images/icons/about/man.svg'

export const AboutContainer = styled(Container)`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
`
export const AboutRow = styled(Row)`
  justify-content: space-evenly;
  ${up('md', 'landscape')} {
    flex-direction: row-reverse;
  }
`

export const InfoCol = styled(Col)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.other.cardradius};
  ${up('sm')} {
    align-items: center;
  }
  ${up('md')} {
    padding: 0 5rem;
    margin: 5rem 0;
  }
`
export const ImageCol = styled(Col)`
  justify-content: center;

  ${up('sm')} {
    align-items: center;
  }
`
export const AboutImage = styled.div`
  margin-top: 2rem;
  max-width: 64%;
`
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.borders};

  ${up('lg')} {
    padding-bottom: 1.5rem;
    margin-bottom: 3rem;
  }
`

export const CardIcon = styled(AboutIcon)`
  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colors.icons};

  ${up('lg')} {
    width: 4rem;
    height: 4rem;
  }
`

export const AboutCard = styled.div`
  padding: 1.5rem 2.5rem;
`

export const CardTitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;

  ${up('lg')} {
    font-size: 2.6rem;
  }
`

export const CardText = styled.p`
  font-size: 1.4rem;
  line-height: 1.7;
  text-indent: 1.5rem;
  ${up('lg')} {
    font-size: 1.8rem;
  }
`
