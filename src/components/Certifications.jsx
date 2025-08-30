import { useEffect, useRef } from 'react'
import '../../src/App.css'
import '../../src/index.css'

const Certifications = () => {
  const sectionRef = useRef(null)

  const certifications = [
    {
      title: "Oracle Java Foundations Certification",
      link: "https://drive.google.com/file/d/1T69svtolZ5G2ezlUL7qocflFM22Emn7N/view",
      description: "Foundational certification demonstrating proficiency in Java programming concepts and best practices.",
      icon: "☕" // Java icon
    },
    {
      title: "AWS Business Professional",
      link: "https://drive.google.com/file/d/1XixX6Wwj9iKj5dx2c3EoXf-6r0beo0Bz/view?usp=drive_link",
      description: "Certification validating knowledge of AWS business value and economics.",
      icon: "☁️" // Cloud icon
    },
    {
      title: "AWS Cloud Economics",
      link: "https://drive.google.com/file/d/1ihwZ-yJjTpbQJdOsGNTXPqHDM-TU_wjO/view?usp=drive_link",
      description: "Specialized certification in AWS cloud cost optimization and economic planning.",
      icon: "📊" // Chart icon
    },
    {
      title: "AWS Technical Professional",
      link: "https://drive.google.com/file/d/1eT-dC2N575YjVq1zG7zfr6kL6Z87Z-Km/view?usp=drive_link",
      description: "Technical certification demonstrating expertise in AWS services and architecture.",
      icon: "⚙️" // Gear icon
    },
    {
      title: "IIT Madras - Python Data Structures and Algorithm",
      link: "https://drive.google.com/file/d/1p1LrPb6fLxU8cHpqodZfqiG_oFv2_hkc/view?usp=drive_link",
      description: "Advanced course completion in Python programming with focus on DSA from IIT Madras.",
      icon: "🐍" // Python icon
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.cert-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const sectionStyle = {
    padding: '100px 0',
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }

  const cardStyle = {
    background: 'rgba(17, 34, 64, 0.7)',
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    padding: '25px',
    border: '1px solid rgba(100, 255, 218, 0.1)',
    transition: 'all 0.3s ease',
  }

  return (
    <section ref={sectionRef} id="certifications" style={sectionStyle}>
      <div style={{ padding: '0 25px' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '40px',
            color: '#ccd6f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#64ffda', marginRight: '10px', fontFamily: 'monospace' }}>04.</span>
            Certifications
            <div className="w-1/4 h-[1px] bg-[#233554] ml-4 hidden md:block" />
          </h2>
        </div>

        {/* Certificates Grid */}
        <div style={{ display: 'grid', gap: '20px' }}>
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="cert-card"
              style={{
                ...cardStyle,
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.5s ease',
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ 
                  fontSize: '32px', 
                  lineHeight: '1',
                  background: 'rgba(100, 255, 218, 0.1)',
                  padding: '10px',
                  borderRadius: '8px',
                }}>
                  {cert.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#ccd6f6',
                    marginBottom: '8px',
                  }}>
                    {cert.title}
                  </h3>
                  <p style={{ color: '#8892b0', marginBottom: '15px', lineHeight: '1.6' }}>
                    {cert.description}
                  </p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#64ffda',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    border: '1px solid #64ffda',
                    fontSize: '14px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease',
                  }}
                  className="hover:bg-[#64ffda]/10 hover:-translate-y-1"
                >
                  View Certificate
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M7 17l9.2-9.2M17 17V7H7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div 
          style={{
            marginTop: '40px',
            padding: '20px',
            borderRadius: '8px',
            background: 'rgba(100, 255, 218, 0.05)',
            
            lineHeight: '1.6',
          }}
          className="hover:bg-[#64ffda]/10 transition-colors duration-300"
        >
          <p>
            These certifications showcase my commitment to continuous learning and professional growth. 
            Each certification represents a milestone in my journey of mastering different aspects of 
            software development, cloud computing, and technical expertise.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certifications
