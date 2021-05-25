import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'

import { Container } from '../Layout/layout.components'
import {
  Header,
  HeaderInner,
  Info,
  Logo,
  User,
  Name,
  Prof,
} from './header.components'
import { Burger } from './../Buttons/Burger/Burger'
import { Nav } from './Nav/Nav'
const SectionHeader = () => {
  const [open, setOpen] = useState(false)
  const [scrollable, setScrollable] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollable(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Header scrollable={scrollable}>
      <Container>
        <HeaderInner>
          {/* Info */}
          <Info>
            <Link to='/'>
              <Logo />
            </Link>
            <User>
              <Name>{'Evgeniy\nOleinikov'}</Name>
              <Prof>Front-end developer</Prof>
            </User>
          </Info>
          {/* Navbar */}
          <Burger open={open} setOpen={setOpen} />
          <Nav open={open} />
        </HeaderInner>
      </Container>
    </Header>
  )
}

export default SectionHeader
