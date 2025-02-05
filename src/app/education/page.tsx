import ContentContainer from '../../components/content_container'
import Image from 'next/image'
import Link from 'next/link'
import PageContainer from '../../components/page_container'
import TreeLine from '../../components/tree_line'

export default function Home() {

    return (
        <PageContainer>
            <ContentContainer>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col p-8">
                        <Link href="https://www.swinburne.edu.au/" target="_blank" className="w-16">
                            <Image src="/swinburne.png" alt="Swinburne University" width={200} height={0} priority />
                        </Link>
                    </div>
                    <div className="flex flex-col p-8 gap-4 w-full">
                        <div>
                            <h3 className="text-2xl font-bold mb-0">Swinburne University of Technology</h3>
                            <h4 className="text-lg text-white/75">Melbourne</h4>
                            <p className="text-lg text-white/75">2012 – 2016</p>
                        </div>

                        <h3 className="text-xl font-bold">Certifications</h3>

                        <div className="flex flex-col pl-4 bg-black/50 p-4 rounded-lg">
                            <TreeLine isFirst>Bachelor of Computer Science</TreeLine>
                            <div className="pl-4">
                                <TreeLine><span className="text-white/75">Computer Science and Software Engineering</span></TreeLine>
                            </div>

                            <TreeLine isFirst>Bachelor of Arts</TreeLine>
                            <div className="pl-4">
                                <TreeLine><span className="text-white/75">Games and Interactivity</span></TreeLine>
                            </div>
                            <br />
                            <p className="text-white/45"><strong className="mr-2">GPA</strong> 3.118</p>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col p-8 gap-4">
                    <h3 className="text-xl font-bold">Overview</h3>
                    <p className="text-white/75 bg-black/50 p-4 rounded-lg">Students completing this degree will possess a highly desirable combination of skills, enabling them to find work in a variety of positions in the information and communications technology sector. Students receive extensive education in contemporary approaches to the analysis, design and implementation of large-scale systems, along with a sound understanding of the traditional aspects of computer science such as hardware and operating systems.</p>

                    <h3 className="text-xl font-bold">Units</h3>
                    <div className="flex flex-col md:flex-row text-white/75 bg-black/50 p-4 pl-8 rounded-lg">
                        <div className="flex flex-col pr-8">
                            <ul className="list-disc leading-relaxed">
                                <li>Database, Analysis and Design</li>
                                <li>Software Architectures and Design</li>
                                <li>Technical Software Development</li>
                                <li>Object Oriented Programming</li>
                                <li>Software Development Practices</li>
                                <li>Software Deployment and Evolution</li>
                                <li>Web Applications</li>
                                <li>Data Structures and Patterns</li>
                                <li>Interface Design and Development</li>
                                <li>Engineering Mathematics</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <ul className="list-disc leading-relaxed">
                                <li>Artificial Intelligence</li>
                                <li>User Experience Design</li>
                                <li>Start-Up Fundamentals</li>
                                <li>Digital Graphics</li>
                                <li>LAN Principles</li>
                                <li>Digital Video and Audio</li>
                                <li>Pervasive Game Design</li>
                                <li>Physics of Games</li>
                                <li>Principles of Game Design</li>
                                <li>Professional Issues in IT</li>
                                <li>Writing for Interactive Narratives</li>
                                <li>3D Modelling</li>
                                <li>Games Programming</li>
                                <li>Interactive Games Structures</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </ContentContainer>
        </PageContainer >
    )
}
