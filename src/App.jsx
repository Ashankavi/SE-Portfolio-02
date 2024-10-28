import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import { Services } from './components/Services'



function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <Hero/>
        <About/>
        <Skills/>
        <Services/>


      </div>

  )
}

export default App
