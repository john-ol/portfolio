import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import { Link } from 'gatsby'
import { ProjectTag } from '../../../Project-tag/project-tag.components'
import Back from '../../../../images/icons/project-details/back.svg'

export const Card = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;

  ${up('md', 'landscape')} {
    padding: 1.5rem 3rem;
    justify-content: center;
    border-left: 0.1rem solid ${(props) => props.theme.colors.borders};
  }

  ${up('lg')} {
    padding: 1.5rem 6rem;
  }
`

export const CardHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.borders};
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`
export const LinkBack = styled(Link)`
  cursor: pointer;
  margin-right: 1.5rem;
`
export const IconBack = styled(Back)`
  width: 1.4em;
  height: 1.4em;

  ${up('sm')} {
    font-size: 1.2rem;
  }

  ${up('md')} {
    font-size: 1.4rem;
  }
`

export const CardTitle = styled.h1`
  font-size: 1.6rem;

  ${up('sm')} {
    font-size: 1.8rem;
  }

  ${up('md')} {
    font-size: 2rem;
  }
`

export const ProjectDetailTag = styled(ProjectTag)`
  padding: 0.6em 0.8em;

  ${up('sm')} {
    font-size: 1.1rem;
  }

  ${up('md')} {
    font-size: 1.2rem;
  }
`

export const CardBody = styled.section`
  > section {
    padding: 1.2rem 0;
    h2 {
      font-size: 1.4rem;
      margin-bottom: 1.2rem;

      ${up('sm')} {
        font-size: 1.5rem;
      }

      ${up('md')} {
        font-size: 1.7rem;
      }
    }

    :not(:last-child) {
      border-bottom: 0.1rem solid ${(props) => props.theme.colors.borders};
    }
    :last-child {
      padding-bottom: 0;
    }
  }
`

export const ProjectDescription = styled.section``

export const DescriptionTitle = styled.h2``

export const DescriptionText = styled.p`
  text-indent: 1.4rem;
  line-height: 1.8;
  font-size: 1.3rem;
  text-align: justify;
`

export const ProjectDemoSource = styled.section``

export const ProjectStack = styled.section``
