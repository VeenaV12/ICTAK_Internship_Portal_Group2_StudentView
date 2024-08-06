import React from "react"
// import { Link } from "react-router-dom"
import logo from '../../../assets/logo new.png'

const Head2 = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='social'>
            <a href="https://www.facebook.com/ictkerala/" target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://www.instagram.com/ictkerala/?hl=en" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram icon'></i></a>
            <a href="https://x.com/ictakerala" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter icon'></i></a>
            <a href="https://www.youtube.com/channel/UCFRoEEgl_pBGtREE-Qp9zAg" target="_blank" rel="noopener noreferrer"><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head2
