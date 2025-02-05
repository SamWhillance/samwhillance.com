import ContentContainer from '../../components/content_container'
import Image from 'next/image'
import Link from 'next/link'
import PageContainer from '../../components/page_container'
import TreeLine from '../../components/tree_line'

export default function Home() {

    return (
        <PageContainer>
            <ContentContainer>
                <div className="flex flex-row">
                    <div className="flex flex-col p-8">

                        <Link href="https://www.swinburne.edu.au/" target="_blank" className="w-16">
                            <Image src="/swinburne.png" alt="Swinburne University" width={200} height={0} priority />
                        </Link>

                    </div>
                    <div className="flex flex-col p-8 gap-4">

                        <div>
                            <h3 className="text-2xl font-bold mb-0">Swinburne University of Technology</h3>
                            <h4 className="text-lg text-white/65">Melbourne</h4>
                            <p className="text-lg text-white/65">2012 – 2016</p>
                        </div>

                        <h3 className="text-xl font-bold">Double Degree</h3>

                        <div className="flex flex-col pl-4">
                            <TreeLine isFirst>Bachelor of Computer Science</TreeLine>
                            <div className="pl-4">
                                <TreeLine><span className="text-white/65">Computer Science and Software Engineering</span></TreeLine>
                            </div>

                            <TreeLine isFirst>Bachelor of Arts</TreeLine>
                            <div className="pl-4">
                                <TreeLine><span className="text-white/65">Games and Interactivity</span></TreeLine>
                            </div>
                        </div>

                        <p className="text-white/65"><strong className="mr-2">GPA</strong> 3.118</p>

                        <h3 className="text-xl font-bold">Overview</h3>
                        <p className="text-white/65">Students completing this degree will possess a highly desirable combination of skills, enabling them to find work in a variety of positions in the information and communications technology sector. Students receive extensive education in contemporary approaches to the analysis, design and implementation of large-scale systems, along with a sound understanding of the traditional aspects of computer science such as hardware and operating systems.</p>

                        <h3 className="text-xl font-bold">Units</h3>
                        <div className="flex flex-col md:flex-row text-white/65">
                            <div className="flex flex-col pr-8">
                                <ul className="list-disc">
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
                                    <li>Artificial Intelligence</li>
                                    <li>User Experience Design</li>
                                    <li>Start-Up Fundamentals</li>
                                    <li>Digital Graphics</li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <ul className="list-disc">
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

                </div>
            </ContentContainer>
        </PageContainer >
    )
}
