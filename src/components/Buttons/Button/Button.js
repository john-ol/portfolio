import React from 'react'
import { RegularButton } from './button.components'

export const Button = ({ children, onClick, border, variant }) => {
  return (
    <RegularButton onClick={onClick} border={border} variant={variant}>
      {children}
    </RegularButton>
  )
}
