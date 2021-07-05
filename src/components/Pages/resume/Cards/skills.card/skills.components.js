import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import Skills from '../../../../../images/icons/resume/skills.svg'

export const CardIcon = styled(Skills)``

export const SkillsGrid = styled.div`
  width: 100%;
  > * {
    :not(:last-child) {
      margin-bottom: 0.6rem;

      ${up('sm')} {
        margin-bottom: 1rem;
      }

      ${up('md')} {
        margin-bottom: 1.2rem;
      }

      ${up('md', 'landscape')} {
        margin-bottom: 1.4rem;
      }

      ${up('lg')} {
        margin-bottom: 1.5rem;
      }
    }
  }
`

export const SkillsItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const SkillsTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  margin-bottom: 0.6rem;

  ${up('sm')} {
    font-size: 1.4rem;
  }

  ${up('md')} {
    font-size: 1.5rem;
  }

  ${up('md', 'landscape')} {
    margin-bottom: 1rem;
  }

  ${up('lg')} {
    font-size: 1.6rem;
  }
`

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SkillsLabel = styled.span`
  margin-right: 0.8rem;
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
  display: inline-block;
  padding: 0.5em 0.8em;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  background-color: ${(props) => props.color};
  border: 0.1rem solid ${(props) => props.color};
  border-radius: ${(props) => props.theme.other.cardradius};

  ${up('sm')} {
    font-size: 1.3rem;
    margin-right: 1rem;
    margin-bottom: 0.8rem;
  }

  ${up('md')} {
    font-size: 1.35rem;
    margin-right: 0.8rem;
    margin-bottom: 0.7rem;
  }

  ${up('md', 'landscape')} {
    font-size: 1.4rem;
    margin-right: 1rem;
    margin-bottom: 1.2rem;
  }

  ${up('lg')} {
    font-size: 1.45rem;
    margin-right: 1.1rem;
    margin-bottom: 1.2rem;
  }

  ${up('xl')} {
    font-size: 1.5rem;
    margin-right: 1.1rem;
    margin-bottom: 1.3rem;
  }

  ${up('xxl')} {
    font-size: 1.55rem;
    margin-right: 1.3rem;
    margin-bottom: 1.4rem;
  }
`
