import { Collapse } from '../../components/collapse'
import ContentContainer from '../../components/content_container'
import H3 from '../../components/h3'
import Image from 'next/image'
import PageContainer from '../../components/page_container'
import VideoPlayer from '../../components/video_player'

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
			</ContentContainer>
		</PageContainer >
	)
}

const Listing = function ({ h1, h2, line1, line2, image, children, linkedin }:
	{
		h1: string,
		h2?: string,
		line1: string,
		line2: string,
		image: string,
		children: React.ReactNode,
		linkedin?: string
	}) {
	return (
		<Collapse image={image} h1={h1} h2={h2} line1={line1} line2={line2} h1_link={linkedin}>
			<div className="flex flex-col md:flex-row w-full">
				<div className="flex flex-col w-full">
					{children}
				</div>
			</div>
		</Collapse>
	)
}

const Box = function ({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col border border-white/25 text-white/75 bg-black/50 p-4 rounded-lg">
			{children}
		</div>
	)
}


const Wethrift = function () {
	return (
		<Listing image="/wethrift.png" h1="WeThrift" h2="Full Stack Software Engineer" line1="2022 - Present" line2="Remote" linkedin="wethrift">
			<Box>
				<p>Joining WeThrift in 2022, my expertise in AI-powered technology revolutionized the way WeThrift discovered, processed, and published coupons. I built systems that handle over 100,000 pieces of online content daily, contributing to over a million coupons being published annually. I also enhanced the team's developer experience, creating crucial debugging tools, and developed tools to assist with coupon code testing, while enhancing internal dashboards and tools.</p>
			</Box>

			<Image src="/wethrift_team.webp" alt="WeThrift Team" width={1024} height={0} className="rounded-lg w-full mt-4" />

			<H3>What I worked on</H3>
			<Box>
				<div className="flex flex-col pl-4 pr-8">
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
						<li>Built an internal Chrome extension to collect coupon codes</li>
						<li>Development on Savvy, WeThrift's Chrome Extension</li>
						<li>Began migration of wethrift.com from NextJS to Solid.js</li>
					</ul>
				</div>
			</Box>

			<H3>Skills I Acquired</H3>
			<Box>

				<div className="flex flex-col md:flex-row md:gap-8 justify-between pl-4 pr-4">
					<ul className="list-disc leading-relaxed">
						<li>React</li>
						<li>Next.js</li>
						<li>Solid.js</li>
						<li>AWS (S3 & DynamoDB)</li>
						<li>Puppeteer</li>
						<li>Cloudflare</li>
					</ul>
					<ul className="list-disc leading-relaxed">
						<li>React Perf Optimisation</li>
						<li>Zapier</li>
						<li>Proxies</li>
						<li>Google Analytics</li>
						<li>Tesseract OCR</li>
						<li>Material UI</li>
					</ul>
					<ul className="list-disc leading-relaxed">
						<li>Algolia</li>
						<li>Data4SEO</li>
						<li>Chrome Extensions</li>
						<li>.env Management</li>
						<li>Slack API</li>
					</ul>
				</div>
			</Box>


		</Listing>
	)
}

