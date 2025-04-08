import React from 'react'
import './Service.css'
import Services_Data from '../../utils/services_data'
import arrow from '../../assets/right-arrow.png'

const Service = () => {
  return (
    <div id='service' className='service'>
        <div className='service-container'>
            <div className='service-title'>
                 <h1><span id='icon'>&#x2012;</span> Services</h1>
                 <p><span id='service-txt'>Services</span> I Provide</p>
             </div>
             <div className='service-section'>   
                 {
                    Services_Data.map((service,index)=>{
                        return <div key={index} className='service-format'>
                            <div className='icon'><i className={`${service.s_icon} fa-2x service-icon`}/></div> 
                            <h3>{service.s_name}</h3>
                            <p>{service.s_desc}</p>
                            <div className='read-more'>
                                <h4>Coming Soon</h4>
                                <img src={arrow} alt=''></img>
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

export default Service