import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { Container } from '../../Layout/layout.components'
import { Col, Row } from '../../Grid/grid.components'
import AboutIcon from '../../../images/icons/about/man.svg'

export const AboutContainer = styled(Container)`
  display: flex;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.white};

  ${up('md', 'landscape')} {
    padding: 0;
    background-color: transparent;
  }
`
export const AboutRow = styled(Row)`
  ${up('md', 'landscape')} {
    flex-direction: row-reverse;
  }
`

export const InfoCol = styled(Col)`
  ${up('md', 'landscape')} {
    background-color: ${(props) => props.theme.colors.white};
  }

  ${up('xxxl')} {
    margin-right: 1.5rem;
  }
`
export const ImageCol = styled(Col)`
  justify-content: center;
  align-items: center;

  ${up('md', 'landscape')} {
    margin-bottom: 0;
  }
`
export const AboutImage = styled.div`
  margin-bottom: 1.5rem;
  max-width: 64%;

  ${up('md')} {
    max-width: 52%;
  }

  ${up('md', 'landscape')} {
    margin-bottom: 0;
    max-width: 70%;
  }

  ${up('lg')} {
    max-width: 77%;
  }

  ${up('lg', 'portrait')} {
    max-width: 55%;
  }

  ${up('xl')} {
    max-width: 60%;
  }
`

export const AboutCard = styled.section`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;

  ${up('md', 'landscape')} {
    padding: 1.5rem 3rem;
    justify-content: center;
    border-left: 0.1rem solid ${(props) => props.theme.colors.borders};
  }

  ${up('xl')} {
    padding: 1.5rem 5rem;
  }
`

export const CardHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.8rem;
  margin-bottom: 0.8rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.borders};

  ${up('sm')} {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  ${up('md')} {
    padding-bottom: 1.4rem;
    margin-bottom: 1.4rem;
  }

  ${up('md', 'landscape')} {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  ${up('lgx', 'landscape')} {
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
  }

  ${up('xl')} {
    margin-bottom: 2rem;
  }
`

export const CardTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};

  ${up('sm')} {
    font-size: 1.8rem;
  }

  ${up('md')} {
    font-size: 2rem;
  }

  ${up('md', 'landscape')} {
    font-size: 1.8rem;
  }

  ${up('lg', 'portrait')} {
    font-size: 2rem;
  }

  ${up('xl')} {
    font-size: 2.4rem;
  }
`

export const CardIcon = styled(AboutIcon)`
  width: 2.4em;
  height: 2.4em;
  fill: ${(props) => props.theme.colors.icons};

  ${up('sm')} {
    font-size: 1.2rem;
  }

  ${up('sm')} {
    font-size: 1.4rem;
  }

  ${up('md', 'landscape')} {
    font-size: 1.2rem;
  }

  ${up('lg', 'portrait')} {
    font-size: 1.4rem;
  }

  ${up('xl')} {
    font-size: 1.6rem;
  }
`

export const CardText = styled.div`
  font-size: 1.3rem;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 1.5rem;

  ${up('md', 'landscape')} {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    line-height: 1.6;
  }
  ${up('sm', 'portrait')} {
    font-size: 1.5rem;
  }

  ${up('lgx', 'landscape')} {
    font-size: 1.4rem;
    line-height: 1.7;
  }

  ${up('xl')} {
    font-size: 1.6rem;
    line-height: 1.8;
    text-indent: 2rem;
  }

  ${up('xxl')} {
    font-size: 1.5rem;
    line-height: 2;
  }

  p {
    text-indent: 1.4rem;
  }
`

export const CardSign = styled.p`
  font-weight: ${(props) => props.theme.fonts.weight.light};
  font-style: italic;
  font-size: 1.2rem;
  text-align: right;
  white-space: pre-line;

  ${up('sm')} {
    font-size: 1.5rem;
  }

  ${up('md')} {
    font-size: 1.6rem;
  }

  ${up('md', 'landscape')} {
    font-size: 1.4rem;
  }
`
