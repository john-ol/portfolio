import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'
import { ButtonList } from '../../Buttons/ButtonList'

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
`
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 0;
  ${up('sm')} {
    padding: 0;
  }
  ${up('md', 'portrait')} {
    flex-direction: column;
  }
  ${up('md', 'landscape')} {
    flex-direction: row;
  }
`
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  ${up('lg')} {
    width: 50%;
  }
`

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  ${up('sm')} {
    margin-bottom: 2rem;
  }
`

export const HeroGreeting = styled.h2`
  font-weight: ${(props) => props.theme.fonts.weight.light};
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  ${up('sm')} {
    font-size: 2.5rem;
  }
`
export const HeroName = styled.h1`
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  font-size: 3.5rem;
  margin-bottom: 0.3rem;
  ${up('sm')} {
    font-size: 3.8rem;
  }
`
export const HeroProf = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
`

export const SocialIcons = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  > * {
    cursor: pointer;
    width: 3.5em;
    height: 3.5em;
    ${up('md')} {
      font-size: 1.2rem;
    }
    :not(:last-child) {
      margin-right: 1rem;
    }
  }
  ${up('sm')} {
    margin-bottom: 2rem;
  }
`

export const ButtonListHero = styled(ButtonList)`
  font-size: 1.3rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  > * {
    box-shadow: 0px 7px 5px -3px rgba(43, 42, 44, 0.12);
  }
  ${up('sm')} {
    font-size: 1.5rem;
  }
`

export const HeroImage = styled.div`
  align-self: center;
  position: relative;
  max-width: 60%;
  margin-top: 1rem;
  ${up('sm')} {
    max-width: 43%;
  }
  ${up('md')} {
    max-width: 40%;
  }
`
