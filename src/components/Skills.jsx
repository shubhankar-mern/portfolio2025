import { useEffect } from 'react'
import '../../src/App.css'
import '../../src/index.css'

const Skills = () => {
//  const sectionRef = useRef(null)

  const skillCategories = [
    {
      title: "Languages",
      icon: "👨‍💻",
      skills: [
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "SQL", icon: "🗃️" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "Shell Scripting", icon: "📜" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "🛠️",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Node.js", icon: "💚" },
        { name: "Express.js", icon: "🚂" },
        { name: "Redux Toolkit", icon: "🔄" },
        { name: "Ant Design", icon: "🐜" },
        { name: "Socket.io", icon: "🔌" },
        { name: "Knex.js", icon: "🔗" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Bootstrap", icon: "🅱️" }
      ]
    },
    {
      title: "Testing & Tools",
      icon: "🧪",
      skills: [
        { name: "Jest", icon: "🃏" },
        { name: "Mocha", icon: "☕" },
        { name: "Chai", icon: "🫖" },
        { name: "ESLint", icon: "✨" },
        { name: "Prettier", icon: "🎀" },
        { name: "Husky", icon: "🐕" },
        { name: "Git", icon: "📚" },
        { name: "VS Code", icon: "📝" },
        { name: "GitLab CI", icon: "🦊" },
        { name: "Grafana", icon: "📊" },
        { name: "Sentry", icon: "🦅" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS (SES, S3, EC2, Lambda)", icon: "📦" },
        { name: "Firebase", icon: "🔥" },
        { name: "CI/CD Pipelines", icon: "🔄" },
        { name: "Docker", icon: "🐳" },
        { name: "Cloudflare Workers", icon: "⚡" }
      ]
    },
    {
      title: "Databases & Caching",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
        { name: "Redis", icon: "🔴" },
        { name: "Elasticsearch", icon: "🔍" }
      ]
    },
    {
      title: "AI & Data Technologies",
      icon: "🤖",
      skills: [
        { name: "LangChain", icon: "🔗" },
        { name: "OpenAI", icon: "🧠" },
        { name: "Azure OpenAI", icon: "☁️" },
        { name: "Pinecone", icon: "🌲" },
        { name: "Vector Embeddings", icon: "📊" }
      ]
    },
    {
      title: "Platforms & Protocols",
      icon: "🌐",
      skills: [
        { name: "Atlassian Forge", icon: "⚒️" },
        { name: "SFDX CLI", icon: "⚡" },
        { name: "OAuth2", icon: "🔐" },
        { name: "JWT", icon: "🎟️" },
        { name: "WebSocket", icon: "🔌" },
        { name: "REST APIs", icon: "📡" },
        { name: "GraphQL", icon: "📊" }
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

    const cards = document.querySelectorAll('.skill-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" style={{
      padding: '100px 0',
      maxWidth: '1000px',
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
          <span style={{ color: '#64ffda', marginRight: '10px', fontFamily: 'monospace' }}>03.</span>
          Skills & Technologies
          <div className="w-1/4 h-[1px] bg-[#233554] ml-4 hidden md:block" />
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="skill-card"
              style={{
                background: 'rgba(17, 34, 64, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '25px',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.3s ease',
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                gap: '10px',
              }}>
                <span style={{ fontSize: '24px' }}>{category.icon}</span>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#64ffda',
                }}>
                  {category.title}
                </h3>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    style={{
                      background: 'rgba(100, 255, 218, 0.1)',
                      color: '#64ffda',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.3s ease',
                    }}
                    className="hover:bg-[#64ffda]/20 hover:-translate-y-1"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{
          marginTop: '40px',
          padding: '25px',
          borderRadius: '12px',
          background: 'rgba(100, 255, 218, 0.05)',
          color: '#8892b0',
          lineHeight: '1.6',
        }}>
          <p style={{ marginBottom: '15px' }}>
            <span style={{ marginRight: '8px' }}>🚀</span>
            My technical expertise spans across modern web development, cloud computing, 
            and AI integration. I specialize in building scalable applications with a 
            focus on performance optimization and clean code practices.
          </p>
          <p>
            <span style={{ marginRight: '8px' }}>📚</span>
            I maintain a continuous learning approach, regularly updating my skill set 
            with emerging technologies and best practices in software development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
