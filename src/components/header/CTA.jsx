import React from 'react'
import CV from '../../assets/CV-MatiasPereson.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Descargar CV</a>
            <a href="#contact" className='btn btn-primary'>Contactar</a>
        </div>
    )
}

export default CTA