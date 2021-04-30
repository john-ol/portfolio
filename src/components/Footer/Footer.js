import React from 'react'
import { Container } from '../Layout/layout.components'
import {
  Footer,
  FooterInner,
  FooterCopyrigth,
  FooterPlatform,
} from './footer.components'

const SectionFooter = () => {
  return (
    <Footer>
      <Container>
        <FooterInner>
          <FooterCopyrigth>
            Evgeniy Oleinikov - {new Date().getFullYear()}
          </FooterCopyrigth>
          <FooterPlatform>
            Made with GatsbyJs and Styled components
          </FooterPlatform>
        </FooterInner>
      </Container>
    </Footer>
  )
}
export default SectionFooter
