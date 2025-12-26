import '../../src/App.css'
import '../../src/index.css'

import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navStyle = {
    background: isScrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
    transition: 'all 0.3s ease',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    padding: '15px 0',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 25px',
  }

  const logoStyle = {
    color: '#64ffda',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontFamily: 'monospace',
  }

  const navLinkStyle = {
    color: '#8892b0',
    textDecoration: 'none',
    fontSize: '13px',
    transition: 'all 0.3s ease',
    padding: '10px',
  }

  const numberStyle = {
    color: '#64ffda',
    marginRight: '5px',
    fontSize: '12px',
    fontFamily: 'monospace',
  }

  const resumeButtonStyle = {
    color: '#64ffda',
    background: 'transparent',
    border: '1px solid #64ffda',
    borderRadius: '4px',
    padding: '10px 16px',
    fontSize: '13px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    marginLeft: '15px',
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header style={navStyle}>
      <nav style={containerStyle}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Logo */}
          <a 
            href="#" 
            style={logoStyle}
            className="hover:text-[#64ffda]/80"
          >
            
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                style={navLinkStyle}
                className="hover:text-[#64ffda] relative group"
              >
                <span style={numberStyle}>{`0${idx + 1}.`}</span>
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"/>
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1eHgQhrHl09_q36MLzMva2HN5d7Qwvaco/view?usp=sharing"
              style={resumeButtonStyle}
              className="hover:bg-[#64ffda]/10 hover:translate-y-[-2px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#8892b0] hover:text-[#64ffda] transition-colors"
            style={{ border: 'none', background: 'none' }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            maxHeight: isMenuOpen ? '300px' : '0',
            opacity: isMenuOpen ? '1' : '0',
            overflow: 'hidden',
            transition: 'all 0.3s ease-in-out',
            background: 'rgba(10, 25, 47, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '4px',
            marginTop: '10px',
          }}
        >
          <div style={{ padding: isMenuOpen ? '20px' : '0' }}>
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  ...navLinkStyle,
                  display: 'block',
                  padding: '10px',
                  marginBottom: '5px',
                }}
                className="hover:text-[#64ffda] hover:bg-[#64ffda]/5"
                onClick={() => setIsMenuOpen(false)}
              >
                <span style={numberStyle}>{`0${idx + 1}.`}</span>
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              style={{
                ...resumeButtonStyle,
                display: 'inline-block',
                margin: '10px 0 0 0',
              }}
              className="hover:bg-[#64ffda]/10"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
