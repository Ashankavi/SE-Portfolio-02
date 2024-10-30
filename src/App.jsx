import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import { Services } from './components/Services'
import { Education } from './components/Education'
import Certificate from './components/Certificate'
import Project from './components/Project'
import SocialMedia from './components/SocialMedia'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-[#101010]'>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="services"><Services /></div>
      <div id="education"><Education /></div>
      <div id="certificate"><Certificate /></div>
      <div id="project"><Project /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
