import React from 'react'
import { Container } from '../Layout/layout.components'
import {
  Footer,
  FooterInner,
  FooterInfo,
  FooterCopyrigth,
  FooterSocialIcons,
  SocialIcon,
  GithubIcon,
  LinkedinIcon,
  FooterPlatform,
} from './footer.components'

const SectionFooter = () => {
  return (
    <Footer>
      <Container>
        <FooterInner>
          <FooterInfo>
            <FooterCopyrigth>
              Evgeniy Oleinikov &copy;{new Date().getFullYear()}
            </FooterCopyrigth>

            <FooterSocialIcons>
              <SocialIcon>
                <GithubIcon />
              </SocialIcon>
              <SocialIcon>
                <LinkedinIcon />
              </SocialIcon>
            </FooterSocialIcons>
          </FooterInfo>
          <FooterPlatform>
            Made with Gatsby and Styled components
          </FooterPlatform>
        </FooterInner>
      </Container>
    </Footer>
  )
}
export default SectionFooter
