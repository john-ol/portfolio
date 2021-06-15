import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

export const StackItem = styled.section`
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`
export const StackTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1rem;

  ${up('sm')} {
    font-size: 1.5rem;
  }

  ${up('md')} {
    font-size: 1.7rem;
  }
`
export const StackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-bottom: -1rem;
`

export const TechLink = styled.a`
  width: 50%;
  margin-bottom: 1rem;
  padding-left: 1rem;

  ${up('sm')} {
    width: 33.33%;
  }

  ${up('md')} {
    width: 25%;
  }

  ${up('lg')} {
    width: 16.66%;
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
  margin: 1.8em 0.4em;
  height: 4em;

  ${up('sm')} {
    font-size: 1.1rem;
  }
`

export const ItemTitle = styled.p`
  border-top: 0.1rem solid ${(props) => props.theme.colors.borders};
  font-size: 1.3rem;
  padding: 1rem 0.8rem;
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
