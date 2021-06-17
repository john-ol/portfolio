import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Card = styled(motion.div)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.other.cardradius};
  border: 0.1rem solid ${(props) => props.theme.colors.borders};
  grid-area: ${(props) => props.area};
`
export const CardHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.borders};
`

export const CardTitle = styled.h2`
  font-size: 1.5rem;
`

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${(props) => props.theme.colors.icons};
    height: 2.5rem;
    width: 2.5rem;
  }
`

export const CardContent = styled.section`
  padding: 1rem;
`
