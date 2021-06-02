import React from 'react'
import {
  Card,
  CardImage,
  CardInfo,
  CardTitle,
  AllProjectTags,
} from './projectcard.components'

export const ProjectCard = ({ title, image, type }) => {
  return (
    <Card>
      <AllProjectTags type={type}>{type}</AllProjectTags>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
      </CardInfo>
      <CardImage>{image}</CardImage>
    </Card>
  )
}
