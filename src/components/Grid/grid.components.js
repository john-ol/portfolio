import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { motion } from 'framer-motion'

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;

  ${up('sm')} {
    padding: 0;
  }

  ${up('md', 'landscape')} {
    flex-direction: row;
  }
`

export const Col = styled(motion.div)`
  width: 100%;
  display: flex;

  ${up('md', 'landscape')} {
    width: 50%;
  }
`
