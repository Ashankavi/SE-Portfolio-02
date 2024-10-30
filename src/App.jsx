import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import { Services } from './components/Services'
import { Education } from './components/Education'
import Certificate from './components/Certificate'
import Project from './components/Project'



function App() {
  const [count, setCount] = useState(0)

  return (

      <div className=' bg-[#101010]'>
        <Hero/>
        <About/>
        {/* <Skills/>
        <Services/>
        <Education/>
        <Certificate/>
        <Project/> */}


      </div>

  )
}

export default App
