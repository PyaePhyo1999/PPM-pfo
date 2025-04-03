import React from 'react';
import './Introduction.css'

const Introduction = () => {
  return (
    <div id='intro' className="introduction">
      <div className='intro-container'>
      <div className='introduction-brief'>
          <h1>Who am I</h1>       
          <p>My name is Pyae Phyo Maung, a computer science graduate with over four years of AI and Data anaylst.</p>
          <p>
          A reliable fellow when it comes to any project development. Possesses a creative instinct to develop new things with clean and modular knowledge. 
          Ready for new challenges to hone my technical skills and bring along positive impacts. 
          </p>
       </div>
       <div className='introduction-img'><i class="fa-solid fa-question"></i></div>  
    </div>

      </div>
 
  );
};

export default Introduction;