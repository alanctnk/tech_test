import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const HeaderComp = () => {
  return (
    <nav className='navigation'>
      <div className='logo'>CompanyLogo</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vehicles">Veículos</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>
  </nav>
  )
}

export const Header = memo(HeaderComp)