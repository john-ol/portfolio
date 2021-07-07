import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useInfo } from './info.queries'
import {
  CardIcon,
  InfoSection,
  Avatar,
  Information,
  Name,
  Prof,
  ContactInfo,
  ContactInfoItem,
  ItemIcon,
  ItemText,
  ItemLink,
  Languages,
} from './info.components'
import { CardItem } from '../CardItem/CardItem'

export const GeneralInfo = () => {
  const { markdownRemark, file } = useInfo()
  const { area, title, body } = markdownRemark.frontmatter.resume
  const { name, prof, contact, languages } = body.generalInfo
  const image = getImage(file.childImageSharp)

  return (
    <CardItem area={area} title={title} icon={<CardIcon />}>
      <InfoSection>
        <Avatar>
          <GatsbyImage image={image} alt={file.name} />
        </Avatar>
        <Information>
          <Name>{name}</Name>
          <Prof>{prof}</Prof>
          <ContactInfo>
            {contact.map((el) => (
              <ContactInfoItem key={el.text}>
                <ItemIcon src={el.icon} alt={el.text} />
                {el.link ? (
                  <ItemLink href={el.link} target='_blank'>
                    {el.text}
                  </ItemLink>
                ) : (
                  <ItemText>{el.text}</ItemText>
                )}
              </ContactInfoItem>
            ))}
          </ContactInfo>
          <Languages>
            <ItemIcon src={languages.icon} alt={languages} />
            <ItemText>{languages.text}</ItemText>
          </Languages>
        </Information>
      </InfoSection>
    </CardItem>
  )
}
