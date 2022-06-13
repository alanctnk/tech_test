import React, { memo } from 'react'
import { Container } from '../../components'
import cumbuco from '../../assets/cumbuco.jpg'

const AboutComp = () => {
  return (
    <Container title='Sobre' subtitle='Um pouco sobre mim.'>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        
        <a href={cumbuco} style={{
          marginBottom: '28px'
        }}>
          <img className='image' src={cumbuco} alt="cumbuco" />
        </a>
        <h2>Olá pessoa!</h2>
        <p className='custom'>

          Sou Alan, tenho 33 anos e atualmente moro em Fortaleza - CE, Brasil. Na minha infância um dos meus jogos favoritos era <strong>Resident Evil – Code: Veronica</strong> no Playstation 2. Ficava fascinado pela quantidade de labirintos e quebra-cabeças e eu passava horas tentando resolvê-los apenas para abrir uma porta 😂.

        </p>
        <p className='custom'> Essa satisfação em resolver problemas e quebra-cabeças cresceu com o tempo e descobri que programar representa essa ideia, mas vai muito além: quero ajudar pessoas e organizações a construir seus projetos, seus sonhos e também fazer parte deles. Por isso sempre pretendo me aprimorar para me tornar um profissional melhor e mais qualificado.</p>
        <p className='custom'>Minhas outras paixões incluem filmes, leitura e esporte. Atualmente faixa branca em Jiu-jitsu 🥋</p>
        <div>
          <h2>Nas redes:</h2>
            <ul>
              <li style={{
                marginBottom: '10px'
              }}>
                <a href="https://www.linkedin.com/in/alantanakaa/" className='social_href'>LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/alanctnk" className='social_href'>Github</a>
              </li>
            </ul>
        </div>
      </div>
    </Container>
  )
}

export const About = memo(AboutComp)