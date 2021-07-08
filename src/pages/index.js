import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useHeroImg } from '../components/Pages/Index/index.queries'
import { Layout } from '../components/Layout/Layout'
import { Seo } from '../components/Seo/Seo'
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
  SocialIconLink,
  GithubIcon,
  LinkedinIcon,
  ButtonListHero,
  HeroImage,
} from '../components/Pages/Index/index.components'
import {
  socialIconsAnimate,
  infoColAnimation,
  imageColAnimation,
} from '../components/Pages/Index/index.animations'
import { LinkButton } from '../components/Buttons/LinkButton/linkButton.components'

export default function Home() {
  const { file } = useHeroImg()
  const image = getImage(file.childImageSharp)

  return (
    <Layout>
      <Seo pageTitle='Home' />
      <HeroContainer>
        <HeroRow>
          <InfoCol
            variants={infoColAnimation}
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
                <SocialIconLink
                  href='https://github.com/john-ol'
                  target='_blank'
                >
                  <GithubIcon />
                </SocialIconLink>
              </SocialIcon>
              <SocialIcon
                variants={socialIconsAnimate}
                whileHover='onHover'
                whileTap='onClick'
                transition='transition'
              >
                <SocialIconLink
                  href='https://www.linkedin.com/in/evgeniy-oleinikov-3b7b3a1b4'
                  target='_blank'
                >
                  <LinkedinIcon />
                </SocialIconLink>
              </SocialIcon>
            </SocialIconList>
            <ButtonListHero>
              <LinkButton to='/resume' variant='primary'>
                See my resume
              </LinkButton>
              <LinkButton to='/contact' variant='primary'>
                Hire me
              </LinkButton>
            </ButtonListHero>
          </InfoCol>
          <ImageCol
            variants={imageColAnimation}
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
