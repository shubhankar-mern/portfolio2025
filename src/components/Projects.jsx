import { useEffect, useRef } from 'react'

const Projects = () => {
  const sectionRef = useRef(null)

  const projects = [
    {
      title: "UIUXJobshub",
      description: "A specialized job board platform for UI/UX designers, product designers, and UX researchers. Connecting creative talent with innovative companies.",
      link: "https://uiuxjobshub.com",
      image: "/images/uiuxjobs.png", // Add your project screenshot
      emoji: "🎨",
      tech: [
        { name: "React", icon: "⚛️" },
        { name: "Cloudflare Pages", icon: "☁️" },
        { name: "Cloudflare D1", icon: "🗄️" },
        { name: "Workers", icon: "👷" },
        { name: "Hono.js", icon: "⚡" }
      ],
      features: [
        "Specialized job posting platform for design roles",
        "Serverless architecture with Cloudflare Workers",
        "High-performance database with D1",
        "Modern UI with responsive design",
        "Seamless deployment with Cloudflare Pages"
      ]
    },
    {
      title: "CarouselPost",
      description: "AI-powered tool for creating engaging LinkedIn carousels. Transform your content into visually appealing presentations with ease.",
      link: "https://carouselpost.in",
      image: "/images/carousel.png", // Add your project screenshot
      emoji: "🎯",
      tech: [
        { name: "React", icon: "⚛️" },
        { name: "Firebase", icon: "🔥" },
        { name: "Cloud Functions", icon: "⚡" },
        { name: "Firestore", icon: "🗄️" },
        { name: "Cloudflare Pages", icon: "☁️" }
      ],
      features: [
        "AI-powered content generation",
        "Real-time preview and editing",
        "Secure authentication with Firebase",
        "Serverless backend with Cloud Functions",
        "Scalable data storage with Firestore"
      ]
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

    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" style={{
      padding: '100px 0',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{ padding: '0 25px' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          marginBottom: '40px',
          color: '#ccd6f6',
          display: 'flex',
          alignItems: 'center',
        }}>
          <span style={{ color: '#64ffda', marginRight: '10px', fontFamily: 'monospace' }}>04.</span>
          Featured Projects
          <div className="w-1/4 h-[1px] bg-[#233554] ml-4 hidden md:block" />
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.5s ease',
                transitionDelay: `${idx * 200}ms`,
              }}
            >
              <div style={{
                background: 'rgba(17, 34, 64, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                overflow: 'hidden',
              }}>
                {/* Project Header */}
                <div style={{
                  padding: '25px',
                  borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <span style={{ fontSize: '40px' }}>{project.emoji}</span>
                    <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#64ffda' }}>
                      {project.title}
                    </h3>
                  </div>
                  <p style={{ color: '#8892b0', lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                </div>

                {/* Live Preview Section */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '400px',
                  background: '#0a192f',
                  borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
                }}>
                  {/* Preview Header */}
                  <div style={{
                    padding: '8px 16px',
                    background: 'rgba(100, 255, 218, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#ff5f56',
                      }}/>
                      <span style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#ffbd2e',
                      }}/>
                      <span style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#27c93f',
                      }}/>
                    </div>
                    <span style={{ color: '#8892b0', fontSize: '14px' }}>
                      {project.link}
                    </span>
                  </div>

                  {/* iframe Container */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: 'calc(100% - 36px)', // Subtract header height
                    overflow: 'hidden',
                  }}>
                    <iframe
                      src={project.link}
                      title={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        transform: 'scale(0.95)', // Slightly scaled down for better fit
                        transformOrigin: 'top center',
                      }}
                    />
                    
                    {/* Overlay for iframe interaction control */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'transparent',
                        cursor: 'pointer',
                      }}
                      onClick={() => window.open(project.link, '_blank')}
                      className="hover:bg-black/10 transition-colors duration-300"
                    >
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'rgba(100, 255, 218, 0.1)',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        backdropFilter: 'blur(4px)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                      className="group-hover:opacity-100"
                      >
                        <span style={{ color: '#64ffda' }}>Click to visit site ↗️</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '25px' }}>
                  {/* Technologies */}
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ color: '#ccd6f6', marginBottom: '10px', fontSize: '18px' }}>
                      Technologies Used
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.tech.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          style={{
                            background: 'rgba(100, 255, 218, 0.1)',
                            color: '#64ffda',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                          className="hover:bg-[#64ffda]/20"
                        >
                          {tech.icon} {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ color: '#ccd6f6', marginBottom: '10px', fontSize: '18px' }}>
                      Key Features
                    </h4>
                    <ul style={{ color: '#8892b0', display: 'grid', gap: '8px' }}>
                      {project.features.map((feature, featureIdx) => (
                        <li
                          key={featureIdx}
                          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                          <span style={{ color: '#64ffda' }}>▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#64ffda',
                      textDecoration: 'none',
                      padding: '10px 20px',
                      borderRadius: '4px',
                      border: '1px solid #64ffda',
                      transition: 'all 0.3s ease',
                    }}
                    className="hover:bg-[#64ffda]/10"
                  >
                    Visit Project <span>🔗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects