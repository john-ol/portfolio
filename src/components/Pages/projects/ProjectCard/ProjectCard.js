import React from 'react'
import {
  Card,
  CardImage,
  CardFooter,
  CardInfo,
  CardTitle,
  ProjectType,
  ProjectTypeText,
} from './projectcard.components'

export const ProjectCard = ({ title, image, type }) => {
  return (
    <Card>
      <ProjectType type={type}>
        <ProjectTypeText>{type}</ProjectTypeText>
      </ProjectType>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
      </CardInfo>
      <CardImage>{image}</CardImage>
    </Card>
  )
}
