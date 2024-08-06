import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import Head from "./Head1";
import "./header.css";
import { Button } from "@mui/material";

const Header1 = () => {
  // const [click, setClick] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  const [click, setClick] = useState(false);
  const location = useLocation();

  const getLinkStyle = (paths) => {
    const pathArray = Array.isArray(paths) ? paths : paths.split(',');
    return pathArray.includes(location.pathname) ? { color: '#00a6bb', fontWeight: 'bold' } : {};
  };
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/project' style={getLinkStyle('/project')}>Home</Link>
            </li>
            <li>
              <Link to='/reference' style={getLinkStyle('/reference')}>Reference</Link>
            </li>
            <li>
              <Link to='/wsubmit' style={getLinkStyle(['/wsubmit', '/wsubmitlink1', '/wsubmitlink2', '/wsubmitlink3', '/wsubmitlink4', '/wsubmitlink5', '/wsubmitlink6', '/wsubmitform1'])}>Submission</Link>
            </li>
            <li>
              <Link to='/discussion' style={getLinkStyle('/discussion')}>Discussion</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>
              <Button 
                style={{ color: "white" }} 
                onClick={handleLogout} // Attach handleLogout to onClick
              >
                Logout
              </Button>
            </div>
            {/* <span>|</span> */}
            {/* <div className='button'><Link to='/signup'>Signup</Link></div> */}
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header1;
