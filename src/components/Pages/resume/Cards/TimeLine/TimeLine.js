import React from 'react'
import {
  TimeLineItem,
  TimeLineTitle,
  TimeLineSubtitle,
  TimeLineListTitle,
  TimeLineList,
  TimeLineListItem,
} from './timeline.components'

export const TimeLine = ({ date, title, subtitle, list }) => {
  return (
    <TimeLineItem date={date}>
      <TimeLineTitle>{title}</TimeLineTitle>
      <TimeLineSubtitle>{subtitle}</TimeLineSubtitle>
      {list && <TimeLineListTitle>Responsibilities:</TimeLineListTitle>}
      {list && (
        <TimeLineList>
          {list.map((el) => (
            <TimeLineListItem key={el}>{el}</TimeLineListItem>
          ))}
        </TimeLineList>
      )}
    </TimeLineItem>
  )
}
