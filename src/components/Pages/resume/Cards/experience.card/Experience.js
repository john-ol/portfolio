import React from 'react'
import { useExperience } from './experience.queries'
import { CardItem } from '../CardItem/CardItem'
import { CardIcon } from './experience.components'
import { TimeLineSection } from '../TimeLine/timeline.components'
import { TimeLine } from '../TimeLine/TimeLine'

export const Experience = () => {
  const { area, title, body } = useExperience()
  return (
    <CardItem area={area} title={title} icon={<CardIcon />}>
      <TimeLineSection>
        {body.experience.map((el) => (
          <TimeLine
            key={el.title}
            date={el.date}
            title={el.title}
            subtitle={el.subtitle}
            list={el.list}
          />
        ))}
      </TimeLineSection>
    </CardItem>
  )
}
