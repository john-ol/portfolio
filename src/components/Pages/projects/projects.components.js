import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { motion } from 'framer-motion'
import { Container } from '../../Layout/layout.components'

export const ProjectsContainer = styled(Container)`
  display: flex;
  align-items: center;
`

export const ProjectsGrid = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;

  ${up('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${up('md', 'landscape')} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ProjectItem = styled(motion.div)``
