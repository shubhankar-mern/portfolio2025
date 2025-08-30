import { useEffect, useRef } from 'react'
import '../../src/App.css'
import '../../src/index.css'
import image from '../assets/image.png'
const About = () => {
  const sectionRef = useRef(null)

  const sectionStyle = {
    padding: '100px 0',
    maxWidth: '1000px',
    margin: '0 auto',
  }

  const headingStyle = {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    color: '#ccd6f6',
  }

  const numberStyle = {
    color: '#64ffda',
    fontFamily: 'monospace',
    marginRight: '10px',
    fontSize: '24px',
  }

  const textContainerStyle = {
    fontSize: '16px',
    lineHeight: '1.7',
  }

  const imageContainerStyle = {
    position: 'relative',
    width: '300px',
    height: '300px',
    borderRadius: '4px',
    margin: '20px auto',
  }

  const overlayStyle = {
    position: 'absolute',
    top: '15px',
    left: '15px',
    width: '100%',
    height: '100%',
    border: '2px solid #64ffda',
    borderRadius: '4px',
    zIndex: 1,
    transition: 'all 0.3s ease',
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      style={{
        ...sectionStyle,
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'all 0.5s ease-out',
      }}
    >
      <div style={{ padding: '0 25px' }}>
        <h2 style={headingStyle}>
          <span style={numberStyle}>01.</span>
          About Me
          <div className="w-1/4 h-[1px] bg-[#233554] ml-4 hidden md:block" />
        </h2>
        
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <div className="md:col-span-3" style={textContainerStyle}>
          <p
            className="mb-4 hover:translate-x-1 transition-transform duration-200"
            style={{ textIndent: '20px' }}
  >
          Hello! I'm Shubhankar, a Software Development Engineer with a passion for building exceptional digital experiences. I specialize in developing real-time AI chat systems and optimizing application performance for scalability, handling high-concurrency environments with 99.9% uptime.
</p>

<p
    className="mb-4 hover:translate-x-1 transition-transform duration-200"
style={{ textIndent: '20px' }}
>
My professional journey includes key roles at Playhouse Media, Troopr Labs, Zeeve, and LTIMindtree. This experience has given me a strong foundation in cloud infrastructure, microservices architecture, and cutting-edge technologies like blockchain and AI.
</p>  

            <div className="mt-8">
              <a 
                href="mailto:shubhankars361@gmail.com"
                className="inline-block hover:bg-[#64ffda]/10 hover:-translate-y-1"
                style={{
                  color: '#64ffda',
                  border: '1px solid #64ffda',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div className="md:col-span-2">
            <div style={imageContainerStyle} className="group">
              <div 
                style={overlayStyle} 
                className="group-hover:translate-x-3 group-hover:translate-y-3"
              />
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderRadius: '4px',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
                className="group-hover:bg-transparent transition-colors duration-300"
              >
                <img src={image} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  SK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
