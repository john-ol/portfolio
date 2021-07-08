import React from 'react'
import './styles.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../theme/globalStyles'
import { theme } from '../../theme/theme'
import { SiteContainer, Main } from './layout.components'
import Footer from './../Footer/Footer'
import Header from './../Header/Header'

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SiteContainer>
          <Header />
          <Main
            initial={{
              opacity: 0,
              x: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              type: 'spring',
              duration: 0.5,
            }}
          >
            {children}
          </Main>
          <Footer />
        </SiteContainer>
      </ThemeProvider>
    </React.Fragment>
  )
}
