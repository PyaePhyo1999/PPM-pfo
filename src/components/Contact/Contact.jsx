import React, { useEffect, useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [buttonText,setButtonText] = useState('Send now')
    const [errors,setErrors]=useState({})
    
    const validateForm = (formData) => {
        const newErrors = {};
        if (!formData.get('name')) newErrors.name = 'Name is required...';
        if (!formData.get('email')) newErrors.email = 'Email is required...';
        else if (!/^\S+@\S+\.\S+$/.test(formData.get('email'))) 
          newErrors.email = 'Invalid email format';
        if (!formData.get('message')) newErrors.message = 'Message is required...';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

     // Auto-hide alert after 3 seconds
    useEffect(() => {
      if (submitStatus) {
        const timer = setTimeout(() => {
          setSubmitStatus(null);
      }, 3000);
        return () => clearTimeout(timer);
      }
      }, [submitStatus]);

      useEffect(() => {
            if (Object.keys(errors).length > 0) {
                  const timer = setTimeout(() => {
                      setErrors({});
                  }, 3000); // 3000ms = 3 seconds
                return () => clearTimeout(timer);
              }
          }, [errors]); // Trigger when errors change
      

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null); 
        setButtonText('Sending...')

        const formData = new FormData(event.target);
        formData.append("access_key", "0cdaccab-ed93-4c88-b15f-eca318a21c07");

        try{
          if (!validateForm(formData)){
            isLoading(true)
            setSubmitStatus(null)
            return setButtonText('Send now');
            
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
            setButtonText('Send now');
        }
        };
  return (
    <div id='contact' className='contact'>
        <div className='contact-container'>
            <div className='contact-title'>
                <h1><span id='icon'>&#x2012;</span> Contact us</h1>
            </div>
            <div className='contact-section'> 
                <div className='contact-left'>
                    <p>Lets Talk for<span id='contact-txt'> Our <br></br>Next Projects</span></p>
                    <p id='contact-brief'>I am currently avaiable to take on new projects. Therefore, free feel to contact me</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <i class="fa-solid fa-phone"></i>
                            <p>+95 9969705428</p>
                        </div>
                        <div className='contact-detail'>
                            <i class="fa-solid fa-envelope"></i>
                            <p>ppm421999@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <i class="fa-brands fa-github"></i>
                            <p><a href='https://github.com/PyaePhyo1999'>Github - Pyae Phyo Maung</a></p>
                        </div>
                        <div className='contact-detail'>
                            <i class="fa-solid fa-location-dot"></i>
                            <p>TA, Thailand</p>
                        </div>
                    </div>
                </div>  

                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <div>
                    <input type='text' name='name'  placeholder={errors.name ? errors.name : 'Ex. John'}   
                     className={`input ${errors.name ? 'input-error' : ''}`}
                    />
                    </div>
                    <label htmlFor=''>Your Email</label>
                    <div>
                    <input type='text' name='email'  placeholder={errors.email ? errors.email : 'example@gmail.com'} 
                      className={`input ${errors.email ? 'input-error' : ''}`}/>
                    </div>
                    
                    <label htmlFor=''>Write Your Message Here</label>
                    <div>
                    <textarea rows="8" name='message' placeholder={errors.message ? errors.message : 'Enter here...'} 
                         className={`input ${errors.message ? 'input-error' : ''}`}
                    />

                    </div>
                    <div className='submit-section'>
                    <div className='submit'>
                           <button type="submit" disabled={isLoading} className='contact-submit' >
                              {buttonText}
                            </button> <span>&#x27A4;</span>
                             
                    </div>
                      {/* Auto-disappearing alert */}
                    {submitStatus && (
                        <div className={`alert ${submitStatus} ${submitStatus ? 'visible' : ''}`}>
                            {submitStatus === 'success' 
                                ? 'Message sent successfully!' 
                                : ''}
                        </div>
                         )}
                   
                    </div>
                  
                </form>
               
        </div>
    </div> 
</div>
  )
}

export default Contact