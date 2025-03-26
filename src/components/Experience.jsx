import { useState, useEffect, useRef } from 'react'
import '../../src/App.css'
import '../../src/index.css'

const Experience = () => {
  const [activeJob, setActiveJob] = useState(null)
  const sectionRef = useRef(null)

  const jobs = [
    {
      company: "Troopr Labs",
      title: "Software Development Engineer",
      date: "Nov 2023 - Dec 2024",
      location: "Bangalore, Karnataka",
      color: "#64ffda",
      icon: "🤖",
      tech: ["React", "Node.js", "MongoDB", "LangChain", "WebSocket", "OpenAI"],
      responsibilities: [
        {
          text: "Architected real-time AI chat systems using WebSocket protocol, LangChain, OpenAI embeddings, and MongoDB Atlas Vector Search, ensuring 99.9% uptime and 50ms average response time for 10K+ concurrent users",
          emoji: "🚀"
        },
        {
          text: "Developed scalable data pipelines with Cheerio web scraping and Node.js REST APIs, achieving 90% faster retrieval across 100K documents",
          emoji: "⚡"
        },
        {
          text: "Optimized Node.js backend using Cluster module, PM2, and p-limit, enhancing throughput by 40%",
          emoji: "🔧"
        },
        {
          text: "Led Jira and Salesforce integrations using Atlassian Forge and SFDX CLI, reducing OpenAI costs by 30%",
          emoji: "🔄"
        },
        {
          text: "Improved React.js performance through Code Splitting and Lazy Loading, achieving 40% faster initial loads",
          emoji: "⚡"
        }
      ]
    },
    {
      company: "Zeeve",
      title: "Software Engineer",
      date: "Feb 2022 - Aug 2023",
      location: "Noida, Delhi",
      color: "#64ffda",
      icon: "⛓️",
      tech: ["TypeScript", "Node.js", "PostgreSQL", "React", "Grafana", "Docker"],
      responsibilities: [
        {
          text: "Engineered high-performance TypeScript/Node.js microservices with PostgreSQL and Knex.js, achieving sub-100ms response times",
          emoji: "⚡"
        },
        {
          text: "Designed observability pipelines using Grafana, enhancing system reliability to 99.9%",
          emoji: "📊"
        },
        {
          text: "Engineered scalable event-driven notification system using Firebase Cloud Messaging and Observer pattern",
          emoji: "🔔"
        },
        {
          text: "Created responsive React.js application for blockchain infrastructure, increasing user engagement by 40%",
          emoji: "💻"
        },
        {
          text: "Achieved 75% test coverage with Jest and Mocha while enforcing CI/CD with ESLint and Prettier",
          emoji: "✅"
        }
      ]
    },
    {
      company: "LTIMindtree",
      title: "Cloud Infra Engineer",
      date: "June 2020 - Jan 2022",
      location: "Powai, Mumbai",
      color: "#64ffda",
      icon: "☁️",
      tech: ["Python", "MySQL", "Docker", "AWS", "Linux"],
      responsibilities: [
        {
          text: "Developed Python scripts for server monitoring, increased productivity by 30%",
          emoji: "📈"
        },
        {
          text: "Optimized MySQL queries and maintained 95% customer satisfaction with L1 support",
          emoji: "🎯"
        },
        {
          text: "Hands-on experience with Docker to deploy and manage code",
          emoji: "🐳"
        },
        {
          text: "Created comprehensive documentation reducing issue resolution time by 40%",
          emoji: "📝"
        }
      ]
    }
  ]

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

  return (
    <section ref={sectionRef} id="experience" style={{
      padding: '100px 0',
      maxWidth: '1000px',
      margin: '0 auto',
      opacity: 0,
      transform: 'translateY(20px)',
      transition: 'all 0.5s ease-out',
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
          <span style={{ color: '#64ffda', marginRight: '10px', fontFamily: 'monospace' }}>02.</span>
          Where I've Worked
          <div className="w-1/4 h-[1px] bg-[#233554] ml-4 hidden md:block" />
        </h2>

        <div className="grid gap-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="group"
              style={{
                background: 'rgba(17, 34, 64, 0.7)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Header - Always visible */}
              <div
                onClick={() => setActiveJob(activeJob === idx ? null : idx)}
                style={{
                  padding: '25px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: activeJob === idx ? '1px solid rgba(100, 255, 218, 0.1)' : 'none',
                }}
                className="hover:bg-[#64ffda]/5"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{
                    fontSize: '28px',
                    background: 'rgba(100, 255, 218, 0.1)',
                    padding: '10px',
                    borderRadius: '8px',
                  }}>{job.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#ccd6f6' }}>
                      {job.title} <span style={{ color: '#64ffda' }}>@ {job.company}</span>
                    </h3>
                    <p style={{ color: '#8892b0', fontSize: '14px' }}>
                      {job.date} | {job.location}
                    </p>
                  </div>
                </div>
                <svg
                  style={{
                    width: '20px',
                    height: '20px',
                    transform: activeJob === idx ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                    color: '#64ffda',
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Content - Expandable */}
              <div
                style={{
                  maxHeight: activeJob === idx ? '1000px' : '0',
                  opacity: activeJob === idx ? 1 : 0,
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '25px' }}>
                  {/* Technologies */}
                  <div style={{ marginBottom: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {job.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        style={{
                          padding: '4px 12px',
                          fontSize: '12px',
                          borderRadius: '15px',
                          background: 'rgba(100, 255, 218, 0.1)',
                          color: '#64ffda',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Responsibilities */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {job.responsibilities.map((responsibility, respIdx) => (
                      <li
                        key={respIdx}
                        style={{
                          display: 'flex',
                          gap: '10px',
                          color: '#8892b0',
                          lineHeight: '1.6',
                        }}
                      >
                        <span style={{ 
                          color: '#64ffda', 
                          marginTop: '5px',
                          fontSize: '18px',
                          minWidth: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {responsibility.emoji}
                        </span>
                        <span>{responsibility.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
