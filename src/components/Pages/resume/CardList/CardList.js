import React from 'react'
import { Cards } from './cardlist.components'
import { CardItem } from '../CardItem/CardItem'
import { experienceAnimation, skillsAnimation } from './cardlist.animations'

export const CardList = () => {
  return (
    <Cards>
      <CardItem
        variants={experienceAnimation}
        title='Work expirience'
      ></CardItem>
      <CardItem variants={skillsAnimation} title='Skills'></CardItem>
    </Cards>
  )
}
