import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { motion } from 'framer-motion'
import { Row, Col } from '../../Grid/grid.components'
import { ButtonList } from '../../Buttons/ButtonList'
import Github from '../../../images/icons/github.svg'
import Linkedin from '../../../images/icons/linkedin.svg'

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
`
export const HeroRow = styled(Row)`
  justify-content: space-around;

  ${up('md', 'landscape')} {
    padding: 0 2rem;
  }
`
export const InfoCol = styled(Col)`
  flex-direction: column;
  justify-content: center;
`
export const ImageCol = styled(Col)`
  justify-content: center;
  align-items: center;
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

  ${up('md')} {
    font-size: 3rem;
  }
`
export const HeroName = styled.h1`
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  font-size: 3.5rem;
  margin-bottom: 0.3rem;

  ${up('sm')} {
    font-size: 3.8rem;
  }

  ${up('md')} {
    font-size: 4.2rem;
  }
`
export const HeroProf = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;

  ${up('md')} {
    font-size: 2.1rem;
  }
`

export const SocialIconList = styled.ul`
  display: flex;
  margin-bottom: 1.5rem;

  ${up('sm')} {
    margin-bottom: 2rem;
  }
`
export const SocialIcon = styled(motion.li)`
  cursor: pointer;

  :not(:last-child) {
    margin-right: 1rem;
  }

  svg {
    width: 3.5rem;
    height: 3.5rem;

    ${up('md')} {
      width: 4rem;
      height: 4rem;
    }
  }
`
export const GithubIcon = styled(Github)``
export const LinkedinIcon = styled(Linkedin)``

export const ButtonListHero = styled(ButtonList)`
  font-size: 1.3rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};

  > * {
    box-shadow: 0px 7px 5px -3px rgba(43, 42, 44, 0.12);
  }

  ${up('sm')} {
    font-size: 1.5rem;
  }

  ${up('md')} {
    font-size: 1.6rem;
  }
`

export const HeroImage = styled.div`
  align-self: center;
  position: relative;
  max-width: 60%;
  margin-top: 1rem;

  ${up('sm')} {
    margin-top: 0;
    max-width: 43%;
  }

  ${up('md', 'portrait')} {
    max-width: 37%;
  }

  ${up('md', 'landscape')} {
    max-width: 50%;
  }

  ${up('lg', 'portrait')} {
    max-width: 35%;
  }

  ${up('xl')} {
    max-width: 50%;
  }
`
