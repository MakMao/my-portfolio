import React from 'react'
import About from '../components/About'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
      <Landing/>
      <div id="about-me">
        <About/>  
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default Homepage