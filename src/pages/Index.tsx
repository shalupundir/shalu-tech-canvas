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

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'https://ik.imagekit.io/rmlbayysp/1749109197411-WhatsApp_Image_2025-06-05_at_1.04.23_PM_3kYvu9IRg.jpeg';
    link.download = 'Shalu_Pundir_Resume.jpg';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Pharmacy E-commerce Platform",
      description: "Medicine platform with prescription refill system, cart recovery, and PharmacyWire API integration.",
      tech: ["Next.js", "Sanity CMS", "React"],
      demo: "https://polarbearmeds.vercel.app",
      github: "#",
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "NovaGems Marketplace",
      description: "Marketplace with payment processing, user/product/order management using microservices architecture.",
      tech: ["Nest.js", "Docker", "AWS", "React"],
      demo: "https://novagems.com",
      github: "#",
      featured: true,
      color: "from-emerald-500 to-teal-500"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shalu Pundir
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </a>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300">
              Book a call
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for work
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Hi, I'm a<br />
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
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
                  onClick={handleResumeDownload}
                  className="bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 rounded-full px-8 transition-all duration-300"
                >
                  Contact Me
                </Button>
              </div>

              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Github, href: "https://github.com/shalupundir", color: "hover:text-gray-900" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/shalupundir/", color: "hover:text-blue-600" },
                  { icon: Mail, href: "mailto:shaluthakur4254@gmail.com", color: "hover:text-purple-600" }
                ].map(({ icon: Icon, href, color }, index) => (
                  <a 
                    key={index}
                    href={href} 
                    className={`text-gray-600 ${color} transition-all duration-300 hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-3xl transform rotate-6 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                  <img 
                    src="https://ik.imagekit.io/rmlbayysp/1749109197411-WhatsApp_Image_2025-06-05_at_1.04.23_PM_3kYvu9IRg.jpeg"
                    alt="Shalu Pundir"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl p-4 shadow-xl border-2 border-white">
                  <div className="text-sm font-semibold">3+ Years</div>
                  <div className="text-xs opacity-90">Experience</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-4 shadow-xl border-2 border-white">
                  <div className="text-sm font-semibold">15+ Projects</div>
                  <div className="text-xs opacity-90">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-50/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
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
                <div className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-gray-900">B.Tech in Computer Science & Technology</h4>
                  <p className="text-gray-600 mt-1">A.P.J. Abdul Kalam Technical University (2019–2023)</p>
                  <p className="text-gray-600">Shri Ram Group of College, Muzaffarnagar</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Certifications & Awards</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-white to-purple-50 p-6 rounded-2xl shadow-sm border border-purple-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-gray-900">Certified Full Stack Developer</h4>
                  <p className="text-gray-600 mt-1">Masai School</p>
                </div>
                <div className="bg-gradient-to-r from-white to-emerald-50 p-6 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-gray-900">"Engineering Excellence" Award</h4>
                  <p className="text-gray-600 mt-1">RankingGeek Marketing Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600">
              Technologies I work with on a daily basis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", icon: Code2, gradient: "from-cyan-500 to-blue-500", skills: skills.frontend },
              { title: "Backend", icon: Server, gradient: "from-purple-500 to-pink-500", skills: skills.backend },
              { title: "Database", icon: Database, gradient: "from-emerald-500 to-teal-500", skills: skills.database },
              { title: "Cloud & Tools", icon: Cloud, gradient: "from-orange-500 to-red-500", skills: skills.cloud }
            ].map(({ title, icon: Icon, gradient, skills: skillList }, index) => (
              <Card 
                key={title}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
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
                        className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 hover:from-purple-100 hover:to-pink-100 hover:text-pink-700 transition-all duration-200 border border-purple-200"
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
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
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
                className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:scale-105 group overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border border-indigo-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-2">
                    <Button size="sm" variant="outline" asChild className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 transition-all duration-300">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild className="hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-300">
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
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
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
                className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl cursor-pointer group text-center p-8 hover:scale-105 overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <h3 className="font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-lg relative z-10">
                  {service}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to bring your project to life? Let's discuss how I can help you build something amazing.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Mail, href: "mailto:shaluthakur4254@gmail.com", label: "Email", gradient: "from-red-500 to-pink-500" },
              { icon: Phone, href: "tel:+918755373668", label: "Phone", gradient: "from-green-500 to-emerald-500" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shalupundir/", label: "LinkedIn", gradient: "from-blue-500 to-cyan-500" },
              { icon: Github, href: "https://github.com/shalupundir", label: "GitHub", gradient: "from-gray-700 to-gray-900" }
            ].map(({ icon: Icon, href, label, gradient }, index) => (
              <a 
                key={label}
                href={href} 
                className="flex items-center justify-center space-x-3 p-6 bg-white/90 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-300 group hover:scale-105"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{label}</span>
              </a>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book a call
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6 bg-gradient-to-r from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Shalu Pundir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
