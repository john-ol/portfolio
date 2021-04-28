import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Container } from '../components/Layout/layout.components'
import { Main, Row } from '../components/Pages/Index/index.components'

export default function Home() {
  return (
    <Layout>
      <Main>
        <Container>
          <Row>TEST</Row>
        </Container>
      </Main>
    </Layout>
  )
}
