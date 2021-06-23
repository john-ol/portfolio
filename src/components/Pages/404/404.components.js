import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { Container } from '../../Layout/layout.components'
import { Row } from '../../Grid/grid.components'
import NotFound from '../../../images/icons/logo.svg'

export const NotFoundContainer = styled(Container)`
  display: flex;
  flex-grow: 1;
`

export const NotFoundRow = styled(Row)`
  align-items: center;
  justify-content: center;

  ${up('sm')} {
    flex-direction: column;
  }

  a {
    font-size: 1.5rem;
    font-weight: ${(props) => props.theme.fonts.weight.bold};
  }
`

export const Logo = styled(NotFound)`
  fill: ${(props) => props.theme.colors.main};
  width: 10em;
  height: 10em;
  margin-bottom: 3rem;
`

export const NotFoundTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  margin-bottom: 2rem;
`

export const NotFoundSubtitle = styled.h2`
  font-size: 4rem;
  font-weight: ${(props) => props.theme.fonts.weight.light};
  margin-bottom: 1rem;
`
