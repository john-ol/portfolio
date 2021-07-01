import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const TimeLineSection = styled.section``

export const TimeLineItem = styled.div`
  position: relative;
  padding: 2.4rem 0rem 0rem 1.5rem;
  border-left: 2px solid ${(props) => props.theme.colors.borders};

  :not(:last-child) {
    padding-bottom: 1.6rem;

    ${up('md', 'landscape')} {
      padding-bottom: 1.7rem;
    }

    ${up('lg')} {
      padding-bottom: 2.2rem;
    }
  }

  :before {
    content: '${(props) => props.date}';
    display: block;
    position: absolute;
    top: 0.8rem;
    left: 1.5rem;
    font-size: 1.1rem;
    font-weight: ${(props) => props.theme.fonts.weight.regular};

    ${up('sm')} {
      font-size: 1.2rem;
    }

    ${up('md')} {
      font-size: 1.3rem;
      top: 0.7rem;
    }

    ${up('lg')} {
      font-size: 1.4rem;
    }

    ${up('xl')} {
      font-size: 1.45rem;
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0.8rem;
    left: -0.7rem;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 1rem;
    border: 0.2rem solid ${(props) => props.theme.colors.borders};
    background: white;

    ${up('sm')} {
      width: 1.5rem;
      height: 1.5rem;
      left: -0.8rem;
    }

    ${up('md')} {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`

export const TimeLineTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.1rem;

  ${up('sm')} {
    font-size: 1.5rem;
  }

  ${up('md')} {
    font-size: 1.55rem;
  }

  ${up('md', 'landscape')} {
    margin-bottom: 0.3rem;
  }

  ${up('lg')} {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }

  ${up('xl')} {
    font-size: 1.7rem;
  }
`

export const TimeLineSubtitle = styled.h4`
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fonts.weight.light};

  :not(:last-child) {
    margin-bottom: 0.8rem;

    ${up('sm')} {
      margin-bottom: 1rem;
    }
  }

  ${up('sm')} {
    font-size: 1.3rem;
  }

  ${up('md')} {
    font-size: 1.4rem;
  }

  ${up('lg')} {
    font-size: 1.5rem;
  }

  ${up('xl')} {
    font-size: 1.55rem;
  }
`
export const TimeLineListTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  ${up('sm')} {
    font-size: 1.34rem;
    margin-bottom: 0.7rem;
  }

  ${up('md')} {
    font-size: 1.45rem;
    margin-bottom: 0.9rem;
  }

  ${up('lg')} {
    font-size: 1.55rem;
    margin-bottom: 1rem;
  }

  ${up('xl')} {
    font-size: 1.5rem;
  }
`
export const TimeLineList = styled.ul`
  font-size: 1.3rem;
  font-weight: ${(props) => props.theme.fonts.weight.light};

  ${up('sm')} {
    font-size: 1.4rem;
  }

  ${up('md')} {
    font-size: 1.45rem;
  }

  ${up('lg')} {
    font-size: 1.5rem;
  }

  ${up('xl')} {
    font-size: 1.6rem;
  }
`
export const TimeLineListItem = styled.li`
  line-height: 1.2;
  list-style: outside;
  margin-left: 1.5rem;

  :not(:last-child) {
    margin-bottom: 0.8rem;

    ${up('lg')} {
      margin-bottom: 1rem;
    }
  }

  ${up('md')} {
    line-height: 1.3;
  }
`
