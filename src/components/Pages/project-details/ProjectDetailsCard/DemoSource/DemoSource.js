import React from 'react'
import {
  DemoSourceItem,
  DemoSourceTitle,
  DemoSourceContent,
  DemoSourceLink,
} from './demoSource.components'

export const DemoSource = ({ children, link, icon }) => {
  return (
    <DemoSourceItem>
      <DemoSourceTitle>{children}</DemoSourceTitle>
      <DemoSourceContent>
        {icon}
        <DemoSourceLink href={link} target='_blank'>
          {link}
        </DemoSourceLink>
      </DemoSourceContent>
    </DemoSourceItem>
  )
}
