import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ICTAK' title='Best Online Education Expertise' />
            <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014.</p>
            <div className='button'>
              <button className='primary-btn'>
              <Link to="/signup" className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </Link>
              </button>
              {/* <button>
              <Link to="/courses" >
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </Link>
              </button>  */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
