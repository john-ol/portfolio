import React from 'react'
import { Container } from '../Layout/layout.components'
import {
  Footer,
  FooterInner,
  FooterInfo,
  FooterCopyrigth,
  FooterSocialIcons,
  SocialIcon,
  SocialIconLink,
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
                <SocialIconLink
                  href='https://github.com/john-ol'
                  target='_blank'
                >
                  <GithubIcon />
                </SocialIconLink>
              </SocialIcon>
              <SocialIcon>
                <SocialIconLink
                  href='https://www.linkedin.com/in/evgeniy-oleinikov'
                  target='_blank'
                >
                  <LinkedinIcon />
                </SocialIconLink>
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
