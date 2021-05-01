import React from 'react'
import { Container, Header, Button } from './style'
import { BsMoon } from 'react-icons/bs'

export const SectionHeader = ({ onClick }) => {
  return (
    <Header>
      <Container className='container' >
        <h1 className='fs-4 text'>Where in the world?</h1>
        <Button onClick={onClick}> <BsMoon /> Dark Mode</Button>
      </Container>
    </Header>
  )
}