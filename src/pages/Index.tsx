import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, Code2, Server, Database, Cloud } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Nest.js", "Express.js", "REST APIs", "GraphQL"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    cloud: ["AWS EC2", "AWS Lambda", "AWS RDS", "AWS S3", "Docker", "Kubernetes", "Git", "Vercel", "Postman"]
  };

  const projects = [
    {
      title: "LeadHopper CRM",
      description: "Full-stack CRM platform to manage leads, roles, appointments, and feedback with role-based authentication and Google integrations.",
      tech: ["React.js", "Node.js", "Express", "PostgreSQL"],
      demo: "https://leadhooper.com",
      github: "#",
      featured: true
    },
    {
      title: "Pharmacy E-commerce Platform",
      description: "Medicine platform with prescription refill system, cart recovery, and PharmacyWire API integration.",
      tech: ["Next.js", "Sanity CMS", "React"],
      demo: "https://polarbearmeds.vercel.app",
      github: "#",
      featured: true
    },
    {
      title: "NovaGems Marketplace",
      description: "Marketplace with payment processing, user/product/order management using microservices architecture.",
      tech: ["Nest.js", "Docker", "AWS", "React"],
      demo: "https://novagems.com",
      github: "#",
      featured: true
    }
  ];

  const experience = [
    {
      title: "MERN Stack Developer",
      company: "Rankingeek Marketing Agency",
      period: "Nov 2024 – Present",
      description: "Building dashboards, CMS-driven websites, and marketing platforms. Mentoring juniors and leading full-stack delivery."
    },
    {
      title: "Full Stack Developer", 
      company: "Viithisys Technology Pvt Ltd",
      period: "Sep 2022 – Oct 2024",
      description: "Worked on core backend systems and delivered scalable backend solutions for enterprise-level applications."
    }
  ];

  const services = [
    "Backend API Development",
    "Custom CRM and Dashboard Solutions", 
    "Role-Based Authentication & Authorization",
    "Google API Integrations (OAuth, Calendar)",
    "E-commerce Functionality & Payment Gateways",
    "Microservice Architecture & DevOps"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-slate-100 overflow-x-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-float opacity-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-40" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800/50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-transparent bg-tech-gradient bg-clip-text animate-glow">
              SHALU PUNDIR
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm transition-all duration-300 hover:text-blue-400 hover:scale-110 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400 scale-110' : 'text-slate-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Book a call
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50 animate-pulse">
                  • AVAILABLE FOR WORK
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm a<br />
                  <span className="bg-tech-gradient bg-clip-text text-transparent animate-glow">
                    MERN Stack
                  </span><br />
                  developer
                </h1>
                <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                  With 3+ years of experience crafting scalable backend systems, secure APIs, 
                  and real-time web applications for startups and enterprises.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-tech-gradient hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Button>
              </div>

              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/spDev-stack" },
                  { icon: Linkedin, href: "https://linkedin.com/in/shalupundir" },
                  { icon: Mail, href: "mailto:shaluthakur4254@gmail.com" }
                ].map(({ icon: Icon, href }, index) => (
                  <a 
                    key={index}
                    href={href} 
                    className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-tech-gradient rounded-full animate-glow opacity-20"></div>
                <div className="absolute inset-4 bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-700/50">
                  <Code2 className="w-32 h-32 text-blue-400 animate-float" />
                </div>
                <div className="absolute top-10 right-10 w-4 h-4 bg-purple-400 rounded-full animate-float opacity-60"></div>
                <div className="absolute bottom-16 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-tech-gradient bg-clip-text">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm passionate about building scalable backend systems and crafting intuitive user experiences. 
                With expertise in the MERN stack, I specialize in server-side architecture, secure API development, 
                and real-time applications.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">Education</h3>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold">B.Tech in Computer Science & Technology</h4>
                  <p className="text-slate-400">A.P.J. Abdul Kalam Technical University (2019–2023)</p>
                  <p className="text-slate-400">Shri Ram Group of College, Muzaffarnagar</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-400">Certifications & Awards</h3>
              <div className="space-y-4">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold">Certified Full Stack Developer</h4>
                  <p className="text-slate-400">Masai School</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold">"Engineering Excellence" Award</h4>
                  <p className="text-slate-400">RankingGeek Marketing Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-tech-gradient bg-clip-text">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", icon: Code2, color: "blue", skills: skills.frontend },
              { title: "Backend", icon: Server, color: "purple", skills: skills.backend },
              { title: "Database", icon: Database, color: "green", skills: skills.database },
              { title: "Cloud & Tools", icon: Cloud, color: "cyan", skills: skills.cloud }
            ].map(({ title, icon: Icon, color, skills: skillList }, index) => (
              <Card 
                key={title}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="text-center pb-4">
                  <Icon className={`w-12 h-12 text-${color}-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                  <CardTitle className={`text-${color}-400 group-hover:text-${color}-300 transition-colors duration-300`}>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="text-xs border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105"
                        style={{animationDelay: `${skillIndex * 0.05}s`}}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-tech-gradient bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader>
                  <CardTitle className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:scale-105 transition-transform duration-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" asChild className="hover:scale-105 transition-transform duration-200">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild className="hover:scale-105 transition-transform duration-200">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-tech-gradient bg-clip-text">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-blue-400">{exp.title}</CardTitle>
                      <CardDescription className="text-lg text-slate-300 mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-slate-400">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-tech-gradient bg-clip-text">
            Services Offered
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {service}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-tech-gradient bg-clip-text">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-400 mb-12 animate-fade-in-up">
            Ready to bring your project to life? Let's discuss how I can help you build something amazing.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Mail, href: "mailto:shaluthakur4254@gmail.com", label: "Email", color: "blue" },
              { icon: Phone, href: "tel:+918755373668", label: "Phone", color: "green" },
              { icon: Linkedin, href: "https://linkedin.com/in/shalupundir", label: "LinkedIn", color: "blue" },
              { icon: Github, href: "https://github.com/spDev-stack", label: "GitHub", color: "slate" }
            ].map(({ icon: Icon, href, label, color }, index) => (
              <a 
                key={label}
                href={href} 
                className="flex items-center justify-center space-x-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-slate-700/50 hover:border-blue-500/50 group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Icon className={`w-5 h-5 text-${color}-400 group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm group-hover:text-blue-300 transition-colors duration-300">{label}</span>
              </a>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-tech-gradient hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 animate-fade-in-up"
          >
            Book a call
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-8 px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Shalu Pundir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
