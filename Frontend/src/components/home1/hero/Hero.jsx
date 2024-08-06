import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  const [pdfLink, setPdfLink] = useState(null);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/project/getproject', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data.pdf)
        setPdfLink(response.data.pdf); 
    } catch (error) {
        console.error('Error fetching project data:', error);
    }
};


const downloadPDF = async (pdfLink) => {
  try {
      const response = await axios.get(`http://localhost:3000/${pdfLink}`,{
        responseType:'blob',
        credentials: 'omit',  
      })

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'overview_document.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  } catch (error) {
      console.error('Error downloading PDF:', error);
      
  }
};

const handleDownload = () => {
  if (pdfLink) {
      downloadPDF(pdfLink);
  } else {
      console.error('No PDF link found');
      
  }
};

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ICTAK' title='Project Dashboard' />
            <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014.</p>
            <div className='button'>
              <button className='primary-btn' onClick={handleDownload}>
                GET OVERVIEW DOCUMENT <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Hero;
