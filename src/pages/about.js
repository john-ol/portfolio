import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useAboutImg } from '../components/Pages/about/about.queries'
import { Layout } from '../components/Layout/Layout'
import {
  AboutContainer,
  AboutRow,
  AboutImage,
  InfoCol,
  ImageCol,
  AboutCard,
  CardHeader,
  CardTitle,
  CardIcon,
  CardText,
} from '../components/Pages/about/about.components'

export default function About() {
  const { file } = useAboutImg()
  const image = getImage(file.childImageSharp)

  return (
    <Layout>
      <AboutContainer>
        <AboutRow>
          <InfoCol>
            <AboutCard>
              <CardHeader>
                <CardTitle>About me</CardTitle>
                <CardIcon />
              </CardHeader>
              <CardText>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </CardText>
            </AboutCard>
          </InfoCol>
          <ImageCol>
            <AboutImage>
              <GatsbyImage image={image} alt={file.name} />
            </AboutImage>
          </ImageCol>
        </AboutRow>
      </AboutContainer>
    </Layout>
  )
}
