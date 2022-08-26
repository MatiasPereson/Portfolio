import React from 'react'
import "./footer.css"
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Matias Julian Pereson</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/matias-julian-pereson/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/MatiasPereson" target='_blank'><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Matias Julian Pereson. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer