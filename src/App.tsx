import { useEffect, useState } from 'react'
import './App.css'
import { 
  Code2, 
  Cloud, 
  Database, 
  GitBranch, 
  Layers, 
  Cpu,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  ChevronRight,
  Award,
  Briefcase,
  GraduationCap,
  Send
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'certifications', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skills = [
    { name: 'C# / .NET Core', level: 95, icon: <Code2 className="w-5 h-5" /> },
    { name: 'ASP.NET MVC', level: 92, icon: <Layers className="w-5 h-5" /> },
    { name: 'Azure Cloud', level: 90, icon: <Cloud className="w-5 h-5" /> },
    { name: 'SQL Server / Azure SQL', level: 88, icon: <Database className="w-5 h-5" /> },
    { name: 'React / Angular', level: 85, icon: <Cpu className="w-5 h-5" /> },
    { name: 'DevOps / CI-CD', level: 87, icon: <GitBranch className="w-5 h-5" /> },
  ]

  const technologies = [
    '.NET Core', 'ASP.NET MVC', 'C#', 'Azure PaaS', 'Azure Functions', 
    'Service Fabric', 'SQL Server', 'Cosmos DB', 'React', 'Angular',
    'TypeScript', 'JavaScript', 'REST APIs', 'OAuth 2.0', 'JWT',
    'Azure DevOps', 'GitHub', 'CI/CD', 'Microservices', 'RabbitMQ',
    'Redis Cache', 'Blob Storage', 'SonarQube', 'Docker', 'Kubernetes'
  ]

  const experiences = [
    {
      title: 'Sr. .NET & Azure Consultant',
      company: 'VCS Solutions',
      location: 'Lahore, Pakistan',
      period: 'Jul 2019 - Present',
      description: 'Leading migration of legacy .NET applications to Azure PaaS, designing microservices architecture, and implementing CI/CD pipelines.',
      achievements: [
        'Reduced deployment time by 40% through Azure DevOps CI/CD',
        'Improved query performance by 30% through SQL optimization',
        'Led cloud migration for multiple enterprise applications'
      ]
    },
    {
      title: 'Sr. .NET Consultant',
      company: 'Qordata',
      location: 'Lahore, Pakistan',
      period: 'Apr 2019 - Jun 2019',
      description: 'Worked with TCO on the Sunkar Team to uplift legacy applications to Azure Cloud (PaaS).',
      achievements: [
        'Migrated VMS, VAMS, APL, CST, and DAST applications',
        'Resolved SonarQube issues reducing technical debt'
      ]
    },
    {
      title: 'Sr. Software Engineer',
      company: 'Wiseman Innovations',
      location: 'Islamabad, Pakistan',
      period: 'Jun 2015 - Mar 2019',
      description: 'Developed enterprise web applications using ASP.NET MVC, Web API, and SQL Server.',
      achievements: [
        'Implemented OAuth2.0 & JWT-based authentication',
        'Delivered products in Agile Scrum environment'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'Zigron Inc.',
      location: 'Islamabad, Pakistan',
      period: 'Aug 2011 - May 2015',
      description: 'Built web applications and APIs using ASP.NET and SQL Server.',
      achievements: [
        'Improved UI/UX with AngularJS and jQuery integrations',
        'Contributed to code reviews and best practices'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Microsoft Certified Solutions Developer (MCSD)',
      details: '70-483, 70-486, 70-487',
      status: 'Active'
    },
    {
      name: 'Microsoft Azure Architect Design',
      details: 'AZ-301',
      status: 'In Progress'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl tracking-tight">
              <span className="text-blue-500">TA</span>hir
            </div>
            <div className="hidden md:flex space-x-1">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'text-blue-400 bg-blue-500/10' 
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              {/* Mobile menu button would go here */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Available for Consulting
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tahir Alvi</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-400 font-light">
                Sr. .NET & Azure Consultant
              </p>
              <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                10+ years of experience designing, developing, and deploying enterprise applications 
                on .NET Core, Azure Cloud, and SQL Server. Specializing in cloud migrations, 
                microservices, and AI-assisted development.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6"
                >
                  Get in Touch
                  <Send className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('experience')}
                  className="border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  View Experience
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:engtahiralvi@gmail.com" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                <img 
                  src="/profile.jpg" 
                  alt="Tahir Alvi" 
                  className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl border-2 border-slate-700 shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-xl">
                  <div className="text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm a passionate software engineer with over a decade of experience in building 
                enterprise-grade applications. My expertise lies in the Microsoft technology stack, 
                particularly .NET Core and Azure Cloud platforms.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I specialize in cloud-first architecture, helping organizations migrate their 
                on-premises workloads to scalable Azure PaaS solutions. I'm also an early adopter 
                of AI-assisted coding tools like GitHub Copilot, Cursor, and ChatGPT to accelerate 
                development and improve code quality.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Based in Lahore, Pakistan, I've worked with clients across various industries, 
                delivering robust, secure, and scalable solutions that drive business value.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-slate-500">Projects</div>
                </div>
                <div className="text-center p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-2xl font-bold text-cyan-400">10+</div>
                  <div className="text-sm text-slate-500">Years</div>
                </div>
                <div className="text-center p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-2xl font-bold text-purple-400">25+</div>
                  <div className="text-sm text-slate-500">Clients</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all">
                  <Cloud className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="font-semibold mb-2">Cloud Architecture</h3>
                  <p className="text-sm text-slate-400">Azure PaaS, SaaS, microservices design</p>
                </div>
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all">
                  <Database className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">Database Design</h3>
                  <p className="text-sm text-slate-400">SQL Server, Azure SQL, Cosmos DB</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-purple-500/50 transition-all">
                  <Code2 className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="font-semibold mb-2">Full Stack Dev</h3>
                  <p className="text-sm text-slate-400">.NET Core, React, Angular</p>
                </div>
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-green-500/50 transition-all">
                  <GitBranch className="w-10 h-10 text-green-400 mb-4" />
                  <h3 className="font-semibold mb-2">DevOps</h3>
                  <p className="text-sm text-slate-400">CI/CD, Azure DevOps, Docker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit built over 10+ years of enterprise development
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skill Bars */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                Core Competencies
              </h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-slate-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Technology Tags */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 bg-slate-800 text-slate-300 hover:bg-blue-500/20 hover:text-blue-300 transition-all cursor-default border border-slate-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  AI-Assisted Development
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I leverage cutting-edge AI tools like GitHub Copilot, Cursor, and ChatGPT 
                  to accelerate development, improve code quality, and enhance team productivity. 
                  This modern approach helps deliver features faster while maintaining clean, 
                  maintainable codebases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              A journey of growth and innovation across enterprise development
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-all">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-100">{exp.title}</h3>
                          <p className="text-blue-400">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-sm">
                        {exp.period}
                      </div>
                      <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              Professional certifications validating my expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-100 mb-1">{cert.name}</h3>
                      <p className="text-slate-400 text-sm mb-2">{cert.details}</p>
                      <Badge 
                        variant={cert.status === 'Active' ? 'default' : 'secondary'}
                        className={cert.status === 'Active' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-amber-500/20 text-amber-400 border-amber-500/30'}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-400 text-sm">
              <GraduationCap className="w-4 h-4" />
              BS in Computer Science - University of Agriculture, Faisalabad (2008)
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              Let's discuss how I can help with your next project
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a href="mailto:engtahiralvi@gmail.com" className="text-slate-200 hover:text-blue-400 transition-colors">
                      engtahiralvi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <a href="tel:+923336523898" className="text-slate-200 hover:text-cyan-400 transition-colors">
                      +92 333 6523898
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-slate-200">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-slate-700"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all border border-slate-700"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-slate-400">Name</label>
                      <input 
                        type="text" 
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-slate-400">Email</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Project inquiry"
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl">
                <span className="text-blue-500">TA</span>hir
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 text-sm">.NET & Azure Consultant</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 Tahir Alvi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
