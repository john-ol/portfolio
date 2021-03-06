import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const DemoSourceItem = styled.section`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 2rem;
  }
`

export const DemoSourceTitle = styled.h2``

export const DemoSourceContent = styled.div`
  display: flex;

  ${up('sm')} {
    align-items: center;
  }

  svg {
    fill: ${(props) => props.theme.colors.projects.webapp};
    width: 1.6em;
    height: 1.6em;
    margin-right: 1.2rem;

    ${up('sm')} {
      font-size: 1.5rem;
    }

    ${up('md')} {
      font-size: 1.8rem;
    }

    ${up('md', 'landscape')} {
      font-size: 1.6rem;
    }

    ${up('lg', 'portrait')} {
      font-size: 1.8rem;
    }

    ${up('xl')} {
      font-size: 1.9rem;
    }
  }
`

export const DemoSourceLink = styled.a`
  position: relative;
  display: inline-block;
  font-size: 1.3rem;

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    width: 100%;
    height: 0.1rem;
    display: block;
    background-color: ${(props) => props.theme.colors.main};
    opacity: 0;
    transition: opacity 0.2s linear;
  }

  :hover:after {
    opacity: 1;
  }

  ${up('sm')} {
    font-size: 1.4rem;
  }

  ${up('md')} {
    font-size: 1.6rem;
  }

  ${up('md', 'landscape')} {
    font-size: 1.5rem;
  }

  ${up('lg', 'portrait')} {
    font-size: 1.6rem;
  }

  ${up('xl')} {
    font-size: 1.7rem;
  }
`
