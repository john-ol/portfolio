import React from 'react'
import {
  TimeLineSection,
  TimeLineItem,
  TimeLineTitle,
  TimeLineText,
} from '../timeline.components'
import { EducationCard } from './education.components'

export const Education = () => {
  return (
    <EducationCard>
      <TimeLineSection>
        <TimeLineItem date='20-07-1990'>
          <TimeLineTitle>Computer science (bachelor)</TimeLineTitle>
          <TimeLineText>National Transport University</TimeLineText>
        </TimeLineItem>
        <TimeLineItem date='20-07-1990'>
          <TimeLineTitle>Computer science (master)</TimeLineTitle>
          <TimeLineText>National Transport University</TimeLineText>
        </TimeLineItem>
      </TimeLineSection>
    </EducationCard>
  )
}
