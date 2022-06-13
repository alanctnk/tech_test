import React, { memo } from 'react'
import { Container, Inventory } from '../../components'

const HomeComp = () => {
  return (
    <Container title="Home" subtitle="Bem vindo a nossa página!">
      <div class="jumbotron">
        <div class="jumbox">
          <h1>WELCOME TO APPNAME</h1>
        </div>
      </div>
        
      <div class="jumbox">
        <h2>Mussum Ipsum</h2>
        <p>Manduma pindureta quium dia nois paga.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Detraxit consequat et quo num tendi nada. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.A ordem dos tratores não altera o pão duris.Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
      </div>
      <Inventory />
    </Container>
  )
}

export const Home = memo(HomeComp)