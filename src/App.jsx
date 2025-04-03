import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Introduction from './components/Intro/Introduction'
import About from './components/About/About'
import Service from './components/Service/Service'
import Project from './components/Project/Project'
import Edu_Exp from './components/Education_Work/Education_Work'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
const App= () => {

  return (
    <>
     <Navbar/>
     <Profile/>
     <Introduction />
     <About/>
     <Service />
     <Project />
     <Edu_Exp />
     <Contact />
     <Footer/>
    </>
  )
}

export default App
