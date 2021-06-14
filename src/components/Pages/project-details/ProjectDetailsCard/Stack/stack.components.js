import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

export const StackItem = styled.div`
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`
export const StackTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`
export const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  ${up('sm')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${up('md', 'portrait')} {
    grid-template-columns: repeat(5, 1fr);
  }

  ${up('md', 'landscape')} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const TechLink = styled.a`
  cursor: pointer;
`
export const GridItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${(props) => props.theme.colors.borders};
  border-radius: ${(props) => props.theme.other.cardradius};
  padding: 1.8rem;
  height: 100%;
  min-height: 6.5;
  transition: box-shadow 0.2s ease-in-out;
  :hover {
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.2);
  }

  ${up('sm')} {
    padding: 1.4rem;
  }

  ${up('md')} {
    padding: 1rem;
  }
`
export const ItemTitle = styled.p`
  display: none;

  ${({ visible }) =>
    !visible &&
    css`
      display: flex;
      font-size: 1.6rem;
      font-weight: bold;
      text-align: center;
      margin: 0.2rem 0;
      transition: transform 0.2s ease-in-out;

      ${up('sm')} {
        font-size: 1.4rem;
      }
    `}
`
export const ItemIcon = styled.img`
  max-width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;
`
