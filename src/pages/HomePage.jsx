import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Resume from '../components/Resume'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Project from '../components/Project'

function HomePage() {
  return (
    <div className='bg-[#141414]'>
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <Skills />
      <Resume />
      <Services />
      <Project />
      <Contact />
    </div>
  )
}

export default HomePage