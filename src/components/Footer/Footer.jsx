import React from 'react'
import './Footer.css'
import arrow from '../../assets/email-right-arrow.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {

  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='footer-title'>
            <p>Let's<span id='footer-txt'> Connect</span> here</p> 
            <hr id='underline'></hr>
        </div>
        <div className='footer-detail'> 
            <div className='section-1'>
                <h3 className='personal-logo'><span id='logo'>P</span> Pyae<span>.</span></h3>
                <p>  A technical support with a half year experience related to bank operations and
                     managing techical issues. As an assistant analyst, prepared documentations of issues from banking
                     system and UAT.</p>
                <div className='social-icons'>
                    <a href='https://www.facebook.com/profile.php?id=100004681816155'><i class="fa-brands fa-square-facebook"></i></a>
                    <a href='https://www.instagram.com/4.2_99/'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://www.youtube.com/@_PyaePhyo'><i class="fa-brands fa-youtube"></i></a>
                    <a href='https://x.com/PyaePhyo42'><i class="fa-brands fa-twitter"></i></a>
                    <a href='https://www.linkedin.com/in/pyae-phyo-maung-367447163/'><i class="fa-brands fa-linkedin"></i></a> 
                </div>
            </div>  
            <div className='section-2'>
                <h3 id='navigation'>Navigation</h3>
                <ul>     
                    <li>   
                        <AnchorLink className='footer-anchor' href='#home' offset={0}>
                        <p>Home</p>
                        </AnchorLink>  
                    </li>
                    <li>
                        <AnchorLink className='footer-anchor'
                        href='#intro' offset={100}>
                         <p>Introduction</p>
                        </AnchorLink>  
                    </li>
                    <li>       
                        <AnchorLink className='footer-anchor'
                         href='#service' offset={0}>
                            <p>Services</p>
                        </AnchorLink> 
                    </li>
                    <li>   
                        <AnchorLink className='footer-anchor'
                            href='#about' offset={100}>
                            <p>Skills and Milestones</p>
                         </AnchorLink>    
                    </li>
                    <li>   
                        <AnchorLink className='footer-anchor' href='#project' offset={0}>
                        <p>Projects</p>
                        </AnchorLink>
            </li>
                    <li>   
                        <AnchorLink className='footer-anchor' href='#edu-work' offset={0}>
                        <p>Education & Work</p>
                         </AnchorLink>
                    </li>
                </ul>
            </div>  
            <div className='section-3'>
                 <h3 id='contact'>Contact</h3>
                     <ul>
                          <li>+95 9969705428</li>
                          <li><a href='https://github.com/PyaePhyo1999'>Github - Pyae Phyo Maung</a></li>
                         <li>ppm421999@gmail.com</li>
                          <li>Soi Sukhumvit 64, Phrakhanong Tai, Bangkok, Thailand</li>
                    </ul>
            </div>  
            <div className='section-4'>
                <h3 id='info'>Get the latest Information</h3> 
                <div className='user-email'>
                    <i class="fa-solid fa-user"></i>
                    <input type='email' placeholder='Email address'/>
                    <div className='sent-email'><img id="email-sent" src={arrow} alt=''></img></div>
                </div>
            </div>  
        </div>
    </div> 
    <div className='section-footer'>
        <p>Copyright © 2025 <span id='name'>Pyae Phyo Maung.</span> All Rights Reserved</p>
    </div>
</div>
  )
}

export default Footer