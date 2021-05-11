import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useHeroImg } from '../components/Pages/Index/index.queries'
import GithubIcon from '../images/icons/github.svg'
import LinkedinIcon from '../images/icons/linkedin.svg'
import { Layout } from '../components/Layout/Layout'
import { Container } from '../components/Layout/layout.components'
import {
  Main,
  Row,
  Col,
  HeroInfo,
  HeroGreeting,
  HeroName,
  HeroProf,
  SocialIcons,
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
          <Row>
            <Col>
              {/* Info */}
              <HeroInfo>
                <HeroGreeting>Hello, I'm</HeroGreeting>
                <HeroName>Evgeniy Oleinikov</HeroName>
                <HeroProf>Front-end developer</HeroProf>
              </HeroInfo>
              {/* Social Links */}
              <SocialIcons>
                <GithubIcon />
                <LinkedinIcon />
              </SocialIcons>
              <ButtonListHero>
                <Button primary>See my resume</Button>
                <Button primary>Hire me</Button>
              </ButtonListHero>
            </Col>
            <Col>
              <HeroImage>
                <GatsbyImage image={image} alt={file.name} />
              </HeroImage>
            </Col>
          </Row>
        </Container>
      </Main>
    </Layout>
  )
}
