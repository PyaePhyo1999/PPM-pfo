import React, { useEffect, useState } from 'react'
import './Footer.css'
import arrow from '../../assets/email-right-arrow.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors,setErrors]=useState({})

    const validateForm = (formData) => {

        const newErrors = {};
        if (!formData.get('email')) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(formData.get('email'))) 
          newErrors.email = 'Invalid email format';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const timer = setTimeout(() => {
                setErrors({});
            }, 3000); // 3000ms = 3 seconds
            return () => clearTimeout(timer);
        }
    }, [errors]); // Trigger when errors change

        useEffect(() => {
          if (submitStatus) {
            const timer = setTimeout(() => {
              errors.message
              setSubmitStatus(null);
          }, 3000);
            return () => clearTimeout(timer);
          }
          }, [submitStatus],[errors.message]);
    
          const onSubm = async (event) => {
            event.preventDefault();
            setIsLoading(true);
              
    
            const formData = new FormData(event.target);
            formData.append("access_key", "0cdaccab-ed93-4c88-b15f-eca318a21c07");
    
            try{
              setErrors({}); 

              if (!validateForm(formData)){
                isLoading(true)
                return;
              } 
              else{
                const object = Object.fromEntries(formData);
                const json = JSON.stringify(object);
            
                const res = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                  },
                  body: json
                }).then((res) => res.json());
                if (res.success) {
                    event.target.reset();
                    setSubmitStatus('success');
                    console.log("Success", res);
                  }  
                  else {
                    throw new Error(res.message || "Submission failed");
                  }
              }  
      
            }
            catch(error){
                console.error("Error:", error);
                setSubmitStatus('error');   
            }
            finally{
              setIsLoading(false);
            }
            };

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

            <form onSubmit={onSubm} className='section-4'>
                <h3 id='info'>Get the latest Information</h3> 
                <div className='user-email'>
                    <i class="fa-solid fa-user"></i>
                    <input type='text' name='email' placeholder={errors.email ? errors.email : 'Email address'} id='footer-email' 
                    className={errors.email ? 'error-mail-footer' : ''}/>
                   
                    
                    <button type="submit" disabled={isLoading} className='sent-email'>
                    <img id="email-sent" src={arrow} alt=''></img>
                        </button>
                
                </div>
                {submitStatus && (
                        <div className={`alert-message ${submitStatus} ${submitStatus ? 'visible' : ''}`}>
                            {submitStatus === 'success' 
                                ? 'Message sent successfully!' 
                                : ""}
                        </div>
                         )}
                        
            </form>  
        </div>
    </div> 
    <div className='section-footer'>
        <p>Copyright © 2025 <span id='name'>Pyae Phyo Maung.</span> All Rights Reserved.</p>
    </div>
</div>
  )
}

export default Footer