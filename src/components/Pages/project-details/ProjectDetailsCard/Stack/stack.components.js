import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { motion } from 'framer-motion'

export const StackItem = styled.section`
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`
export const StackTitle = styled.h2``
export const StackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-bottom: -1.5rem;
`

export const TechLink = styled(motion.a)`
  width: 50%;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;

  ${up('sm')} {
    width: 33.33%;
  }

  ${up('md')} {
    width: 25%;
  }

  ${up('md', 'landscape')} {
    width: 33.33%;
  }

  ${up('lg', 'portrait')} {
    width: 20%;
  }

  ${up('xl')} {
    width: 25%;
  }

  ${up('xxxl')} {
    width: 20%;
  }
`

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.1rem solid ${(props) => props.theme.colors.borders};
  border-radius: ${(props) => props.theme.other.cardradius};
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.2);
  }
`

export const LogoIcon = styled.img`
  margin: 1.8em 0.6em;
  height: 4em;

  ${up('sm')} {
    font-size: 1.1rem;
  }

  ${up('md')} {
    font-size: 1.25rem;
  }

  ${up('md', 'landscape')} {
    font-size: 1.1rem;
  }

  ${up('lg', 'portrait')} {
    font-size: 1.2rem;
  }

  ${up('xl')} {
    font-size: 1.3rem;
  }

  ${up('xxl')} {
    font-size: 1.2rem;
  }
`

export const ItemTitle = styled.p`
  border-top: 0.1rem solid ${(props) => props.theme.colors.borders};
  font-size: 1.3rem;
  font-weight: ${(props) => props.theme.fonts.weight.light};
  padding: 1rem 0.8rem;
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${up('sm')} {
    font-size: 1.4rem;
  }

  ${up('md')} {
    font-size: 1.5rem;
  }

  ${up('md', 'landscape')} {
    font-size: 1.4rem;
  }

  ${up('lg', 'portrait')} {
    font-size: 1.5rem;
  }

  ${up('xl')} {
    font-size: 1.5rem;
  }
`
