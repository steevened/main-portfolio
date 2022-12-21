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
import Hero from './components/Hero'

function App() {
  const [isToggle, setIsToggle] = useState(false)

  const handleTogle = () => {
    setIsToggle(!isToggle)
  }

  // console.log(isToggle)

  return (
    <div className='h-full min-h-screen bg-slate-600'>
      <Header isToggle={isToggle} handleTogle={handleTogle} />
      <Hero setIsToggle={setIsToggle} />
    </div>
  )
}

export default App
