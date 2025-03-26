import { Code, Database, Server } from 'lucide-react'

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
				<DelinkedIn />
				<ColorInEmoji />
				<Wethrift />
				<BendigoBreville/>
				<FreelanceWebDeveloper />
				<SavingsExpert/>
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
			<div className="flex flex-col gap-6 w-full">
				{children}
			</div>
		</Collapse>
	)
}

const Box = function ({ children }: { children: React.ReactNode }) {
	return (
		<div className="glass-card p-6 space-y-4 text-text-muted">
			{children}
		</div>
	)
}

const DelinkedIn = function () {
	return (
		<Listing image="/delinkedin.png" h1="DelinkedIn" h2="Creator" line1="March 2025" line2="Remote">
			<Box>
				<p><a href="https://delinkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">DelinkedIn</a> is a Google Chrome extension that decodes corporate jargon, reveals hidden expectations, and exposes red flags in job postings - with just the right amount of humour.</p>
				<p>LinkedIn (and other) job descriptions have an all-too-common problem: they're full of corporate buzzwords — terms which are now so overused that they have lost almost all meaning. Job ads read like HR word salad.</p>
				<ul>
					<li>‘Fast-paced environment’ becomes ‘You’ll never catch your breath.’</li>
					<li>‘Wearing many hats’ turns into ‘One salary, five jobs.’</li>
					<li>‘Collaborative culture’ is now ‘Endless meetings, no decisions.’</li>
				</ul>
				<p>DelinkedIn can sometimes reveal some useful insights, but it was mainly built for entertainment purposes (comedic relief after reading hundreds of job ads myself).</p>
			</Box>
		</Listing>
	)
}

const ColorInEmoji = function () {
	return (
		<Listing image="/emoji_wheel.png" h1="ColorinEmoji.com" h2="Founder & Developer" line1="March 2025 - Present" line2="Remote">
			<Box>
				<p className="mb-4">
					<a href="https://colorinemoji.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Color In Emoji</a> is a fun and easy way for kids to create coloring pages just using emojis! Unlike other AI coloring page generators that ask you to write your own text prompt, children can simply click on emojis to generate unique, creative and exciting coloring pages. There are over 200 emojis to choose from, 2 modes, and 2 AI models (as of March 2025).
					</p>
					<p> It's:	</p>
				<div className="flex flex-col pl-4 pr-8">
					<ul className="list-disc leading-relaxed">
						<li>Kid-friendly - no typing needed! 🎨</li>
						<li>Intuitive - so simple even kids can use it! 🧒</li>
						<li>Super fast - pages ready in seconds ⚡</li>
						<li>Safe and fun - just pick emojis and print! 🎯</li>
						<li>Perfect for all ages (and tired parents!) 👶👧👦</li>
					</ul>
				</div>

			</Box>
			<br/>
			<Box>
				<p className="mb-4 font-bold">Tech Stack:</p>
				<div className="flex flex-col pl-4 pr-8">
				<ul className="list-disc leading-relaxed">
					<li>React</li>
					<li>NextJS (App Router)</li>
					<li>TypeScript</li>
					<li>Tailwind CSS</li>
					<li>Cloudflare Workers, Queues, Workers AI</li>
					<li>Supabase PostgreSQL and Auth</li>
					<li>Drizzle</li>
					<li>Vercel</li>
					<li>Stripe Integration</li>
				</ul>
				</div>
				</Box>
		</Listing>
	)
}


