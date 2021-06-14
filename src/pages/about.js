import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useAboutImg } from '../components/Pages/about/queries/useAboutImg'
import { useAboutText } from '../components/Pages/about/queries/useAboutText'
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
  CardSign,
} from '../components/Pages/about/about.components'

export default function About() {
  const { file } = useAboutImg()
  const { html } = useAboutText()
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
              <CardText dangerouslySetInnerHTML={{ __html: html }} />
              <CardSign>{'Best regards,\n Evgeniy'}</CardSign>
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
