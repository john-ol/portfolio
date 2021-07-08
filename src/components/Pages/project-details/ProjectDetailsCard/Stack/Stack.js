import React from 'react'
import {
  StackTitle,
  StackGrid,
  StackItem,
  GridItem,
  TechLink,
  ItemTitle,
  LogoIcon,
} from './stack.components'
import { stackAnimations } from './stack.animations'
import { infoAnimation } from '../../../resume/Cards/info.card/info.animations'
export const Stack = ({ stack }) => {
  return (
    <>
      {stack.map((item) => (
        <StackItem key={item.title}>
          <StackTitle>{item.title}</StackTitle>
          <StackGrid>
            {item.tech.map((tech, i) => (
              <TechLink
                href={tech.link}
                key={tech.title}
                target='_blank'
                variants={stackAnimations}
                initial='hidden'
                animate='visible'
                custom={i}
              >
                <GridItem key={tech.title}>
                  <LogoIcon src={tech.src} alt={tech.title} />
                  <ItemTitle>{tech.title}</ItemTitle>
                </GridItem>
              </TechLink>
            ))}
          </StackGrid>
        </StackItem>
      ))}
    </>
  )
}
