import React from 'react'
import { Container, Header } from './style'

export const SectionHeader = () => {
  return (
    <Header>
      <Container className='container' >
        <h1 className='fs-4 text'>Where in the world?</h1>
        <button>Dark Mode</button>
      </Container>
    </Header>
  )
}