import { Award, BookOpen, Building, GraduationCap } from 'lucide-react'

import ContentContainer from '../../components/content_container'
import Image from 'next/image'
import Link from 'next/link'
import PageContainer from '../../components/page_container'

export default function Education() {
    return (
        <PageContainer>
            <div className="space-y-12">
                <section>
                    <ContentContainer>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold">
                                    <span className="gradient-text">Education</span>
                                </h1>
                                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                                <p className="text-text-muted max-w-2xl">
                                    My academic journey and qualifications in Computer Science and Arts.
                                </p>
                            </div>

                            <div className="glass-card p-8 animate-fade-in">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                                        <Link 
                                            href="https://www.swinburne.edu.au/" 
                                            target="_blank" 
                                            className="w-32 h-32 relative glass-card p-4 hover:scale-105 transition-transform duration-300"
                                        >
                                            <Image 
                                                src="/swinburne.png" 
                                                alt="Swinburne University" 
                                                fill
                                                className="object-contain p-2"
                                                priority 
                                            />
                                        </Link>
                                    </div>

                                    <div className="flex-grow space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Building className="w-6 h-6 text-primary" />
                                                <h2 className="text-2xl font-bold">Swinburne University of Technology</h2>
                                            </div>
                                            <div className="text-text-muted space-y-1">
                                                <p className="flex items-center gap-2">
                                                    <span className="font-medium">Location:</span> Melbourne
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <span className="font-medium">Period:</span> 2012 – 2016
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <Award className="w-6 h-6 text-secondary" />
                                                <h3 className="text-xl font-bold">Certifications</h3>
                                            </div>
                                            
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="glass-card p-4 space-y-2">
                                                    <h4 className="font-semibold text-lg">Bachelor of Computer Science</h4>
                                                    <p className="text-text-muted">Computer Science and Software Engineering</p>
                                                </div>
                                                <div className="glass-card p-4 space-y-2">
                                                    <h4 className="font-semibold text-lg">Bachelor of Arts</h4>
                                                    <p className="text-text-muted">Games and Interactivity</p>
                                                </div>
                                            </div>

                                            <div className="glass-card p-4 inline-block">
                                                <p className="text-text-muted">
                                                    <span className="font-medium mr-2">GPA:</span>
                                                    <span className="text-primary">3.118</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 animate-fade-in delay-100">
                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                    <h3 className="text-xl font-bold">Overview</h3>
                                </div>
                                <div className="glass-card p-6">
                                    <p className="text-text-muted leading-relaxed">
                                        Students completing this degree will possess a highly desirable combination of skills, enabling them to find work in a variety of positions in the information and communications technology sector. Students receive extensive education in contemporary approaches to the analysis, design and implementation of large-scale systems, along with a sound understanding of the traditional aspects of computer science such as hardware and operating systems.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 animate-fade-in delay-200">
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="w-6 h-6 text-secondary" />
                                    <h3 className="text-xl font-bold">Units</h3>
                                </div>
                                <div className="glass-card p-6">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-lg text-primary">Computer Science</h4>
                                            <ul className="space-y-2 text-text-muted">
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Database, Analysis and Design
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Software Architectures and Design
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Technical Software Development
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Object Oriented Programming
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Software Development Practices
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Software Deployment and Evolution
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Web Applications
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Data Structures and Patterns
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Interface Design and Development
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    Engineering Mathematics
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-lg text-secondary">Games & Interactive Media</h4>
                                            <ul className="space-y-2 text-text-muted">
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Artificial Intelligence
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    User Experience Design
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Start-Up Fundamentals
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Digital Graphics
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    LAN Principles
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Digital Video and Audio
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Pervasive Game Design
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Physics of Games
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Principles of Game Design
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Professional Issues in IT
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Writing for Interactive Narratives
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    3D Modelling
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Games Programming
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                    Interactive Games Structures
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ContentContainer>
                </section>
            </div>
        </PageContainer>
    )
}
