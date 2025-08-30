import { useState, useEffect, useRef } from 'react'
import '../../src/App.css'
import '../../src/index.css'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef(null)

  const contactInfo = {
    email: "shubhankars361@gmail.com",
    phone: "+91-700XXXXXXXX",
    location: "Bangalore, India",
    linkedin: "https://www.linkedin.com/in/shubhankar27/",
    github: "https://github.com/shubhankar-mern"
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const contactCards = [
    {
      title: "Email",
      icon: "📧",
      content: contactInfo.email,
      action: handleCopyEmail,
      copied: copied
    },
    {
      title: "Location",
      icon: "📍",
      content: contactInfo.location
    },
    {
      title: "Phone",
      icon: "📱",
      content: contactInfo.phone
    }
  ]

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      style={{
        padding: '100px 0',
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'all 0.5s ease-out',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 25px', textAlign: 'center' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#ccd6f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}>
            <span style={{ color: '#64ffda', marginRight: '10px', fontFamily: 'monospace' }}>05.</span>
            Get In Touch
          </h2>

          <h3 style={{
            fontSize: '50px',
            fontWeight: '800',
            color: '#64ffda',
            marginBottom: '20px',
          }}>
            Let's Connect
          </h3>

          <p style={{
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '18px',
            lineHeight: '1.6',
          }}>
            I'm currently open to new opportunities and collaborations. Whether you have a question, 
            project idea, or just want to say hi, I'll do my best to get back to you!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '50px',
        }}>
          {contactCards.map((card, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(17, 34, 64, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                transition: 'all 0.3s ease',
              }}
              className="hover:transform hover:scale-105 hover:border-[#64ffda]/30"
            >
              <div className='animate-bounce' style={{ fontSize: '40px', marginBottom: '15px'}}>{card.icon}</div>
              <h4 style={{ color: '#64ffda', fontSize: '18px', marginBottom: '10px' }}>{card.title}</h4>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '10px',
                color: '#ccd6f6',
              }}>
                {card.content}
                {card.action && (
                  <button
                    onClick={card.action}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#64ffda',
                      padding: '5px',
                    }}
                    className="hover:text-[#64ffda]/80"
                  >
                    {copied ? (
                      <span style={{ fontSize: '20px' }}>✓</span>
                    ) : (
                      <span style={{ fontSize: '20px' }}>📋</span>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div style={{ marginBottom: '60px' }}>
          <h4 style={{ 
            color: '#ccd6f6', 
            fontSize: '20px', 
            marginBottom: '20px',
            fontWeight: '600',
          }}>
            Connect on Social Media
          </h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
            {[
              { icon: "💼", link: contactInfo.linkedin, label: "LinkedIn" },
              { icon: "💻", link: contactInfo.github, label: "GitHub" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#8892b0',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  background: 'rgba(100, 255, 218, 0.05)',
                }}
                className="hover:bg-[#64ffda]/10 hover:text-[#64ffda] hover:-translate-y-1"
              >
                <span className='animate-spin' style={{ fontSize: '30px' }}>{social.icon}</span>
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: '60px',
          color: '#8892b0',
          fontSize: '14px',
          opacity: 0.8,
        }}>
          <p>
            Designed & Built with 💚 by Shubhankar Kumar Singh
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
