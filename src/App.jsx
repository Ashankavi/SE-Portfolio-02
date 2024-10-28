import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'



function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <Hero/>
        <About/>
        <Skills/>


      </div>

  )
}

export default App
