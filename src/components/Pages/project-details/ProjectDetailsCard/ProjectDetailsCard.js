import React from 'react'
import { DemoSource } from './DemoSource/DemoSource'
import {
  Card,
  CardHeader,
  HeaderLeft,
  LinkBack,
  IconBack,
  CardTitle,
  ProjectDetailTag,
  CardBody,
  ProjectDescription,
  DescriptionTitle,
  DescriptionText,
  ProjectDemoSource,
  ProjectStack,
} from './projectDetailsCard.components'

import SiteIcon from '../../../../images/icons/project-details/site.svg'
import SourceCodeIcon from '../../../../images/icons/project-details/source-code.svg'
import { Stack } from './Stack/Stack'

export const ProjectDetailsCard = ({ data }) => {
  const { title, description, type, demo, sourceCode, stack } =
    data.frontmatter.projects
  return (
    <Card>
      <CardHeader>
        <HeaderLeft>
          <LinkBack to='/projects'>
            <IconBack />
          </LinkBack>
          <CardTitle>{title}</CardTitle>
        </HeaderLeft>
        <ProjectDetailTag type={type}>{type}</ProjectDetailTag>
      </CardHeader>
      <CardBody>
        <ProjectDescription>
          <DescriptionTitle>Description:</DescriptionTitle>
          <DescriptionText>{description}</DescriptionText>
        </ProjectDescription>
        <ProjectDemoSource>
          {demo && (
            <DemoSource link={demo} icon={<SiteIcon />}>
              Demo:
            </DemoSource>
          )}
          <DemoSource link={sourceCode} icon={<SourceCodeIcon />}>
            Source code:
          </DemoSource>
        </ProjectDemoSource>
        <ProjectStack>
          <Stack stack={stack} />
        </ProjectStack>
      </CardBody>
    </Card>
  )
}
