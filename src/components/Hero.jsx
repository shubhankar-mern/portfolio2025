import '../../src/App.css'
import '../../src/index.css'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center" id="home">
      <div className="max-w-4xl">
        <h1 className="text-secondary text-lg mb-4">Hi, my name is</h1>
        <h2 className="text-5xl sm:text-7xl font-bold mb-2">
          Shubhankar Kumar Singh
        </h2>
        <h3 className="text-4xl sm:text-6xl font-bold text-textSecondary mb-6">
          I build things for the web.
        </h3>
        <p className="text-textSecondary text-lg max-w-2xl mb-8">
          I'm a software development engineer specializing in building exceptional 
          digital experiences.
        </p>
       
      </div>
    </div>
  )
}

export default Hero
