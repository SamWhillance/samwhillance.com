import { ArrowRight, Code, Database, Github, Laptop, Server } from 'lucide-react'

import ContentContainer from '../components/content_container'
import Image from 'next/image'
import Link from 'next/link'
import PageContainer from '../components/page_container'
import TreeLine from '../components/tree_line'

export default function Home() {
  return (
    <PageContainer>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="relative">
          <ContentContainer>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-sm uppercase tracking-widest text-text-muted">Your next</h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    <span className="gradient-text">Full Stack</span>
                    <br />
                    Developer
                  </h1>
                  <div className="flex items-center space-x-2 mt-2">
                    <Code className="h-5 w-5 text-primary" />
                    <p className="text-lg font-mono text-text-muted">{'<Software Engineer />'}</p>
                  </div>
                </div>
                
                <p className="text-lg text-text-muted">
                  Building modern, scalable web applications with cutting-edge technologies
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/experience" className="btn btn-primary inline-flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="btn btn-outline">
                    Get In Touch
                  </Link>
                </div>
              </div>
              
              <div className="relative flex-1 flex justify-center animate-fade-in delay-300">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse-slow"></div>
                  <div className="relative z-10 flex flex-col pl-4">
                    <TreeLine isFirst>Design</TreeLine>
                    <div className="pl-4">
                      <TreeLine>Develop</TreeLine>
                      <div className="pl-4">
                        <TreeLine>Database</TreeLine>
                        <div className="pl-4">
                          <TreeLine>Debug</TreeLine>
                          <div className="pl-4">
                            <TreeLine>Deploy</TreeLine>
                            <div className="pl-4">
                              <TreeLine>Deliver</TreeLine>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* About Section */}
        <section>
          <ContentContainer>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">
                  <span className="gradient-text">About Me</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 animate-fade-in">
                  <p className="text-lg">
                    As a full-stack web developer, I specialize in creating robust and scalable web applications using modern JavaScript technologies. With extensive expertise in React, Node.js, and the broader JavaScript ecosystem, I bring ideas to life through clean, efficient code and intuitive user interfaces.
                  </p>
                  <p>
                    My technical foundation spans the full development stack, from crafting responsive front-end experiences with HTML5, CSS3, and modern frameworks like Tailwind CSS, to implementing robust back-end solutions using Node.js and various cloud services.
                  </p>
                </div>
                
                <div className="space-y-4 animate-fade-in delay-200">
                  <p>
                    I'm particularly skilled in Microsoft technologies, having developed complex enterprise solutions using Office 365, Dynamics 365 CE, and the Power Platform suite. My experience extends to database design and management, API development, and system integration, ensuring seamless functionality across complex applications.
                  </p>
                  <p>
                    What sets me apart is my commitment to combining technical excellence with strong project management and communication skills. I thrive in collaborative environments, bringing not just technical expertise but also leadership, mentoring capabilities, and a strong dedication to delivering high-quality solutions that exceed client expectations.
                  </p>
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Skills Section */}
        <section>
          <ContentContainer>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">
                  <span className="gradient-text">Core Skills</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 transition-all duration-300 hover:shadow-xl hover:border-primary-light animate-fade-in">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4">
                      <Laptop className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Frontend</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      React & Next.js
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
                
                <div className="glass-card p-6 transition-all duration-300 hover:shadow-xl hover:border-primary-light animate-fade-in delay-200">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-secondary/10 mr-4">
                      <Server className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold">Backend</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-secondary mr-2" />
                      Node.js
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-secondary mr-2" />
                      Express
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-secondary mr-2" />
                      API Development
                    </li>
                  </ul>
                </div>
                
                <div className="glass-card p-6 transition-all duration-300 hover:shadow-xl hover:border-primary-light animate-fade-in delay-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-accent/10 mr-4">
                      <Database className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold">Database</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-accent mr-2" />
                      SQL & NoSQL
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-accent mr-2" />
                      MongoDB
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-accent mr-2" />
                      Data Modeling
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Companies Section */}
        <section>
          <ContentContainer>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">
                  <span className="gradient-text">Companies I've Worked With</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 py-6">
                <div className="glass-card p-4 flex items-center justify-center w-32 h-32 transition-all duration-300 hover:scale-105">
                  <Image src="/wethrift.png" alt="WeThrift" width={80} height={80} className="rounded-lg" />
                </div>
                <div className="glass-card p-4 flex items-center justify-center w-32 h-32 transition-all duration-300 hover:scale-105">
                  <Image src="/mphn.png" alt="Murray PHN" width={80} height={80} />
                </div>
                <div className="glass-card p-4 flex items-center justify-center w-32 h-32 transition-all duration-300 hover:scale-105">
                  <Image src="/ca.png" alt="CA Technologies" width={80} height={80} />
                </div>
              </div>
              
              <div className="text-center">
                <Link href="/experience" className="btn btn-outline inline-flex items-center">
                  View Full Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* CTA Section */}
        <section>
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
            <div className="relative glass-card p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Build Something Amazing?</h2>
                <p className="text-lg text-text-muted">Let's collaborate on your next project and create something extraordinary together.</p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link href="/contact" className="btn btn-primary inline-flex items-center">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <a 
                    href="https://github.com/samwhillance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline inline-flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  )
}
