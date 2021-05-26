import React from 'react'
import { navigate } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useHeroImg } from '../components/Pages/Index/index.queries'
import { Layout } from '../components/Layout/Layout'
import {
  HeroContainer,
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
import {
  socialIconsAnimate,
  InfoColAnimation,
  ImageColAnimation,
} from '../components/Pages/Index/index.animations'

export default function Home() {
  const { file } = useHeroImg()
  const image = getImage(file.childImageSharp)

  return (
    <Layout>
      <HeroContainer>
        <HeroRow>
          <InfoCol
            variants={InfoColAnimation}
            initial='hidden'
            animate='visible'
          >
            {/* Info */}
            <HeroInfo>
              <HeroGreeting>Hello, I'm</HeroGreeting>
              <HeroName>Evgeniy Oleinikov</HeroName>
              <HeroProf>Front-end developer</HeroProf>
            </HeroInfo>
            {/* Social Links */}
            <SocialIconList>
              <SocialIcon
                variants={socialIconsAnimate}
                whileHover='onHover'
                whileTap='onClick'
                transition='transition'
              >
                <GithubIcon />
              </SocialIcon>
              <SocialIcon
                variants={socialIconsAnimate}
                whileHover='onHover'
                whileTap='onClick'
                transition='transition'
              >
                <LinkedinIcon />
              </SocialIcon>
            </SocialIconList>
            <ButtonListHero>
              <Button variant='primary' onClick={() => navigate('/resume')}>
                See my resume
              </Button>
              <Button variant='primary'>Hire me</Button>
            </ButtonListHero>
          </InfoCol>
          <ImageCol
            variants={ImageColAnimation}
            initial='hidden'
            animate='visible'
          >
            <HeroImage>
              <GatsbyImage image={image} alt={file.name} />
            </HeroImage>
          </ImageCol>
        </HeroRow>
      </HeroContainer>
    </Layout>
  )
}
