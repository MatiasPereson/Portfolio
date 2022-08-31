import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/nacho.jpeg'
import AVTR2 from '../../assets/isma.jpeg'
import AVTR3 from '../../assets/santi.jfif'
import AVTR4 from '../../assets/mari.jpeg'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsBriefcase } from 'react-icons/bs'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    coworker: 'Ignacio Passerini',
    review: 'Tuve el placer de trabajar con Matias en la parte del Front, de más está decir el laburo que le metió, es una persona muy responsable, intentando mejorar su trabajo en todo momento y está dispuesto a cambiar cualquier detalle si es necesario. Es alguien con buena personalidad y por ello no es mi compañero sino un amigo.',
    linkedin: 'https://www.linkedin.com/in/Ignacio-passerini/',
    github: 'https://github.com/NachoPasser'
  },
  {
    avatar: AVTR2,
    coworker: 'Ismael Enriquez',
    review: 'Gracias al desempeño y al conocimiento de Matias logramos terminar cada sprint a tiempo, como compañero escucha y propone ideas, una persona proactiva que nunca se queda quieto, excelente compañero y amigo.',
    linkedin: 'https://www.linkedin.com/in/david-ismael-enriquez/',
    github: 'https://github.com/Ismanaos',
    portfolio: 'https://portofolio-ismanaos.vercel.app/'
  },
  {
    avatar: AVTR3,
    coworker: 'Santiago Alamos',
    review: 'El trabajo con Mati fue muy ameno tanto en sentido técnico como a nivel social: es paciente y comunicativo. Supo resolver tareas nuevas en poco tiempo adaptándose a las necesidades. En conjunto con él realizamos varios análisis de código existente para adaptarlos a nuestro trabajo. También logramos debatir ideas y resolver necesidades de forma optimizada. Fue una buena experiencia trabajar juntos.',
    linkedin: "https://www.linkedin.com/in/santiago-alamos-servian",
    github: "https://github.com/santi-misael21"
  },
  {
    avatar: AVTR4,
    coworker: 'Mariana Rionda',
    review: 'Tuve la oportunidad de trabajar con Matías en el proyecto grupal del bootcamp de Henry y estuvo siempre atento para ayudar en lo que nos hiciera falta, investigar todo lo que no sabíamos como resolver y trabajar para crear un proyecto muy lindo. Es muy buen compañero, responsable y tranquilo. Siempre busca la solución a los obstáculos, y se preocupa porque todos queden conformes con el resultado final.',
    linkedin: 'https://www.linkedin.com/in/marianarociorionda/',
    github: 'https://github.com/MariRionda'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reseñas de mis compañeros de trabajo</h5>
      <h2>Testimonios</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, coworker, review, linkedin, github, portfolio }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="coworker__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className='coworker__name'>{coworker}</h5>
                <small className='coworker__review'>{review}</small>
                <div className="coworker__social_networks">
                  <a href={linkedin} target='_blank'><BsLinkedin /></a>
                  <a href={github} target='_blank'><BsGithub /></a>
                  {portfolio ? <a href={portfolio} target='_blank'><BsBriefcase /></a> : null}
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials