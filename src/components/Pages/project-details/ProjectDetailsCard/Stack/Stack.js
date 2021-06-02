import React from 'react'
import { StackTitle, StackGrid, StackItem } from './stack.components'

export const Stack = ({ frontEnd, backEnd }) => {
  return (
    <>
      <StackTitle>Front-end Title</StackTitle>
      <StackGrid>
        <StackItem>{frontEnd}</StackItem>
      </StackGrid>
      {backEnd && (
        <>
          <StackTitle>BackEnd Title</StackTitle>
          <StackGrid>
            <StackItem>{backEnd}</StackItem>
          </StackGrid>
        </>
      )}
    </>
  )
}
