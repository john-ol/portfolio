import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import DOMPurify from 'dompurify'
import { useAboutImg } from '../components/Pages/about/queries/useAboutImg'
import { useAboutText } from '../components/Pages/about/queries/useAboutText'
import { Layout } from '../components/Layout/Layout'
import { Seo } from '../components/Seo/Seo'
import {
  infoColAnimation,
  imageColAnimation,
} from '../components/Pages/about/about.animations'
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
  const sanitizeHtml = DOMPurify.sanitize(html)
  const image = getImage(file.childImageSharp)

  return (
    <Layout>
      <Seo pageTitle='About me' />
      <AboutContainer>
        <AboutRow>
          <InfoCol
            variants={infoColAnimation}
            initial='hidden'
            animate='visible'
          >
            <AboutCard>
              <CardHeader>
                <CardTitle>About me</CardTitle>
                <CardIcon />
              </CardHeader>
              <CardText dangerouslySetInnerHTML={{ __html: sanitizeHtml }} />
              <CardSign>{'Best regards,\n Evgeniy'}</CardSign>
            </AboutCard>
          </InfoCol>
          <ImageCol
            variants={imageColAnimation}
            initial='hidden'
            animate='visible'
          >
            <AboutImage>
              <GatsbyImage image={image} alt={file.name} />
            </AboutImage>
          </ImageCol>
        </AboutRow>
      </AboutContainer>
    </Layout>
  )
}