const FreelanceWebDeveloper = function () {
	return (
		<Listing image="/globe.svg" h1="Freelance Web Developer" line1="2024 - Present" line2="Remote">

			<div className="flex flex-col gap-4">

				<Box>					
					<Image src="/bendigobreville.jpg" alt="Bendigo Breville Logo" width={100} height={0} className="rounded-lg mt-4" />
					<H3>bendigobreville.com</H3>
					<p className="text-sm text-gray-400 mb-4">2025</p>
					<p className="text-sm text-gray-400 mb-4"><strong>Project Length:</strong> 5 hours</p>
					<p className="font-bold mt-6">Tech:</p>
					<ul className="list-disc leading-relaxed pl-4">
						<li>React, Next.js, TypeScript, Tailwind</li>
						<li>Vercel + Cloudflare</li>
					</ul>
				</Box>

				<Box>
					<H3>samwhillance.com (this site)</H3>
					<p className="text-sm text-gray-400 mb-4">2025</p>
					<p className="text-sm text-gray-400 mb-4"><strong>Project Length:</strong> 12 hours</p>
					<p className="font-bold mt-6">Tech:</p>
					<ul className="list-disc leading-relaxed pl-4">
						<li>React, Next.js</li>
						<li>TypeScript (first time using it)</li>
						<li>Tailwind CSS (first time using it)</li>
						<li>Vercel + Cloudflare</li>
					</ul>
				</Box>

				<Box>
					<Image src="/racketroles.png" alt="Racket Roles Logo" width={100} height={0} className="rounded-lg mt-4" />
					<H3>Racket Roles</H3>
					<a href="https://play.racketroles.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-4">racketroles.com</a>
					<p className="text-sm text-gray-400 mb-4">2025</p>

					<p className="italic">"Tennis, transformed! Activate legendary player cards to mix up your real-life tennis matches with unique rule modifiers. Elevate your game with iconic moves and strategies."</p>
					<br />
					<p>This was a passion project of mine, developed over several months. Originally built using Vite, I quickly ported it to Next.js. Hosted on Vercel. Designed primarly with mobile devices in mind.</p>

					<p className="font-bold mt-6">Tech:</p>
					<ul className="list-disc leading-relaxed pl-4">
						<li>React, Next.js</li>
						<li>Vercel</li>
						<li>Cloudflare</li>
					</ul>
				</Box>

				<Box>
					<Image src="/vatmen_logo.png" alt="Vatmen Group Logo" width={100} height={0} className="rounded-lg mt-4 mb-4" />
					<a href="https://vatmengroup.com.au" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-4">vatmengroup.com.au</a>
					<p className="text-sm text-gray-400 mb-4"><strong>Project Length:</strong> 22 hours</p>
					<p className="text-sm text-gray-400 mb-4">2024</p>
					<ul className="list-disc leading-relaxed pl-4">
						<li>Commercial cleaning company, already knew the owner through family</li>
						<li>Converted the original WordPress site to React/Next.js</li>
						<li>Modernised the design, added mobile responsiveness</li>
						<li>Email delivery via Postmark</li>
						<li>Deployed using Digital Ocean (linux)</li>
						<li>Custom nginx config</li>
						<li>Automatic deploys from git pushes</li>
					</ul>
				</Box>

				<Box>
					<Image src="/galloway.png" alt="Galloway Builders Logo" width={100} height={0} className="rounded-lg mt-4 mb-4" />
					<a href="https://gallowaybuilders.com.au" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-4">gallowaybuilders.com.au</a>
					<p className="text-sm text-gray-400 mb-4"><strong>Project Length:</strong> 10 hours</p>
					<p className="text-sm text-gray-400 mb-4">2024</p>
					<ul className="list-disc leading-relaxed pl-4">
						<li>Friend's construction business</li>
						<li>Hosted on Heroku</li>
						<li>Cloudflare routing</li>
						<li>React, Next.js</li>
						<li>Automatic deploys from git pushes</li>
					</ul>
				</Box>
			</div>

		</Listing>
	)
}

const CrmDeveloper = function () {
	return (
		<Listing image="/mphn.png" h1="Murray PHN" h2="Systems Developer & Support (CRM)" line1="2017 - 2022" line2="Bendigo & Remote" linkedin="murray-phn">
			<div className="flex flex-col gap-4">

				<div>
					<H3>Overview</H3>
					<Box>
						Since 2017, Murray PHN has been completely transformed as a company and is now considered one of the leading PHNs in terms of technology and innovation.

						Initially contracted, became permanent. Job was to rebuild their CRM. I met with key staff to document processes & identify software requirements. I undertook evidence-based research to map business requirements with competing CRM platforms. The original CRM, which was primarily an account/contact metadata warehouse, was expanded into a broad, integrated Business Intelligence platform which manages data & assets in ways we didn't foresee, across many business areas such as governance, people & culture, finance, reporting, quality, risk, data and systems.
					</Box>
				</div>

				<div>
					<H3>I built these features into the CRM</H3>
					<Box>
						<div className="flex flex-col pl-4 pr-4">
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
					</Box>
				</div>

				<div>
					<H3>What I worked on</H3>
					<Box>
						<ul className="pl-4 pr-4 list-disc leading-relaxed">
							<li>Developed in-house web applications, such as an internal 'staff hub' integrated into Dynamics 365 and the Microsoft Graph API.</li>
							<li>built CRM integrated HTML5 software solutions, deployed on the Azure cloud environment with continuous deployment processes utilizing Git and Visual Studio Code. Some projects required their own web server (usually ExpressJS), which authenticated with the Microsoft Dynamics and Graph APIs.</li>
							<li>I migrated another Primary Health Network from ChilliDB to a custom Dynamics 365 solution we had built in-house. This included ongoing support and customization of their CRM solution.</li>
							<li>My other responsibilities included training, Office 365 administration, and support.</li>
						</ul>
					</Box>
				</div>

				<div>
					<H3>Skills I Acquired</H3>
					<Box>
						<div className="flex flex-col md:flex-row md:gap-8 justify-between pl-4 pr-4">
							<ul className="list-disc leading-relaxed">
								<li>Angular</li>
								<li>Microsoft Dynamics 365</li>
								<li>Microsoft Graph API</li>
								<li>Microsoft Azure</li>
								<li>Sharepoint</li>
								<li>PowerBI</li>
								<li>Power Automate</li>
								<li>Power Apps</li>
							</ul>
						</div>
					</Box>
				</div>
			</div>
		</Listing>
	)
}

