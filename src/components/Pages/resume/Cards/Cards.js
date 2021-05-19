import React from 'react'
import { CardItem } from './CardItem/CardItem'
import {
  experienceAnimation,
  skillsAnimation,
} from './CardItem/carditem.animations'
import ExperienceIcon from '../../../../images/icons/resume/experience.svg'
import EducationIcon from '../../../../images/icons/resume/education.svg'
import { Experience } from './experience.card/Experience'
import { Education } from './education.card/Education'

export const Cards = () => {
  return (
    <>
      <CardItem
        variants={experienceAnimation}
        title='My experience'
        icon={<ExperienceIcon />}
      >
        <Experience />
      </CardItem>
      <CardItem
        variants={skillsAnimation}
        title='Education'
        icon={<EducationIcon />}
      >
        <Education />
      </CardItem>
    </>
  )
}
