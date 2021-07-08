import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SiteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
`
export const Container = styled.div`
  max-width: 161rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const Main = styled(motion.main)`
  overflow: hidden;
  display: flex;
  flex-grow: 1;
`
