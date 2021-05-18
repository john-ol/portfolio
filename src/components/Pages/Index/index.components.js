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

  ${up('xl')} {
    padding: 0 4rem;
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

  ${up('lg')} {
    margin-bottom: 2.7rem;
  }

  ${up('xl')} {
    margin-bottom: 4rem;
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

  ${up('lg')} {
    font-size: 3.2rem;
    margin-bottom: 1.2rem;
  }

  ${up('xl')} {
    font-size: 4rem;
    margin-bottom: 1.8rem;
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

  ${up('lg')} {
    font-size: 4.5rem;
  }

  ${up('xl')} {
    font-size: 5.7rem;
    margin-bottom: 1rem;
  }
`
export const HeroProf = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;

  ${up('md')} {
    font-size: 2.1rem;
  }

  ${up('lg')} {
    font-size: 2.3rem;
  }

  ${up('xl')} {
    font-size: 2.8rem;
  }
`

export const SocialIconList = styled.ul`
  display: flex;
  margin-bottom: 1.5rem;

  ${up('sm')} {
    margin-bottom: 2rem;
  }

  ${up('lg')} {
    margin-bottom: 2.7rem;
  }

  ${up('lg')} {
    margin-bottom: 4rem;
  }
`
export const SocialIcon = styled(motion.li)`
  cursor: pointer;

  :not(:last-child) {
    margin-right: 1rem;

    ${up('md')} {
      margin-right: 1.2rem;
    }

    ${up('lg')} {
      margin-right: 1.4rem;
    }

    ${up('xl')} {
      margin-right: 1.8rem;
    }
  }

  svg {
    width: 3.5rem;
    height: 3.5rem;

    ${up('md')} {
      width: 4rem;
      height: 4rem;
    }

    ${up('lg')} {
      width: 4.5rem;
      height: 4.5rem;
    }

    ${up('xl')} {
      width: 5.5rem;
      height: 5.5rem;
    }
  }
`
export const GithubIcon = styled(Github)``
export const LinkedinIcon = styled(Linkedin)`
  fill: #0077b7;
`

export const ButtonListHero = styled(ButtonList)`
  font-size: 1.3rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};

  > * {
    :not(:last-child) {
      margin-right: 1rem;

      ${up('md')} {
        margin-right: 1.4rem;
      }

      ${up('lg')} {
        margin-right: 1.6rem;
      }

      ${up('xl')} {
        margin-right: 2rem;
      }
    }
    box-shadow: 0px 7px 5px -3px rgba(43, 42, 44, 0.12);
  }

  ${up('sm')} {
    font-size: 1.5rem;
  }

  ${up('md')} {
    font-size: 1.6rem;
  }

  ${up('lg')} {
    font-size: 1.8rem;
  }

  ${up('xl')} {
    font-size: 2.1rem;
  }
`

export const HeroImage = styled.div`
  align-self: center;
  position: relative;
  max-width: 60%;
  margin: 1.5rem 0;

  ${up('sm')} {
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
