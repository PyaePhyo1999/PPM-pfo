import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import close_bar from '../../assets/menu_close.svg'

const Navbar = () => {

  const[menu,setMenu] = useState('home')
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right ='0'
  }
  const closeMenu = ()=>{
    menuRef.current.style.right ='-350px'
  }


  return (
    <div id='home' className='navbar'>
      <p className='personal-logo'><span id='logo'>P</span> Pyae<span>.</span></p>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'></img>
      <ul ref={menuRef} className='nav-menu'>
        <img src={close_bar} onClick={closeMenu} alt='' className='nav-mob-close'></img>
        <li>
          <AnchorLink href='#home' offset={0}
             className={menu==='home'? 'active':''}
             onClick={()=>setMenu('home')}>
          <p>Home</p>
          </AnchorLink>  
        </li>
        <li> 
          <AnchorLink
            href='#intro' offset={100}
            className={menu==='intro'? 'active':''}
            onClick={()=>setMenu('intro')}>
          <p>Introduction</p>
          </AnchorLink>  
        </li>
        <li> 
            <AnchorLink
                href='#about' offset={100}
                className={menu==='skill-milestone'? 'active':''}
                onClick={()=>setMenu('skill-milestone')}>
                <p>Skills and Milestones</p>
            </AnchorLink>    
         </li>
        <li> 
          <AnchorLink
            href='#service' offset={0}
            className={menu==='service'? 'active':''}
            onClick={()=>setMenu('service')}>
            <p>Services</p>
          </AnchorLink> 
        </li>
        <li> 
          <AnchorLink href='#project' offset={0}
           className={menu==='project'? 'active':''}
           onClick={()=>setMenu('project')}>
          <p>Projects</p>
          </AnchorLink>
        </li>
        <li> 
          <AnchorLink href='#edu-work' offset={0}
           className={menu==='edu-work'? 'active':''}
           onClick={()=>setMenu('edu-work')}>
          <p>Education & Work</p>
          </AnchorLink>
        </li>
      </ul>
      <div className='nav-con'><AnchorLink className='anchor-link' offset={10} href='#contact'>Hire me</AnchorLink></div>
    </div>
  )
}

export default Navbar