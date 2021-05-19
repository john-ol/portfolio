import React from 'react'
import {
  TimeLine,
  TimeLineItem,
  TimeLineTitle,
  TimeLineSubtitle,
  TimeLineText,
} from '../timeline.components'
export const Experience = () => {
  return (
    <TimeLine>
      <TimeLineItem date='20-07-1990'>
        <TimeLineTitle>Biologic.tv</TimeLineTitle>
        <TimeLineSubtitle>Front-end developer</TimeLineSubtitle>
        <TimeLineText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </TimeLineText>
      </TimeLineItem>
      <TimeLineItem date='20-07-1990'>
        <TimeLineTitle>Biologic.tv</TimeLineTitle>
        <TimeLineSubtitle>Front-end developer</TimeLineSubtitle>
        <TimeLineText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </TimeLineText>
      </TimeLineItem>
    </TimeLine>
  )
}
