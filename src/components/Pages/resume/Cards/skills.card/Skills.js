import React from 'react'
import { CardItem } from '../CardItem/CardItem'
import { useSkills } from './skills.queries'
import {
  CardIcon,
  SkillsGrid,
  SkillsItem,
  SkillsTitle,
  SkillsList,
  SkillsLabel,
} from './skills.components'
export const Skills = () => {
  const { area, title, body } = useSkills()
  const { skills } = body
  return (
    <CardItem area={area} title={title} icon={<CardIcon />}>
      <SkillsGrid>
        {skills.map((item) => (
          <SkillsItem key={item.title}>
            <SkillsTitle>{item.title}</SkillsTitle>
            <SkillsList>
              {item.items.map((el) => (
                <SkillsLabel color={item.color} key={el}>
                  {el}
                </SkillsLabel>
              ))}
            </SkillsList>
          </SkillsItem>
        ))}
      </SkillsGrid>
    </CardItem>
  )
}
