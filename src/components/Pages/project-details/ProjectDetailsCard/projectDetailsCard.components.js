import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import { Link } from 'gatsby'
import { ProjectTag } from '../../../Project-tag/project-tag.components'
import Back from '../../../../images/icons/project-details/back.svg'

export const Card = styled.div`
  padding: 1rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.other.cardradius};

  ${up('md')} {
    padding: 2rem;
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
  width: 1.6rem;
  height: 1.6rem;
`

export const CardTitle = styled.h1`
  font-size: 1.8rem;
`

export const ProjectDetailTag = styled(ProjectTag)`
  padding: 0.6em 0.8em;
`

export const CardBody = styled.section`
  section {
    padding: 1.2rem 0;
    :not(:last-child) {
      border-bottom: 0.1rem solid ${(props) => props.theme.colors.borders};
    }
    :last-child {
      padding-bottom: 0;
    }
  }
`

export const ProjectDescription = styled.section`
  line-height: 1.8;
  font-size: 1.2rem;
`
export const ProjectDemoSource = styled.section``

export const ProjectStack = styled.section``
