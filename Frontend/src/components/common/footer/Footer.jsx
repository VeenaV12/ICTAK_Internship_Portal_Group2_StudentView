import React from 'react'
import './footer.css'
import logo from '../../../assets/logo new.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'


const Footer = () => {
  return (
   <footer >
    <div className="container">
        <div className="row pb-3 pt-3 ">
            <div className="col-lg-3 col-md-6">
               <div className="footer-about footer-box">
               <img src={logo} alt="" />
                <p>Our organization had a humble beginning providing skill training programs to selected academic institutions.</p>
                <a href="https://www.facebook.com/ictkerala/" target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://www.instagram.com/ictkerala/?hl=en" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram icon'></i></a>
            <a href="https://x.com/ictakerala" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter icon'></i></a>
            <a href="https://www.youtube.com/channel/UCFRoEEgl_pBGtREE-Qp9zAg" target="_blank" rel="noopener noreferrer"><i className='fab fa-youtube icon'></i></a>
             </div>
            </div>
            <div className="col-lg-3 col-md-6">
               <div className="footer-links footer-box">
               <h2>Quick Links</h2>
                <ul>
                    <li><i class="fa-solid fa-angles-right"></i>Home</li>
                    <li><i class="fa-solid fa-angles-right"></i>Reference</li>
                    <li><i class="fa-solid fa-angles-right"></i>Submission</li>
                    <li><i class="fa-solid fa-angles-right"></i>Discussion</li>
                </ul>
               </div>
            </div>
            <div className="col-lg-3 col-md-6">
               <div className="footer-course footer-box">
               <h2>Courses</h2>
                <ul>
                    <li><i class="fa-solid fa-angles-right"></i>FSD-MERN</li>
                    <li><i class="fa-solid fa-angles-right"></i>DevOps</li>
                    <li><i class="fa-solid fa-angles-right"></i>CyberSecurity</li>
                    <li><i class="fa-solid fa-angles-right"></i>AI-ML</li>
                </ul>
               </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="footer-contact footer-box">
                <h2> Contact Us</h2>
                <ul>
                    <li>G1, Ground Floor, Thejaswini, Technopark Campus
                    Thiruvananthapuram, Kerala, India - 695 581</li>
                    <li><i class="fa-solid fa-phone-volume"></i>+91 75 940 51437</li>
                    <li><i class="fa-solid fa-envelope"></i>info@ictkerala.org</li>
                </ul>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="footer-bottom">
                <p className="copyright">

                Copyright © 2024 by Ict Academy Of Kerala
                </p>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer
