import React from 'react'
import {
  InfoSection,
  Avatar,
  Information,
  Name,
  Prof,
  ContactInfo,
  ContactInfoItem,
  LocationIcon,
  PhoneIcon,
  MailIcon,
  GithubIcon,
  LocationText,
  PhoneText,
  MailText,
  GithubText,
  InfoCard,
} from './info.components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useAvatar } from '../../resume.queries'
import { encryptEmail } from './encrypt.email'

export const Info = () => {
  const { file } = useAvatar()
  const image = getImage(file.childImageSharp)

  return (
    <InfoCard>
      <InfoSection>
        <Avatar>
          <GatsbyImage image={image} alt={file.name} />
        </Avatar>
        <Information>
          <Name>Evgeniy Oleinikov</Name>
          <Prof>Junior Front-end developer</Prof>
          <ContactInfo>
            <ContactInfoItem>
              <LocationIcon />
              <LocationText>Kyiv</LocationText>
            </ContactInfoItem>
            <ContactInfoItem>
              <PhoneIcon />
              <PhoneText>+38(073)-419-34-31</PhoneText>
            </ContactInfoItem>
            <ContactInfoItem>
              <MailIcon />
              <MailText dangerouslySetInnerHTML={{ __html: encryptEmail() }} />
            </ContactInfoItem>
            <ContactInfoItem>
              <GithubIcon />
              <GithubText href='https://github.com/john-ol' target='blank'>
                https://github.com/john-ol
              </GithubText>
            </ContactInfoItem>
          </ContactInfo>
        </Information>
      </InfoSection>
    </InfoCard>
  )
}
