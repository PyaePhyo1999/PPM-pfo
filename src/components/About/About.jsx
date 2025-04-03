import React, { useState } from 'react'
import './About.css'
const About = () => {

    const [showModal, setShowModal] = useState(false);
  
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Pyae_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setShowModal(false);
    };
  
  return (

    <div id='about' className='about'>
      <div className='about-container'>
        <div className='about-title'><h1><span>&#x2012;</span> Skills and Milestones</h1>
        </div>
        <div className='about-section'>   
          <div className='about-section-left'>
              <p>I have a solid background in data analysis and a strong ability to interpret data sets.
                In my previous role, I worked with various data tools to extract insights that helped improve business decisions. 
                I am skilled in using Excel, SQL, and Python for data manipulation and analysis. 
                I pay attention to detail and enjoy solving problems with data.
              </p>
          </div>
          <div className='about-section-right'>
          <div className='skills'>
               <div className='skill'><p>Web Development</p><hr style = {{width:"30%"}}/></div>
               <div className='skill'><p>HTML & CSS</p><hr style = {{width:"50%"}}/></div>
               <div className='skill'><p>Data Analytics</p><hr style = {{width:"60%"}}/></div>
               <div className='skill'><p>Machine Learning</p><hr style = {{width:"40%"}}/></div>
            </div>    
            <div className='milestones'>
                <div className='milestone'>
                  <h1>1+</h1>
                  <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr></hr>
                <div className='milestone'>
                  <h1>5+</h1>
                  <p>PROJECTS COMPLETED</p>
                </div>
                <hr></hr>
                <div className='milestone'>
                  <h1>3+</h1>
                  <p>HAPPY CLIENTS</p>
                </div>
            </div>

            <div className='about-action'>
                <div onClick={()=>setShowModal(true)} className='download-cv'> <p>Download CV</p><span>&#x27A4;</span></div>
                <p id='signature'>Pyae Phyo</p>
            </div>

              {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                      <h3>Download <span>Resume</span></h3>
                      <p>Do you want to download Pyae's resume?</p>
                      <div className="modal-buttons">
                      <button onClick={handleDownload}>Yes</button>
                      <button onClick={() => setShowModal(false)}>No</button>
                      </div>
                    </div>
                </div>
              )}
          </div>
            
        </div>
      </div> 
    </div>
  )
}

export default About