import React from 'react'
import { BurgerButton, Line } from './burger.components'

export const Burger = ({ open, setOpen }) => {
  const toggleHandler = (event) => {
    event.preventDefault()
    setOpen(!open)
  }
  return (
    <BurgerButton open={open} onClick={toggleHandler}>
      <Line />
    </BurgerButton>
  )
}
