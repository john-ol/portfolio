import React from 'react'
import {
  TimeLine,
  TimeLineItem,
  TimeLineTitle,
  TimeLineText,
} from '../timeline.components'
export const Education = () => {
  return (
    <TimeLine>
      <TimeLineItem date='20-07-1990'>
        <TimeLineTitle>Computer science (bachelor)</TimeLineTitle>
        <TimeLineText>National Transport University</TimeLineText>
      </TimeLineItem>
      <TimeLineItem date='20-07-1990'>
        <TimeLineTitle>Computer science (master)</TimeLineTitle>
        <TimeLineText>National Transport University</TimeLineText>
      </TimeLineItem>
    </TimeLine>
  )
}
