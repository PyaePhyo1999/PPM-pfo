import React from 'react'
import './Project.css'
import project from '../../utils/mywork_data'
import arrow from '../../assets/right-arrow.png'

const Project = () => {
  return (
    <div id='project' className='project'>
    <div className='project-container'>
        <div className='project-title'>
             <h1><span id='icon'>&#x2012;</span> Projects</h1>
             <p>My Latest<span id='project-txt'> Projects</span></p>
         </div>
         <div className='project-section'>   
             {
                project.map((project,index)=>{
                    return <div key={index} className='project-format'>
                         <img src={project.w_img} alt=''></img>
                           {project.w_genre && (
                              <div className="genre-item">
                                  {project.w_genre.map((genre, subIndex) => (
                                      <p key={subIndex} className="subgenre-tag">
                                      {genre}
                                      </p>
                              ))}
                            </div>
                          )}
                         <div className='brief'>
                             <h4>{project.w_name}</h4>
                             <div className='see-more'><img id="icon" src={arrow} alt=''></img></div>
                        </div>
                    </div>

                 }
                )
              }
        </div>
    </div> 
</div>
  )
}

export default Project