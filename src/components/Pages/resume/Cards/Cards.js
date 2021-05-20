import React from 'react'
import { CardItem } from './CardItem/CardItem'
import {
  experienceAnimation,
  skillsAnimation,
} from './CardItem/carditem.animations'
import InfoIcon from '../../../../images/icons/resume/info.svg'
import SummaryIcon from '../../../../images/icons/resume/resume.svg'
import ExperienceIcon from '../../../../images/icons/resume/experience.svg'
import EducationIcon from '../../../../images/icons/resume/education.svg'

import { Experience } from './experience.card/Experience'
import { Education } from './education.card/Education'
import { Info } from './info.card/Info'
import { Summary } from './summary.card/Summary'
import { navigate } from 'gatsby'

export const Cards = () => {
  return (
    <>
      <CardItem
        variants={experienceAnimation}
        title='General information'
        icon={<InfoIcon />}
      >
        <Info />
      </CardItem>
      <CardItem
        variants={experienceAnimation}
        title='Summary'
        icon={<SummaryIcon />}
      >
        <Summary />
      </CardItem>

      <CardItem
        variants={experienceAnimation}
        title='Experience'
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