const Wethrift = function () {
	return (
		<Listing image="/wethrift.png" h1="WeThrift" h2="Full Stack Software Engineer" line1="2022 - Present" line2="Remote" linkedin="wethrift">
			<Box>
				<p>Joining WeThrift in 2022, my expertise in AI-powered technology revolutionized the way WeThrift discovered, processed, and published coupons. I built systems that handle over 100,000 pieces of online content daily, contributing to over a million coupons being published annually. I also enhanced the team's developer experience, creating crucial debugging tools, and developed tools to assist with coupon code testing, while enhancing internal dashboards and tools.</p>
			</Box>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="glass-card p-6 transition-all duration-300 hover:shadow-xl hover:border-primary-light">
					<div className="flex items-center mb-4">
						<div className="p-3 rounded-lg bg-primary/10 mr-4">
							<Server className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-bold">Processing</h3>
					</div>
					<p className="text-text-muted">Processing over 100,000 pieces of online content daily through AI-powered systems</p>
				</div>

				<div className="glass-card p-6 transition-all duration-300 hover:shadow-xl hover:border-primary-light">
					<div className="flex items-center mb-4">
						<div className="p-3 rounded-lg bg-secondary/10 mr-4">
							<Code className="h-6 w-6 text-secondary" />
						</div>
						<h3 className="text-xl font-bold">Testing</h3>
					</div>
					<p className="text-text-muted">Automated testing of 200,000+ coupon codes per day with custom testing infrastructure</p>
				</div>

				<div className="glass-card p-6 transition-all duration-300 hover:shadow-xl hover:border-primary-light">
					<div className="flex items-center mb-4">
						<div className="p-3 rounded-lg bg-accent/10 mr-4">
							<Database className="h-6 w-6 text-accent" />
						</div>
						<h3 className="text-xl font-bold">Scale</h3>
					</div>
					<p className="text-text-muted">Contributing to over 1 million coupons being published annually</p>
				</div>
			</div>

			<Image src="/wethrift_team.webp" alt="WeThrift Team" width={1024} height={0} className="rounded-lg w-full" />

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

const BendigoBreville = function () {
	return (
		<Listing image="/bendigobreville.jpg" h1="Bendigo Breville" h2="Founder & Diretor" line1="2020 - Present" line2="Bendigo, VIC">
		<Box>					
			<H3>Bendigo Breville Repairs & Service</H3>
			<a href="https://bendigobreville.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-4">bendigobreville.com</a>

			<p className="font-bold mt-6">As the owner-operator of a specialized coffee machine repair business, I provide comprehensive service and repair for the complete range of Breville coffee machines.</p>
			<br/>
			<p>Through dedicated self-education and hands-on experience, I've developed expertise across all Breville models, diagnosing and resolving even the most complex technical issues.</p>
			<br/>
			<p>Key responsibilities and achievements:</p>
			<ul className="list-disc leading-relaxed pl-4">
				<li>Communicate directly with customers to understand their concerns, explain technical issues in accessible language, and provide transparent estimates</li>
				<li>Maintain a network of fellow Breville technicians throughout Australia, facilitating knowledge sharing and collaborative problem-solving</li>
				<li>Deliver reliable, high-quality repairs that extend machine lifespan and enhance performance</li>
				<li>Manage inventory of specialized Breville parts, minimizing customer wait times.</li>
			</ul>
		</Box>

		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div className="glass-card p-2 transition-all duration-300 hover:scale-105">
				<Image 
					src="/brev2.png" 
					alt="Breville Coffee Machine Repair" 
					width={400} 
					height={300} 
					className="rounded-lg w-full h-full object-cover"
				/>
			</div>
			<div className="glass-card p-2 transition-all duration-300 hover:scale-105">
				<Image 
					src="/brev3.png" 
					alt="Breville Coffee Machine Service" 
					width={400} 
					height={300} 
					className="rounded-lg w-full h-full object-cover"
				/>
			</div>
			<div className="glass-card p-2 transition-all duration-300 hover:scale-105">
				<Image 
					src="/brev4.png" 
					alt="Breville Coffee Machine Maintenance" 
					width={400} 
					height={300} 
					className="rounded-lg w-full h-full object-cover"
				/>
			</div>
		</div>
	</Listing>
	)
}

const SavingsExpert = function () {
	return (
		<Listing image="/savings_expert.png" h1="Savings Expert" line1="2023 - Present" line2="Remote">	
		<Box>				
					<p>I've appeared in articles offering my "expertise" on saving money and other commerce related topics.</p>

					<div className="flex flex-row flex-wrap gap-4 mt-4 mb-4">
						<Image src="/yahoo.png" alt="Yahoo" width={100} height={0}  />
						<Image src="/the_sun.png" alt="The Sun" width={100} height={0}  />
						<Image src="/metro.svg" alt="Metro.co.uk" width={100} height={0}  />
						<Image src="/kidspot.png" alt="Kidspot.com.au" width={100} height={0}  />
					</div>

					<p>Here are some of the articles I've been featured in:</p>
					<ul className="list-disc leading-relaxed pl-4 text-sm">
						<li><a href="https://ca.style.yahoo.com/6-ways-spend-less-christmas-080000662.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">ca.style.yahoo.com</a></li>
						<li><a href="https://www.thesun.co.uk/money/19945889/discount-expert-bag-water-freezer-save-energy-costs" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">www.thesun.co.uk/money</a></li>
						<li><a href="https://metro.co.uk/2022/10/03/ten-easy-ways-to-save-money-from-the-comfort-of-your-couch-17488662/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">metro.co.uk</a></li>
						<li><a href="https://www.retailtechnologyreview.com/articles/2022/08/09/customer-data-concerns-6-ways-online-shoppers-can-spot-a-fake-website/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">retailtechnologyreview.com</a></li>
						<li><a href="https://www.kidspot.com.au/lifestyle/money/five-money-saving-hacks-for-washing-and-ironing-your-clothes/news-story/1917b94a58d30623dac126db7db89154" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">kidspot.com.au</a></li>
						<li><a href="https://www.the-sun.com/money/6163291/money-saving-kitchen-appliance-hack-freezer/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">the-sun.com</a></li>
						<li><a href="https://www.nottinghampost.com/news/cost-of-living/save-hundreds-energy-bills-avoiding-8272059" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">nottinghampost.com</a></li>
					</ul>
				</Box>
		</Listing>
	)
}

const FreelanceWebDeveloper = function () {
	return (
		<Listing image="/freelance_web.png" h1="Freelance Web Developer" line1="2024 - Present" line2="Remote">
			<div className="flex flex-col gap-6">
				<Box>					
					<div className="flex flex-col gap-4">
						<Image src="/bendigobreville.jpg" alt="Bendigo Breville Logo" width={100} height={0} className="rounded-lg" />
						<div>
							<H3>bendigobreville.com</H3>
							<a href="https://bendigobreville.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">bendigobreville.com</a>
						</div>
						
						<div className="space-y-2">
							<p className="text-sm text-text-muted">2025</p>
							<p className="text-sm text-text-muted"><strong>Project Length:</strong> 8 hours</p>
						</div>

						<div className="space-y-2">
							<p className="font-semibold">Tech:</p>
							<ul className="list-disc pl-4 space-y-1">
								<li>React, Next.js, TypeScript, Tailwind</li>
								<li>Vercel + Cloudflare</li>
							</ul>
						</div>
					</div>
				</Box>

				<Box>
					<div className="flex flex-col gap-4">
						<H3>samwhillance.com (this site)</H3>
						<div className="space-y-2">
							<p className="text-sm text-text-muted">2025</p>
							<p className="text-sm text-text-muted"><strong>Project Length:</strong> 12 hours</p>
						</div>

						<div className="space-y-2">
							<p className="font-semibold">Tech:</p>
							<ul className="list-disc pl-4 space-y-1">
								<li>React, Next.js</li>
								<li>TypeScript (first time using it)</li>
								<li>Tailwind (first time using it)</li>
								<li>Vercel + Cloudflare</li>
							</ul>
						</div>
					</div>
				</Box>

				<Box>
					<div className="flex flex-col gap-4">
						<Image src="/racketroles.png" alt="Racket Roles Logo" width={100} height={0} className="rounded-lg" />
						<div>
							<H3>Racket Roles</H3>
							<a href="https://play.racketroles.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">racketroles.com</a>
						</div>

						<div className="space-y-4">
							<p className="text-sm text-text-muted">2025</p>
							<p className="italic">"Tennis, transformed! Activate legendary player cards to mix up your real-life tennis matches with unique rule modifiers. Elevate your game with iconic moves and strategies."</p>
							<p>This was a passion project of mine, developed over several months. Originally built using Vite, I quickly ported it to Next.js. Hosted on Vercel. Designed primarly with mobile devices in mind.</p>
						</div>

						<div className="space-y-2">
							<p className="font-semibold">Tech:</p>
							<ul className="list-disc pl-4 space-y-1">
								<li>React, Next.js</li>
								<li>Vercel</li>
								<li>Cloudflare</li>
							</ul>
						</div>
					</div>
				</Box>

				<Box>
					<div className="flex flex-col gap-4">
						<Image src="/vatmen_logo.png" alt="Vatmen Group Logo" width={100} height={0} className="rounded-lg" />
						<div>
							<a href="https://vatmengroup.com.au" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">vatmengroup.com.au</a>
						</div>

						<div className="space-y-2">
							<p className="text-sm text-text-muted"><strong>Project Length:</strong> 22 hours</p>
							<p className="text-sm text-text-muted">2024</p>
						</div>

						<ul className="list-disc pl-4 space-y-1">
							<li>Commercial cleaning company, already knew the owner through family</li>
							<li>Converted the original WordPress site to React/Next.js</li>
							<li>Modernised the design, added mobile responsiveness</li>
							<li>Email delivery via Postmark</li>
							<li>Deployed using Digital Ocean (linux)</li>
							<li>Custom nginx config</li>
							<li>Automatic deploys from git pushes</li>
						</ul>
					</div>
				</Box>

				<Box>
					<div className="flex flex-col gap-4">
						<Image src="/galloway.png" alt="Galloway Builders Logo" width={100} height={0} className="rounded-lg" />
						<div>
							<a href="https://gallowaybuilders.com.au" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">gallowaybuilders.com.au</a>
						</div>

						<div className="space-y-2">
							<p className="text-sm text-text-muted"><strong>Project Length:</strong> 10 hours</p>
							<p className="text-sm text-text-muted">2024</p>
						</div>

						<ul className="list-disc pl-4 space-y-1">
							<li>Friend's construction business</li>
							<li>Hosted on Heroku</li>
							<li>Cloudflare routing</li>
							<li>React, Next.js</li>
							<li>Automatic deploys from git pushes</li>
						</ul>
					</div>
				</Box>
			</div>
		</Listing>
	)
}

const CrmDeveloper = function () {
	return (
		<Listing image="/mphn.png" h1="Murray PHN" h2="Systems Developer & Support (CRM)" line1="2017 - 2022" line2="Bendigo & Remote" linkedin="murray-phn">
			<div className="flex flex-col gap-6">
				<div>
					<H3>Overview</H3>
					<Box>
						<p className="leading-relaxed">
							Since 2017, Murray PHN has been completely transformed as a company and is now considered one of the leading PHNs in terms of technology and innovation.
						</p>
						<p className="leading-relaxed">
							Initially contracted, became permanent. Job was to rebuild their CRM. I met with key staff to document processes & identify software requirements. I undertook evidence-based research to map business requirements with competing CRM platforms. The original CRM, which was primarily an account/contact metadata warehouse, was expanded into a broad, integrated Business Intelligence platform which manages data & assets in ways we didn't foresee, across many business areas such as governance, people & culture, finance, reporting, quality, risk, data and systems.
						</p>
					</Box>
				</div>

				<div>
					<H3>I built these features into the CRM</H3>
					<Box>
						<ul className="list-disc pl-4 space-y-2">
							<li>Enterprise-wide risk assessments, including counterparty risk framework</li>
							<li>Regulation register. Controlled documents (Policies, Procedures, etc.)</li>
							<li>Incident response (WHS, Cybersecurity, Data Quality & Breaches)</li>
							<li>Business processes, mapped to other entities and company assets</li>
							<li>Tracking company KPIs and associated data</li>
							<li>Software, hardware and device management</li>
							<li>Internal request/ticketing system</li>
							<li>Geographical data (Suburbs, Statistical Areas, Postcodes, etc)</li>
							<li>Event management with custom EventBrite integration</li>
							<li>Insight and report generation using the PowerBI platform</li>
						</ul>
					</Box>
				</div>

				<div>
					<H3>What I worked on</H3>
					<Box>
						<ul className="list-disc pl-4 space-y-2">
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
						<ul className="list-disc pl-4 space-y-2">
							<li>Angular</li>
							<li>Microsoft Dynamics 365</li>
							<li>Microsoft Graph API</li>
							<li>Microsoft Azure</li>
							<li>Sharepoint</li>
							<li>PowerBI</li>
							<li>Power Automate</li>
							<li>Power Apps</li>
						</ul>
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
						This was my first "real job" after completing my studies. During the two years at CA Technologies, I built a new web interface to allow customers to manage their complex, connected CA Directory instances in a user-friendly way (all configuration was previously done through a CLI). The visual interface included forms and inputs that were dynamically generated from schema files, physics-enabled network diagrams which visualized connections between hardware and their status, and a fully automated-browser testing suite (Istanbul).</Box>
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
							<li>Commit to delivering stories and tasks within sprints (AGILE).</li>
							<li>Learning new programming languages and frameworks on the job.</li>
						</ul>
					</Box>
				</div>

				<div>
					<H3>Can I see it?</H3>
					<Box>
						<p>I no longer have access to the codebase. Broadcom acquired CA Technologies in 2018 (for just $18 billion). Snippets of the interface I designed and built can be found in their <a href="https://techdocs.broadcom.com/us/en/symantec-security-software/identity-security/directory/12-6/administrating/migrating-from-odsee-to-ca-directory/creating-and-configuring-ca-directory.html" target="_blank" rel="noopener noreferrer" className="inline-block text-blue-500 underline">online documentation.</a></p>
					</Box>
				</div>

				<div>
					<H3>Skills I Acquired</H3>
					<Box>
						<div className="flex flex-col md:flex-row md:gap-8 justify-between pl-4 pr-4">
							<ul className="list-disc leading-relaxed">
								<li>AngularJS</li>
								<li>Automated browser testing with Istanbul</li>
								<li>Scrum / Agile</li>
								<li>Schema-defined User Interfaces</li>
								<li>LDAP</li>
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
			<div className="flex flex-col gap-6 w-full">
				<Collapse image={'/t20.webp'} h1={"T20 Card Cricket"} line1={"iOS and Android"} line2={'2017'}>
					<div className="flex flex-col gap-6">
						<Box>
							<div className="flex flex-col gap-4">
								<p className="italic">"The cricket card-matching game that improves your concentration! Match cards, hit runs and score tons in this card-matching, cricket-themed matching game that improves your concentration!"</p>

								<p>Built for a passionate Cricket client in New Zealand, this project spanned 3 years, working on it in our spare time.</p>

								<p>The game was built using GameMaker Studio, which allows developers to publish games to multiple platforms from a single codebase.</p>

								<a href="https://apps.apple.com/gb/app/t20-card-cricket/id1290542871" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">View on the App Store</a>

								<VideoPlayer url="https://www.youtube.com/watch?v=b1-UuWkaeno" />
							</div>
						</Box>
					</div>
				</Collapse>

				<Collapse image={'/gravipop.png'} h1={"Gravipop"} line1={"HTML5"} line2={'2015'}>
					<div className="flex flex-col gap-6">
						<Box>
							<div className="flex flex-col gap-4">
								<p>In this game your task is to pop all the bubbles while avoiding obstacles like guided-rockets, sharp saws and spike traps. Each time you pop a big bubble, it will split into two smaller bubbles. Some levels will require you to change gravity to move around. All levels have a time limit. Any remaining time after completing the level is converted into points. There are 30 levels.</p>
								
								<a href="https://www.newgrounds.com/portal/view/628279" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">View on Newgrounds (buggy)</a>
								
								<VideoPlayer url="https://vimeo.com/79067217" />
							</div>
						</Box>
					</div>
				</Collapse>

				<Collapse image={'/jchtml5.jpg'} h1={"JCHTML5 Engine"} line1={"HTML5 Game Template"} line2={'2014'}>
					<Box>
						<p>The JCHTML5 Engine was a GameMaker: Studio project file that implemented a long list of features that were common in HTML5 games or required by sponsors when selling game licenses. JCHTML5 was optimized for both mobile and desktop.</p>
					</Box>
				</Collapse>

				<Collapse image={'/fly-trap.webp'} h1={"Fly Trap"} line1={"HTML5"} line2={'2014'}>
					<div className="flex flex-col gap-6">
						<Box>
							<div className="flex flex-col gap-4">
								<p className="italic">"Fly Trap is a reflex based game with a little defenseless insect and you can enjoy it online and for free on Silvergames.com. Fly as long as you can but don't touch the insect-eating plants! This might be easy in the beginning but wait until there are plenty of insects waiting for you to eat you alive."</p>
								
								<p>A HTML5 game built using GameMaker Studio. Graphics by <a href="https://x.com/NathanGDquest" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">Nathan Lovato</a>.</p>

								<a href="https://www.silvergames.com/en/fly-trap" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">Play on Silvergames.com</a>
								
								<VideoPlayer url="/flytrap_video.mov" />
							</div>
						</Box>
					</div>
				</Collapse>

				<Box>
					<p>Hedges</p>
				</Box>
			</div>
		</Listing>
	)
}

const PianoTeacher = function () {
	return (
		<Listing image="/piano.png" h1="Piano Teacher" line1="2013 - 2016" line2="Melbourne">
			<Box>
				<p>Creating learning plans for students. Teaching students how to read and play music.</p>
			</Box>
		</Listing>
	)
}