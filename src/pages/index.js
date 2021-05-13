import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useHeroImg } from '../components/Pages/Index/index.queries'
import { Layout } from '../components/Layout/Layout'
import { Container } from '../components/Layout/layout.components'
import {
  Main,
  HeroRow,
  InfoCol,
  ImageCol,
  HeroInfo,
  HeroGreeting,
  HeroName,
  HeroProf,
  SocialIconList,
  SocialIcon,
  GithubIcon,
  LinkedinIcon,
  ButtonListHero,
  HeroImage,
} from '../components/Pages/Index/index.components'
import { Button } from '../components/Buttons/Button/Button'

export default function Home() {
  const { file } = useHeroImg()
  const image = getImage(file.childImageSharp)
  return (
    <Layout>
      <Main>
        <Container flex grow>
          <HeroRow>
            <InfoCol>
              {/* Info */}
              <HeroInfo>
                <HeroGreeting>Hello, I'm</HeroGreeting>
                <HeroName>Evgeniy Oleinikov</HeroName>
                <HeroProf>Front-end developer</HeroProf>
              </HeroInfo>
              {/* Social Links */}
              <SocialIconList>
                <SocialIcon
                  whileHover={{ translateY: '-0.8rem' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <GithubIcon />
                </SocialIcon>
                <SocialIcon
                  whileHover={{ translateY: '-0.8rem' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <LinkedinIcon />
                </SocialIcon>
              </SocialIconList>
              <ButtonListHero>
                <Button primary>See my resume</Button>
                <Button primary>Hire me</Button>
              </ButtonListHero>
            </InfoCol>
            <ImageCol>
              <HeroImage>
                <GatsbyImage image={image} alt={file.name} />
              </HeroImage>
            </ImageCol>
          </HeroRow>
        </Container>
      </Main>
    </Layout>
  )
}
