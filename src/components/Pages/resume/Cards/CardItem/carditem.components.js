import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Card = styled(motion.div)`
  padding: 1rem 1.2rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.8rem;
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.6rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.borders};
`

export const CardTitle = styled.h2`
  font-size: 1.3rem;
`

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: ${(props) => props.theme.colors.icons};
    height: 2.3rem;
    width: 2.3rem;
  }
`

export const CardContent = styled.div`
  padding-top: 0.8rem;
`
