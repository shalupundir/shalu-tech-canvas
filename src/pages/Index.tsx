
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
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">SHALU PUNDIR</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <Button variant="outline" size="sm" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              Book a call
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                  • AVAILABLE FOR WORK
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  Hi, I'm a<br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    MERN Stack
                  </span><br />
                  developer
                </h1>
                <p className="text-lg text-slate-400 max-w-md">
                  With 3+ years of experience crafting scalable backend systems, secure APIs, 
                  and real-time web applications for startups and enterprises.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
                <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  Contact Me
                </Button>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com/spDev-stack" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/shalupundir" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:shaluthakur4254@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-4 bg-slate-800 rounded-full flex items-center justify-center">
                  <Code2 className="w-32 h-32 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
              <CardHeader className="text-center">
                <Code2 className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-blue-400">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="outline" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader className="text-center">
                <Server className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                <CardTitle className="text-purple-400">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="outline" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-green-500 transition-colors">
              <CardHeader className="text-center">
                <Database className="w-12 h-12 text-green-400 mx-auto mb-2" />
                <CardTitle className="text-green-400">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.database.map((skill) => (
                    <Badge key={skill} variant="outline" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-colors">
              <CardHeader className="text-center">
                <Cloud className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                <CardTitle className="text-cyan-400">Cloud & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.cloud.map((skill) => (
                    <Badge key={skill} variant="outline" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-blue-400">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" asChild>
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
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
      <section id="services" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Services Offered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-blue-400 mb-2">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg text-slate-400 mb-12">
            Ready to bring your project to life? Let's discuss how I can help you build something amazing.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a href="mailto:shaluthakur4254@gmail.com" className="flex items-center justify-center space-x-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Email</span>
            </a>
            <a href="tel:+918755373668" className="flex items-center justify-center space-x-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Phone className="w-5 h-5 text-green-400" />
              <span className="text-sm">Phone</span>
            </a>
            <a href="https://linkedin.com/in/shalupundir" className="flex items-center justify-center space-x-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/spDev-stack" className="flex items-center justify-center space-x-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Github className="w-5 h-5 text-slate-400" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Book a call
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Shalu Pundir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
