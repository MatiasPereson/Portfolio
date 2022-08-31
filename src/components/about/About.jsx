import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import Yo from '../../assets/prueba-terminado.png'
import { FaAward } from 'react-icons/fa'
import { BsHourglassSplit } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Informacion</h5>
      <h2>Sobre mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Yo} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>+8 meses desarrollando</small>
            </article>

            <article className='about__card'>
              <BsHourglassSplit className='about__icon' />
              <h5>Horas de aprendizaje</h5>
              <small>+1000 hs</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>+4 completados</small>
            </article>
          </div>

          <p>
            ¡Hola! me llamo Matías Julián Pereson, soy desarrollador web full stack, con pasión hacia el frontend. Realice un curso de +800 hs en Henry. Además, asistí a la carrera de Licenciatura en Sistemas de Información, en la UNNE (Universidad Nacional del Nordeste). Actualmente estoy en búsqueda de mi primer experiencia laboral en el mundo IT, para poder crecer personal y profesionalmente, aprendiendo día a día un poco mas. Mi sueño es hacer carrera y convertirme en un desarrollador experto, capaz de liderar equipos y ayudar a los demás a mejorar.
          </p>

          <a href="#contact" className='btn btn-primary'>Contactar</a>
        </div>
      </div>
    </section>
  )
}

export default About