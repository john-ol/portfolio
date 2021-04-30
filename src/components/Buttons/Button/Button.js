import React from 'react'
import { RegularButton } from './button.components'

export const Button = ({ children, ...props }) => {
  return <RegularButton variant={props}>{children}</RegularButton>
}
