import React from 'react'
import './styles.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../theme/globalStyles'
import { theme } from '../../theme/theme'
import { SiteContainer } from './layout.components'
import Footer from './../Footer/Footer'
import Header from './../Header/Header'

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SiteContainer>
          <Header />
          {children}
          <Footer />
        </SiteContainer>
      </ThemeProvider>
    </React.Fragment>
  )
}
