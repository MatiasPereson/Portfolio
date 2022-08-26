import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'On Drive - Proyecto grupal',
    github: 'http://github.com',
    deploy: 'http://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Videojuegos - Proyecto individual',
    github: 'http://github.com',
    deploy: 'http://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Paises - Proyecto individual',
    github: 'http://github.com',
    deploy: 'http://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Pokemon - Proyecto individual',
    github: 'http://github.com',
    deploy: 'http://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Clima - Proyecto individual',
    github: 'http://github.com',
    deploy: 'http://github.com'
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