import { Collapse } from '../../components/collapse'
import ContentContainer from '../../components/content_container'
import H3 from '../../components/h3'
import Image from 'next/image'
import Link from 'next/link'
import PageContainer from '../../components/page_container'
import TreeLine from '../../components/tree_line'

export default function Experience() {

    return (
        <PageContainer>
            <ContentContainer>
                <Wethrift />
                <FreelanceWebDeveloper />
                <CrmDeveloper />
                <CaTechnologies />
                <FreelanceGameDeveloper />
                <PianoTeacher />

                <div className="flex flex-col p-8 gap-4">

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

const Listing = function ({ jobTitle, location, years, image, children }: { jobTitle: string, years: string, location: string, image: string, children: React.ReactNode }) {
    return (
        <Collapse image={image} title={jobTitle} line1={years} line2={location}>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col p-8 w-full">
                    <h4 className="text-lg text-white/75 mt-4">{jobTitle}</h4>
                    <p className="text-lg text-white/75 mb-4">{location}</p>
                    {children}
                </div>
            </div>
        </Collapse>
    )
}


const Wethrift = function () {
    return (
        <Listing image="/wethrift.png" years="2022 - Present" jobTitle="Full Stack Software Engineer" location="Remote">

            <H3>Overview</H3>
            <p className="text-white/75 bg-black/50 p-4 rounded-lg">Joining Wethrift in 2022, Sam's expertise in AI-powered technology revolutionized the way Wethrift discovered, processed, and published coupons. He built systems that handled over 100,000 pieces of online content daily, contributing to over a million coupons being published annually. Sam also enhanced the team’s developer experience, creating crucial debugging tools, and developed tools to assist with coupon code testing, while enhancing internal dashboards and tools.
            </p>

            <H3>Work Included</H3>

            <div className="flex flex-col md:flex-row text-white/75 bg-black/50 p-4 pl-8 rounded-lg">
                <div className="flex flex-col pr-8">
                    <ul className="list-disc leading-relaxed">
                        <li>Built an OCR (Optical Text Recognition) server for Deal.Town</li>
                        <li>Streamlined the DevOps experience (launch configs, debugging)</li>
                        <li>Front-end work on wethrift.com</li>
                        <li>API test suite using Thunder Client</li>
                        <li>Migrated user permission management from static to cloud</li>
                        <li>Browserless Shopify coupon code tester (200,000+ tests per day)</li>
                        <li>Built internal tools to prevent publishing breaking changes to wethrift.com</li>
                        <li>Real-time regex sandbox to optimise coupon extraction algorithms</li>
                        <li>Ported internal dashboard from Parcel to NextJS, upgraded Material UI v5</li>
                        <li>Implemented basic API security on public-access API</li>
                        <li>Coupon code scraper for store domains (90,000+)</li>
                    </ul>
                    <ul className="list-disc leading-relaxed">
                        <li>Deal.Town search box</li>
                        <li>Switched DOM Parser library from JSDom to Linkedom after testing revealed it to be significantly faster</li>
                        <li>Integrated various 3rd-party APIs (The Companies, Data4SEO, Google Analytics, BrightData, Slack, Zapier, Algolia, Reddit)</li>
                        <li>Puppeteer scraping</li>
                        <li>Management of AWS DynamoDB databases</li>
                        <li>AB testing of wethrift.com, sometimes up to 10 concurrent tests</li>
                        <li>Built a new coupon processing pipeline from the ground up. This ~6 month project comprised of:</li>
                        <li>A database queue to which content scrapers could push to</li>
                        <li>A plug-and-play action-based task stack (~30 tasks) which handled information discovery, data checks, OpenAI APIs, and other services.</li>
                        <li>Optimisation of the queue, which processed 150 items at once, with persistent state on each item in case of server restarts.</li>
                        <li>Internal dashboards to monitor the load, timing and cost of the pipeline, its tasks, and its services.</li>
                        <li>New content scrapers</li>
                        <li>Development on Savvy, Wethrift's Chrome Extension</li>
                        <li>Began migration of wethrift.com from NextJS to Solid.js</li>
                    </ul>
                </div>
            </div>

        </Listing>
    )
}

const FreelanceWebDeveloper = function () {
    return (
        <Listing image="/racketroles.png" years="2017 - Present" jobTitle="Freelance Web Developer" location="Remote">

            <H3>Overview</H3>
            <p className="text-white/75 bg-black/50 p-4 rounded-lg">
                Built websites for family friends (gallowaybuilders.com.au, vatmengroup.com.au)
                Self-produced racketroles.com, a 'digital add-on' that enhances real-life tennis
            </p>

            <H3>Work Included</H3>

        </Listing>
    )
}

const CrmDeveloper = function () {
    return (
        <Listing image="/mphn.png" years="2017 - 2022" jobTitle="Systems Developer & Support (CRM)" location="Bendigo & Remote">

            <H3>Overview</H3>
            Since 2017, Murray PHN has been completely transformed as a company and is now considered one of the leading PHNs in terms of technology and innovation.

            Initially contracted, became permanent. Job was to rebuild their CRM. I met with key staff to document processes & identify software requirements. I undertook evidence-based research to map business requirements with competing CRM platforms. The original CRM, which was primarily an account/contact metadata warehouse, was expanded into a broad, integrated Business Intelligence platform which manages data & assets in ways we didn't foresee, across many business areas such as governance, people & culture, finance, reporting, quality, risk, data and systems.

            <br />
            <br />

            <H3>I built these features into the CRM</H3>

            <div className="flex flex-col md:flex-row text-white/75 bg-black/50 p-4 pl-8 rounded-lg">
                <div className="flex flex-col pr-8">
                    <ul className="list-disc leading-relaxed">
                        <li>Enterprise-wide risk assessments, including counterparty risk framework</li>
                        <li>Regulation register. Controlled documents (Policies, Procedures, etc.)</li>
                        <li>Incident response (WHS, Cybersecurity, Data Quality & Breaches)</li>
                        <li>Business processes, mapped to other entities and company assets</li>
                        <li>Tracking company KPIs and associated data</li>
                        <li>Software, hardware and device management</li>
                        <li>Internal request/ticketing system</li>
                        <li> Geographical data (Suburbs, Statistical Areas, Postcodes, etc)</li>
                        <li>Event management with custom EventBrite integration</li>
                        <li>Insight and report generation using the PowerBI platform</li>
                    </ul>
                </div>
            </div>

            I developed in-house web applications, such as an internal 'staff hub' integrated into Dynamics 365 and the Microsoft Graph API.

            I built CRM integrated HTML5 software solutions, deployed on the Azure cloud environment with continuous deployment processes utilizing Git and Visual Studio Code. Some projects required their own web server (usually ExpressJS), which authenticated with the Microsoft Dynamics and Graph APIs.

            The ways in which the PHN automates its processes evolved over time, as did the technology that empowered the company. Power Automate (Microsoft Flow) is integrated into many of the company's systems. These automated processes include actionable reminders, data transformation, and file/data intake.

            I migrated another Primary Health Network from ChilliDB to a custom Dynamics 365 solution we had built in-house. This includes ongoing support and customization of their CRM solution.

            My other responsibilities included training, Office 365 administration, and support.

        </Listing>
    )
}

const CaTechnologies = function () {
    return (

        <Listing image="/ca.png" years="2015 - 2017" jobTitle="Associate Software Engineeer" location="Melbourne">

            <H3>Overview</H3>

            <p className="text-white/75 bg-black/50 p-4 rounded-lg">
                During the two years at CA Technologies, our team built a bottom-up web interface to allow new and existing customers to manage their complex CA Directory instances in a user-friendly way. All configuration was previously done through a command line interface. The new web interface included forms and inputs that were dynamically generated from schema files, physics-enabled network diagrams which visualized connections between hardware, and their status, and a fully automated testing suite integrated into the deployment process.</p>

            <H3>Work Included</H3>

            <div className="flex flex-col md:flex-row text-white/75 bg-black/50 p-4 pl-8 rounded-lg">
                <ul className="list-disc leading-relaxed">
                    <li>Work collaboratively to write quality code that met the Definition of Done.</li>
                    <li>Participate in design and code reviews with other engineers.</li>
                    <li>Actively support and contribute to end of iteration demos.</li>
                    <li>Responsible for assigned integration, testing and deployment tasks.</li>
                    <li>Actively participate in backlog refinement sessions with team members.</li>
                    Commit to delivering stories and tasks within sprints (AGILE).
                    <li>Learning new programming languages and frameworks on the job.</li>
                </ul>
            </div>

        </Listing>
    )
}

const FreelanceGameDeveloper = function () {
    return (
        <div>
            <h3>Freelance Game Developer</h3>
            Self-employed Freelance Developer
            Juicy Craft, Melbourne

            Co-produced T20 Card Cricket Mobile Game for Jump Punch Kick.
            Self-published two Apple and Android mobile games.
            Producing web games for Nickelodeon, KaiserGames, Admeen and Spil Games.
            Working with publishers, artists and developers from around the world.
            Built a HTML5 game template/framework which was sold to developers

        </div>
    )
}

const PianoTeacher = function () {
    return (
        <div>
            <h3>Piano Teacher</h3>
            Self-employed Piano Teacher

            Creating learning plans for students.
            Teaching students how to read and play music.
            Discovering and working with motivations to accelerate learning.

        </div>
    )
}