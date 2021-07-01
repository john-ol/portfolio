import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { Row } from '../../Grid/grid.components'
import { Container } from '../../Layout/layout.components'
import { LinkButton } from '../../Buttons/LinkButton/linkButton.components'

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
`

export const NotFoundImg = styled.img`
  height: auto;
  margin: 5rem 0;

  ${up('sm')} {
    margin: 6rem 0;
    height: 17rem;
  }

  ${up('sm', 'landscape')} {
    margin: 2.4rem 0;
    height: 8rem;
  }

  ${up('md')} {
    margin: 8rem 0;
    height: 22rem;
  }

  ${up('md', 'landscape')} {
    margin: 4rem 0;
    height: 15rem;
  }

  ${up('lgx')} {
    margin: 6rem 0;
    height: 22rem;
  }

  ${up('xxxl')} {
    margin: 8rem 0;
    height: 24rem;
  }
`

export const NotFoundTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: ${(props) => props.theme.fonts.weight.light};

  ${up('sm')} {
    font-size: 3.5rem;
  }

  ${up('sm', 'landscape')} {
    font-size: 1.8rem;
  }

  ${up('md')} {
    font-size: 4rem;
  }
`

export const NotFoundSubtitle = styled.h2`
  font-size: 4rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  margin-bottom: 1rem;

  ${up('sm')} {
    font-size: 5rem;
  }

  ${up('sm', 'landscape')} {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  ${up('md')} {
    font-size: 5.5rem;
  }
`

export const BackToHomeBtn = styled(LinkButton)`
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};

  ${up('sm')} {
    font-size: 1.8rem;
  }

  ${up('sm', 'landscape')} {
    font-size: 1.2rem;
  }

  ${up('md')} {
    font-size: 2rem;
  }

  ${up('md', 'landscape')} {
    font-size: 2.1rem;
  }
`
