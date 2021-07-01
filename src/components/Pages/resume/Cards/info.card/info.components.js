import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import Info from '../../../../../images/icons/resume/info.svg'

export const InfoSection = styled.section`
  display: flex;
`
export const Avatar = styled.div`
  display: flex;
  max-width: 40%;
  margin-right: 1.1rem;

  > * {
    border-radius: ${(props) => props.theme.other.cardradius};
  }

  ${up('sm')} {
    max-width: 28%;
  }

  ${up('md')} {
    max-width: 50%;
    margin-right: 1.5rem;
  }

  ${up('md', 'landscape')} {
    max-width: 36%;
    margin-right: 1.5rem;
  }

  ${up('lg')} {
    max-width: 34%;
  }

  ${up('lgx')} {
    max-width: 30%;
  }

  ${up('xl')} {
    max-width: 22%;
  }

  ${up('xxl')} {
    max-width: 20%;
  }

  ${up('xxxl')} {
    max-width: 17%;
  }
`

export const Information = styled.section`
  width: 100%;
`

export const CardIcon = styled(Info)``

export const Name = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;

  ${up('sm')} {
    font-size: 1.6rem;
  }

  ${up('md')} {
    font-size: 1.8rem;
  }

  ${up('lg')} {
    font-size: 1.9rem;
  }

  ${up('xl')} {
    font-size: 2rem;
    margin-bottom: 0.4rem;
  }
`
export const Prof = styled.h4`
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fonts.weight.light};
  padding-left: 0.1rem;
  margin-bottom: 1.2rem;

  ${up('sm')} {
    font-size: 1.3rem;
    margin-bottom: 1.1rem;
  }

  ${up('md')} {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }

  ${up('lg')} {
    font-size: 1.5rem;
    margin-bottom: 1.6rem;
  }

  ${up('lgx')} {
    margin-bottom: 1.4rem;
  }

  ${up('xl')} {
    font-size: 1.6rem;
    margin-bottom: 1.7rem;
  }
`

export const ContactInfo = styled.ul`
  margin-bottom: 1rem;

  ${up('sm')} {
    margin-bottom: 1.2rem;
  }

  ${up('md')} {
    margin-bottom: 1.4rem;
  }

  ${up('lg')} {
    margin-bottom: 1.6rem;
  }

  ${up('lgx')} {
    margin-bottom: 1.4rem;
  }

  ${up('xl')} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 0rem;
  }
`

export const ContactInfoItem = styled.li`
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 1rem;

    ${up('sm')} {
      margin-bottom: 1.2rem;
    }

    ${up('md')} {
      margin-bottom: 1.4rem;
    }

    ${up('lg')} {
      margin-bottom: 1.6rem;
    }

    ${up('lgx')} {
      margin-bottom: 1.4rem;
    }
  }

  ${up('sm')} {
    font-size: 1.3rem;
  }

  ${up('lg')} {
    font-size: 1.4rem;
    margin-bottom: 1.4rem;
  }

  ${up('xl')} {
    width: 50%;
    font-size: 1.6rem;
    margin-bottom: 2.2rem;
  }
`

export const ItemIcon = styled.img`
  width: 1.3em;
  height: 1.3em;
  margin-right: 0.8rem;

  ${up('lg')} {
    font-size: 1.3rem;
    margin-right: 1.1rem;
  }

  ${up('xl')} {
    font-size: 1.5rem;
    margin-right: 1.2rem;
  }
`
export const ItemText = styled.p``

export const ItemLink = styled.a`
  position: relative;
  display: inline-block;
  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.2rem;
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
`

export const Languages = styled.div`
  font-size: 1.2rem;
  display: flex;

  ${up('sm')} {
    font-size: 1.3rem;
  }

  ${up('lg')} {
    font-size: 1.4rem;
  }

  ${up('xl')} {
    font-size: 1.6rem;
  }
`
