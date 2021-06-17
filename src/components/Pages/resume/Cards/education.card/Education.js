import React from 'react'
import { useEducation } from './education.queries'
import { CardItem } from '../CardItem/CardItem'
import { CardIcon } from './education.components'
import { TimeLineSection } from '../TimeLine/timeline.components'
import { TimeLine } from '../TimeLine/TimeLine'

export const Education = () => {
  const { area, title, body } = useEducation()
  console.log()
  return (
    <CardItem area={area} title={title} icon={<CardIcon />}>
      <TimeLineSection>
        {body.education.map((el) => (
          <TimeLine
            key={el.subtitle}
            date={el.date}
            title={el.title}
            subtitle={el.subtitle}
          />
        ))}
      </TimeLineSection>
    </CardItem>
  )
}
