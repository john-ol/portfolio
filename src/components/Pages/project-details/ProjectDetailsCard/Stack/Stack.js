import React from 'react'
import {
  StackTitle,
  StackGrid,
  StackItem,
  GridItem,
  TechLink,
  ItemTitle,
  ItemIcon,
} from './stack.components'

export const Stack = ({ stack }) => {
  return (
    <>
      {stack.map((item) => (
        <StackItem key={item.title}>
          <StackTitle>{item.title}</StackTitle>
          <StackGrid>
            {item.tech.map((tech) => (
              <TechLink href={tech.link} key={tech.title} target='_blank'>
                <GridItem key={tech.title}>
                  {!tech.src && (
                    <ItemTitle visible={tech.src}>{tech.title}</ItemTitle>
                  )}

                  {tech.src && <ItemIcon src={tech.src} alt={tech.title} />}
                </GridItem>
              </TechLink>
            ))}
          </StackGrid>
        </StackItem>
      ))}
    </>
  )
}
