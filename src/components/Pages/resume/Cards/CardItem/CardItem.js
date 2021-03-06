import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardIcon,
  CardContent,
} from './carditem.components.js'

export const CardItem = ({ title, icon, children, variants, area }) => {
  return (
    <Card area={area} variants={variants} initial='hidden' animate='visible'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardIcon>{icon}</CardIcon>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
