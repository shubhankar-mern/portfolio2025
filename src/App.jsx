import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css'

function App() {
  // Add smooth scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 20) {
        navbar?.classList?.add('scrolled')
      } else {
        navbar?.classList?.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app" style={{width: '100%', height: '100%'}}>
      <div className="background">
        <div className="blur-circle top"></div>
        <div className="blur-circle bottom"></div>
      </div>
      <div className="particles">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
        }}
      />
    ))}
  </div>
      <Navbar />
      
      <main className="main" style={{width: '100%', height: '100%'}} >
        <div className="container" style={{width: '100%', height: '100%'}}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
