
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, Code2, Server, Database, Cloud, MapPin, Calendar } from "lucide-react";

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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              Shalu Pundir
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
              Book a call
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for work
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Hi, I'm a<br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MERN Stack
                  </span><br />
                  developer
                </h1>
                
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  I have 3+ years of experience working on backend systems and scalable 
                  web applications together with startups and established companies.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-8"
                >
                  <Download className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8"
                >
                  Contact Me
                </Button>
              </div>

              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Github, href: "https://github.com/spDev-stack" },
                  { icon: Linkedin, href: "https://linkedin.com/in/shalupundir" },
                  { icon: Mail, href: "mailto:shaluthakur4254@gmail.com" }
                ].map(({ icon: Icon, href }, index) => (
                  <a 
                    key={index}
                    href={href} 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-6"></div>
                <div className="relative w-full h-full bg-gray-100 rounded-3xl flex items-center justify-center border">
                  <Code2 className="w-32 h-32 text-gray-400" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border">
                  <div className="text-sm font-semibold text-gray-900">3+ Years</div>
                  <div className="text-xs text-gray-600">Experience</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border">
                  <div className="text-sm font-semibold text-gray-900">15+ Projects</div>
                  <div className="text-xs text-gray-600">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about building scalable backend systems and crafting intuitive user experiences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm passionate about building scalable backend systems and crafting intuitive user experiences. 
                With expertise in the MERN stack, I specialize in server-side architecture, secure API development, 
                and real-time applications.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                  <h4 className="font-semibold text-gray-900">B.Tech in Computer Science & Technology</h4>
                  <p className="text-gray-600 mt-1">A.P.J. Abdul Kalam Technical University (2019–2023)</p>
                  <p className="text-gray-600">Shri Ram Group of College, Muzaffarnagar</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Certifications & Awards</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                  <h4 className="font-semibold text-gray-900">Certified Full Stack Developer</h4>
                  <p className="text-gray-600 mt-1">Masai School</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                  <h4 className="font-semibold text-gray-900">"Engineering Excellence" Award</h4>
                  <p className="text-gray-600 mt-1">RankingGeek Marketing Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600">
              Technologies I work with on a daily basis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", icon: Code2, color: "blue", skills: skills.frontend },
              { title: "Backend", icon: Server, color: "purple", skills: skills.backend },
              { title: "Database", icon: Database, color: "green", skills: skills.database },
              { title: "Cloud & Tools", icon: Cloud, color: "cyan", skills: skills.cloud }
            ].map(({ title, icon: Icon, color, skills: skillList }, index) => (
              <Card 
                key={title}
                className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-${color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 text-${color}-600`} />
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
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
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Some of the projects I've worked on recently
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-2">
                    <Button size="sm" variant="outline" asChild className="hover:bg-gray-50">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-gray-600">
              My professional journey so far
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-700 mt-1 font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-gray-600 border-gray-300">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Services Offered
            </h2>
            <p className="text-xl text-gray-600">
              How I can help you build your next project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg cursor-pointer group text-center p-8"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-lg">
                  {service}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to bring your project to life? Let's discuss how I can help you build something amazing.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Mail, href: "mailto:shaluthakur4254@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+918755373668", label: "Phone" },
              { icon: Linkedin, href: "https://linkedin.com/in/shalupundir", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/spDev-stack", label: "GitHub" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a 
                key={label}
                href={href} 
                className="flex items-center justify-center space-x-3 p-6 bg-white rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-gray-300 group"
              >
                <Icon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
                <span className="text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">{label}</span>
              </a>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 rounded-full px-8"
          >
            Book a call
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Shalu Pundir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
