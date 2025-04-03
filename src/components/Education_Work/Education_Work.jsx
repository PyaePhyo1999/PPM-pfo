import React from 'react';
import './Education_Work.css'
import academic from '../../utils/academic'
import experience from '../../utils/experience'

const Education_Work = () => {
  return (
    <div id='edu-work' className='edu-exp'>
    <div className='edu-exp-container'>
        <div className='edu-exp-title'>
            <h1><span id='icon'>&#x2012;</span> Education & Work</h1>
            <p>My<span id='edu-exp-txt'> Academic and</span></p> 
            <p><span id='edu-exp-txt'>Professional</span> Journey</p>
        </div>
        <div className='edu-exp-detail'> 
            <div className='section'>
                <div className='title'>
                  <i class="fa-solid fa-graduation-cap"></i>
                  <h1>Education</h1>
                </div>
                <hr id='underline'></hr>
                <div className='details'>
                  {
                    academic.map((academic,index)=>{
                        return <div key={index} className='format'>
                            <hr id='sideline'></hr>
                            <div>
                            <p>{academic.period}</p>
                            <h2>{academic.institution}</h2>
                            <a href={academic.url}><p>{academic.title}</p></a>
                            </div>
                        </div>
                    })              
                  }       
                </div>
            </div>  
            <div className='section'>
                <div className='title'>
                  <i class="fa-solid fa-briefcase"></i>
                  <h1>Work Experience</h1>
                </div>
                <hr id='underline'></hr>  
                <div className='details'>
                  {
                    experience.map((exp,index)=>{
                        return <div key={index} className='format'>
                            <hr id='sideline'></hr>
                          <div className='brief'>  <p>{exp.period}</p>
                            <h2>{exp.company}</h2>
                            <p>{exp.title}</p>
                          </div>
                       
                        </div>
                    })              
                  }       
                </div>
            </div>  
           
    </div>
</div> 
</div>
  );
};

export default Education_Work;