import React from 'react'
import './Profile.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Profile = () => {
  const resume = 'https://github.com/PyaePhyo1999/PPM-pfo/blob/main/resume.pdf'
  const profile = new URL('../../assets/pfile8.jpg', import.meta.url).href;
    const viewResume = () => {
      // Directly open the PDF in a new tab
        window.open(resume, '_blank');
    };
    
  return (
    <div className='profile'>
        <div className='profile-brief'>
            <div class="decorated-text-box">
                <div class="corner-block top-left"></div>
                <div class="corner-block top-right"></div>
                <div class="corner-block bottom-left"></div>
                <div class="corner-block bottom-right"></div>
                <p className='hello'>Hello There!</p>
          </div>
          <div className='intro'><p>I'm<span> Pyae Phyo,</span></p>
               <p>AI and Data Analyst</p>
               <p>Base in Myanmar.</p>
            </div> 
            <div className='profile-action'>
                <div className='resume' onClick={viewResume}> <p>My Resume</p><span>&#x27A4;</span></div>
                <div className='connect'><AnchorLink className='p-anchor-link' offset={10} href='#contact'><p>Connect with me &#x2192;</p></AnchorLink></div>
            </div>
        </div>
        <div className='img-container'>
            <div className='profile-img'><img src={profile} alt=''></img></div>
            
        </div>
   
        
    </div>
  )
}

export default Profile