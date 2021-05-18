import React from 'react'
import { CardBody, CardTitle, CardContent } from './carditem.components'

export const CardItem = ({ title, children, variants }) => {
  return (
    <CardBody variants={variants} initial='hidden' animate='visible'>
      <CardTitle>{title}</CardTitle>
      <CardContent>{children}</CardContent>
    </CardBody>
  )
}
