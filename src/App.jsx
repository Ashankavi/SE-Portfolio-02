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



function App() {
  const [count, setCount] = useState(0)

  return (

      <div className=' bg-[#101010]'>
        <Hero/>
        <About/>
        <Skills/>
        <Services/>
        <Education/>
        <Certificate/>
        <Project/>
        <Contact/>
        <Footer/>


      </div>

  )
}

export default App
