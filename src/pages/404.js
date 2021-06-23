import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { LinkButton } from '../components/Buttons/LinkButton/linkButton.components'
import {
  NotFoundContainer,
  NotFoundRow,
  Logo,
  NotFoundTitle,
  NotFoundSubtitle,
} from '../components/Pages/404/404.components'

export default function NotFound() {
  return (
    <Layout>
      <NotFoundContainer>
        <NotFoundRow>
          <NotFoundSubtitle>Whoops!</NotFoundSubtitle>
          <NotFoundTitle>Page Not Found</NotFoundTitle>
          <Logo />
          <LinkButton to='/' variant='primary'>
            Go to Home page
          </LinkButton>
        </NotFoundRow>
      </NotFoundContainer>
    </Layout>
  )
}