const CaTechnologies = function () {
	return (
		<Listing image="/ca.png" h1="CA Technologies" h2="Associate Software Engineeer" line1="2015 - 2017" line2="Melbourne" linkedin="ca-technologies">

			<div className="flex flex-col gap-4">
				<div >
					<H3>Overview</H3>
					<Box>
						This was my first "real job" after completing my studies. During the two years at CA Technologies, our team built a bottom-up web interface to allow new and existing customers to manage their complex CA Directory instances in a user-friendly way. All configuration was previously done through a command line interface. The new web interface included forms and inputs that were dynamically generated from schema files, physics-enabled network diagrams which visualized connections between hardware, and their status, and a fully automated testing suite integrated into the deployment process.</Box>
				</div>

				<div>
					<H3>What I worked on</H3>
					<Box>
						<ul className="pl-4 pr-4 list-disc leading-relaxed">
							<li>Work collaboratively to write quality code that met the Definition of Done.</li>
							<li>Participate in design and code reviews with other engineers.</li>
							<li>Actively support and contribute to end of iteration demos.</li>
							<li>Responsible for assigned integration, testing and deployment tasks.</li>
							<li>Actively participate in backlog refinement sessions with team members.</li>
							Commit to delivering stories and tasks within sprints (AGILE).
							<li>Learning new programming languages and frameworks on the job.</li>
						</ul>
					</Box>
				</div>

				<div>
					<H3>Skills I Acquired</H3>
					<Box>
						<div className="flex flex-col md:flex-row md:gap-8 justify-between pl-4 pr-4">
							<ul className="list-disc leading-relaxed">
								<li>Angular</li>
								<li>LDAP</li>
								<li>Schema-defined User Interfaces</li>
								<li>Automated browser testing with Istanbul</li>
								<li>Scrum / Agile</li>
							</ul>
						</div>
					</Box>
				</div>
			</div>

		</Listing>
	)
}

const FreelanceGameDeveloper = function () {
	return (
		<Listing image="/juicycraft.png" h1="Freelance Game Developer" line1="2015 - 2017" line2="Remote">
			<div className="flex flex-col gap-4 w-full">

				<Collapse image={'/t20.webp'} h1={"T20 Card Cricket"} line1={"iOS and Android"} line2={'2017'}>
					<div className="flex flex-col gap-4 w-full">

						<p className="italic">"The cricket card-matching game that improves your concentration! Match cards, hit runs and score tons in this card-matching, cricket-themed matching game that improves your concentration!"</p>

						<p>Built for a passionate Cricket client in New Zealand, this project spanned 3 years, working on it in our spare time.</p>

						<p>The game was built using GameMaker Studio, which allows developers to publish games to multiple platforms from a single codebase.</p>

						<a href="https://apps.apple.com/gb/app/t20-card-cricket/id1290542871" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on the App Store</a>

						<VideoPlayer url="https://www.youtube.com/watch?v=b1-UuWkaeno" />
					</div>
				</Collapse>

				<Collapse image={'/gravipop.png'} h1={"Gravipop"} line1={"HTML5"} line2={'2015'}>

					<div className="flex flex-col gap-4">
						<p>In this game your task is to pop all the bubbles while avoiding obstacles like guided-rockets, sharp saws and spike traps. Each time you pop a big bubble, it will split into two smaller bubbles. Some levels will require you to change gravity to move around. All levels have a time limit. Any remaining time after completing the level is converted into points. There are 30 levels.</p>
						<a href="https://www.newgrounds.com/portal/view/628279" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on Newgrounds (buggy)</a>
						<VideoPlayer url="https://vimeo.com/79067217" />
					</div>
				</Collapse>

				<Collapse image={'/jchtml5.jpg'} h1={"JCHTML5 Engine"} line1={"HTML5 Game Template"} line2={'2014'}>
					<div className="flex flex-col gap-4">
						<p>The JCHTML5 Engine was a GameMaker: Studio project file that implemented a long list of features that were common in HTML5 games or required by sponsors when selling game licenses. JCHTML5 was optimized for both mobile and desktop.</p>
					</div>
				</Collapse>

				<Collapse image={'/fly-trap.webp'} h1={"Fly Trap"} line1={"HTML5"} line2={'2014'}>
					<div className="flex flex-col gap-4">
						<p className="italic">"Fly Trap is a reflex based game with a little defenseless insect and you can enjoy it online and for free on Silvergames.com. Fly as long as you can but don't touch the insect-eating plants! This might be easy in the beginning but wait until there are plenty of insects waiting for you to eat you alive."</p>
						<p>A HTML5 game built using GameMaker Studio. Graphics by <a href="https://x.com/NathanGDquest" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Nathan Lovato</a>.</p>

						<a href="https://www.silvergames.com/en/fly-trap" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Play on Silvergames.com</a>
						<VideoPlayer url="/flytrap_video.mov" />
					</div>
				</Collapse>

				<Box>
					Hedges
				</Box>
			</div>


		</Listing>
	)
}

const PianoTeacher = function () {
	return (

		<Listing image="/piano.png" h1="Piano Teacher" line1="2013 - 2016" line2="Melbourne">
			<Box>
				Creating learning plans for students. Teaching students how to read and play music.
			</Box>
		</Listing>
	)
}