import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardBody = styled(motion.div)`
  padding: 1.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.4rem;
`

export const CardTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const CardContent = styled.div``
