import { useState } from 'react'
import { filterProps, motion } from 'framer-motion'
import './App.css'
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  Contact,
} from './container'
import { Router, Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'

function App() {
  const [isToggle, setIsToggle] = useState(false)

  const handleTogle = () => {
    setIsToggle(!isToggle)
  }

  // console.log(isToggle)

  return (
    <div className='h-full min-h-screen text-slate-300'>
      <Header
        isToggle={isToggle}
        handleTogle={handleTogle}
        setIsToggle={setIsToggle}
      />
      <Hero setIsToggle={setIsToggle} />
      <Work />
    </div>
  )
}

export default App
