import React, { memo } from 'react'
import { Container, SadFace } from '../../components'

const NotFoundComp = () => {
  return (
    <Container title='404' subtitle='Página não encontrada.'>
      <SadFace />
    </Container>
  )
}

export const NotFound = memo(NotFoundComp)