import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import PORTADA from '../../assets/portada.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Matias Julian Pereson</h1>
        <h5 className="text-ligh">Desarrollador web full stack</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={PORTADA} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>ir hasta abajo</a>
      </div>
    </header>
  )
}

export default Header