import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Container } from '../components/Layout/layout.components'
import { Main, Row } from '../components/Pages/Index/index.components'
import { Button } from '../components/Buttons/Button/Button'
import { ButtonList } from '../components/Buttons/ButtonList'
export default function Home() {
  return (
    <Layout>
      <Main>
        <Container>
          <Row>
            <ButtonList>
              <Button primary>See my resume</Button>
              <Button secondary>Hire me</Button>
            </ButtonList>
          </Row>
        </Container>
      </Main>
    </Layout>
  )
}
