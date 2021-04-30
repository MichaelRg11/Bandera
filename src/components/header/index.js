import React from 'react'
import { Container, Header, Button } from './style'

export const SectionHeader = () => {
  return (
    <Header>
      <Container className='container' >
        <h1 className='fs-4 text'>Where in the world?</h1>
        <Button>Dark Mode</Button>
      </Container>
    </Header>
  )
}