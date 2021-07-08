import React from 'react'
import './styles.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../theme/globalStyles'
import { theme } from '../../theme/theme'
import { LayoutAnimation } from './layout.animation'
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
            variants={LayoutAnimation}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            {children}
          </Main>
          <Footer />
        </SiteContainer>
      </ThemeProvider>
    </React.Fragment>
  )
}
