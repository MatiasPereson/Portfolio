import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/ondrive.jpeg'
import IMG3 from '../../assets/wheaterApp.png'
import IMG4 from '../../assets/my-portfolio.jpeg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'On Drive - Proyecto grupal',
    github: 'https://github.com/NachoPasser/OnDrive',
    deploy: 'https://on-drive.vercel.app'
  },
  {
    id: 2,
    image: "https://indiehoy.com/wp-content/uploads/2020/09/high-score.jpg",
    title: 'Videojuegos - Proyecto individual',
    github: 'https://github.com/MatiasPereson/PI-Videogames',
    deploy: 'https://pi-videogames-matias-pereson.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Clima - Proyecto individual',
    github: 'https://github.com/MatiasPereson/WeatherApp',
    deploy: 'https://weather-app-matias-pereson.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio - Proyecto individual',
    github: 'https://github.com/MatiasPereson/Portfolio',
    deploy: 'https://portfolio-matias-pereson.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo reciente</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, deploy }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portofolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={deploy} className='btn btn-primary' target='_blank'>Deploy</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio