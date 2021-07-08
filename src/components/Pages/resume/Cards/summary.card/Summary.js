import React from 'react'
import { useSummary } from './summary.queries'
import { CardIcon, SummaryText } from './summary.components'
import { CardItem } from '../CardItem/CardItem'
import { summaryAnimation } from './summary.animations'

export const Summary = () => {
  const { area, title, body } = useSummary()
  const { text } = body.summary

  return (
    <CardItem
      area={area}
      title={title}
      icon={<CardIcon />}
      variants={summaryAnimation}
    >
      <SummaryText>{text}</SummaryText>
    </CardItem>
  )
}
