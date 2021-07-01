import React from 'react'
import { Layout } from '../components/Layout/Layout'
import {
  NotFoundContainer,
  NotFoundRow,
  NotFoundTitle,
  NotFoundImg,
  NotFoundSubtitle,
  BackToHomeBtn,
} from '../components/Pages/404/404.components'

export default function NotFound() {
  return (
    <Layout>
      <NotFoundContainer>
        <NotFoundRow>
          <NotFoundSubtitle>Oops!</NotFoundSubtitle>
          <NotFoundTitle>Page Not Found</NotFoundTitle>

          <NotFoundImg src='/not-found/not-found.svg' />
          <BackToHomeBtn to='/' variant='primary'>
            Home page
          </BackToHomeBtn>
        </NotFoundRow>
      </NotFoundContainer>
    </Layout>
  )
}
