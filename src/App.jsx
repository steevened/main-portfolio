import { useEffect, useState } from 'react'
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
import NavbarList from './components/Navbar/NavbarList'

function App() {
  const [isToggle, setIsToggle] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  const [currentScroll, setCurrentScroll] = useState(window.pageYOffset)
  const [isScrollUp, setIsScrollUp] = useState(false)

  const handleTogle = () => {
    setIsToggle(!isToggle)
  }

  useEffect(() => {
    if (isToggle) {
      document.body.classList.add('disable')
    } else {
      document.body.classList.remove('disable')
    }
  }, [isToggle])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setCurrentScroll(window.pageYOffset)
    })

    if (currentScroll <= 0) {
      setIsScrollUp(false)
    }
    if (currentScroll > lastScroll && !isScrollUp) {
      setIsScrollUp(true)
    }
    if (currentScroll < lastScroll && isScrollUp) {
      setIsScrollUp(false)
    }

    setLastScroll(currentScroll)
  }, [currentScroll])

  // console.log(isScrollUp)

  return (
    <div
      className={`h-full min-h-screen text-slate-300  relative ${
        isToggle ? 'overflow-hidden ' : ''
      }`}
    >
      <Header
        isToggle={isToggle}
        handleTogle={handleTogle}
        setIsToggle={setIsToggle}
        isScrollUp={isScrollUp}
      />
      <NavbarList isToggle={isToggle} handleTogle={handleTogle} />
      <div
        onClick={() => setIsToggle(false)}
        className={`absolute inset-0 transition-all duration-500 z-10 ${
          isToggle ? 'bg-black/50 backdrop-blur-sm z-20' : 'opacity-0 -z-10'
        }`}
      ></div>

      <Hero setIsToggle={setIsToggle} />
      <Work />
    </div>
  )
}

export default App
