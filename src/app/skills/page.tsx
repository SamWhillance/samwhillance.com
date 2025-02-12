"use client"

import ContentContainer from '../../components/content_container'
import PageContainer from '../../components/page_container'
import { useState } from 'react'

export default function Skills() {
	const [searchQuery, setSearchQuery] = useState('')

	const filteredSkills = skills.filter(skill =>
		skill.name.toLowerCase().includes(searchQuery.toLowerCase())
	)

	const groupedSkills = filteredSkills.reduce((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = []
		}
		acc[skill.category].push(skill)
		return acc
	}, {} as Record<string, Skill[]>)

	return (
		<PageContainer>
			<ContentContainer>
				<div className="flex flex-col gap-8 p-4">

					<div className="flex flex-col gap-4 w-full justify-center items-center">
						<h2 className="text-2xl font-bold">Search my brain 🧠</h2>
						<input
							type="text"
							placeholder="Search skills..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="p-2 border rounded-md w-full max-w-md text-black p-4 text-lg"
						/>
					</div>

					<div className="flex flex-col gap-8 pb-8">
						{Object.entries(groupedSkills).length > 0 ? (
							Object.entries(groupedSkills).map(([category, categorySkills]) => (
								<div key={category} className="flex flex-col gap-4">
									<h2 className="text-2xl font-bold">{category}</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
										{categorySkills.sort((a, b) => b.value - a.value).map((skill) => (
											<div key={skill.name} className="p-4 border rounded-lg border-gray-700">
												<div className="flex flex-col gap-2">
													<div className="text-lg font-semibold">{skill.name}</div>
													<div className="w-full bg-gray-200 rounded-full h-2.5">
														<div
															className="bg-blue-600 h-2.5 rounded-full progress-bar"
															style={{ width: `${(skill.value / 10) * 100}%` }}
														/>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							))
						) : (
							<div className="text-center text-xl">
								Don't worry, I'm a quick learner 😊
							</div>
						)}
					</div>
				</div>
			</ContentContainer>
		</PageContainer>
	)
}

type Skill = {
	name: string
	value: number
	category: string
}

const skills: Skill[] = [
	// Languages
	{ name: 'JavaScript', value: 9, category: 'Languages' },
	{ name: 'CSS', value: 8, category: 'Languages' },
	{ name: 'HTML', value: 9, category: 'Languages' },
	{ name: 'PHP', value: 2, category: 'Languages' },
	{ name: 'C', value: 2, category: 'Languages' },
	{ name: 'C++', value: 2, category: 'Languages' },
	{ name: 'C#', value: 2, category: 'Languages' },
	{ name: 'Java', value: 4, category: 'Languages' },
	{ name: 'Python', value: 2, category: 'Languages' },
	{ name: 'SQL', value: 3, category: 'Languages' },
	{ name: 'GML', value: 8, category: 'Languages' },

	// Web
	{ name: 'React', value: 9, category: 'Web' },
	{ name: 'Solid.js', value: 8, category: 'Web' },
	{ name: 'Node.js', value: 9, category: 'Web' },
	{ name: 'TypeScript', value: 6, category: 'Web' },
	{ name: 'Express', value: 7, category: 'Web' },
	{ name: 'Angular', value: 5, category: 'Web' },
	{ name: 'Cloudflare', value: 7, category: 'Web' },
	{ name: 'jQuery', value: 8, category: 'Web' },
	{ name: 'Design', value: 7, category: 'Web' },
	{ name: 'JSX', value: 8, category: 'Web' },
	{ name: 'Nginx', value: 3, category: 'Web' },
	{ name: 'Apache', value: 3, category: 'Web' },
	{ name: 'Docker', value: 3, category: 'Web' },
	{ name: 'NPM', value: 7, category: 'Web' },
	{ name: 'Azure', value: 4, category: 'Web' },
	{ name: 'WordPress', value: 5, category: 'Web' },
	{ name: 'Puppeteer', value: 7, category: 'Web' },
	{ name: 'Chrome Extensions', value: 7, category: 'Web' },
	{ name: 'Leaflet', value: 5, category: 'Web' },
	{ name: 'Bootstrap', value: 7, category: 'Web' },
	{ name: 'Material UI', value: 7, category: 'Web' },
	{ name: 'Responsive design', value: 8, category: 'Web' },
	{ name: 'D3.js', value: 7, category: 'Web' },
	{ name: 'Tailwind', value: 7, category: 'Web' },
	{ name: 'SEO', value: 5, category: 'Web' },
	{ name: 'SSG/SSR', value: 6, category: 'Web' },
	{ name: 'Design principles', value: 7, category: 'Web' },
	{ name: 'UX/UI', value: 7, category: 'Web' },
	{ name: 'Web Performance', value: 7, category: 'Web' },
	{ name: 'User Experience', value: 7, category: 'Web' },

	// Database
	{ name: 'DynamoDB', value: 7, category: 'Database' },
	{ name: 'AWS S3', value: 7, category: 'Database' },
	{ name: 'MongoDB', value: 3, category: 'Database' },
	{ name: 'LDAP', value: 2, category: 'Database' },
	{ name: 'Relational Databases', value: 4, category: 'Database' },
	{ name: 'ERDs', value: 5, category: 'Database' },

	// Dev Ops
	{ name: 'Continuous Integration (CI) & deployment (CD)', value: 6, category: 'Dev Ops' },
	{ name: 'GitHub', value: 8, category: 'Dev Ops' },
	{ name: 'Automated Testing', value: 7, category: 'Dev Ops' },

	// Project Management
	{ name: 'Git', value: 8, category: 'Project Management' },
	{ name: 'Slack', value: 8, category: 'Project Management' },
	{ name: 'Notion', value: 8, category: 'Project Management' },
	{ name: 'Rally', value: 2, category: 'Project Management' },
	{ name: 'Agile/SCRUM', value: 8, category: 'Project Management' },
	{ name: 'SDLC', value: 7, category: 'Project Management' },

	// IDEs
	{ name: 'VS Code', value: 9, category: 'IDEs' },
	{ name: 'Visual Studio', value: 5, category: 'IDEs' },
	{ name: 'GameMaker: Studio', value: 7, category: 'IDEs' },
	{ name: 'Unity', value: 3, category: 'IDEs' },

	// Networking
	{ name: 'DNS configuration', value: 6, category: 'Networking' },
	{ name: 'REST APIs', value: 7, category: 'Networking' },
	{ name: 'Routers', value: 6, category: 'Networking' },
	{ name: 'Subnetting', value: 2, category: 'Networking' },

	// Tools
	{ name: 'Figma', value: 4, category: 'Tools' },
	{ name: 'Canva', value: 5, category: 'Tools' },
	{ name: 'Adobe Fireworks', value: 8, category: 'Tools' },
	{ name: 'Adobe Illustrator', value: 3, category: 'Tools' },
	{ name: 'Adobe Photoshop', value: 4, category: 'Tools' },
	{ name: 'Google Analytics', value: 6, category: 'Tools' },
	{ name: 'Heroku', value: 9, category: 'Tools' },
	{ name: 'Vercel', value: 8, category: 'Tools' },
	{ name: 'Render.com', value: 4, category: 'Tools' },
	{ name: 'Algolia', value: 7, category: 'Tools' },
	{ name: 'ChatGPT', value: 8, category: 'Tools' },
	{ name: 'Postmark', value: 7, category: 'Tools' },

	// Office 365
	{ name: 'Microsoft Azure', value: 6, category: 'Office 365' },
	{ name: 'MicrosoftnPowerBI', value: 7, category: 'Office 365' },
	{ name: 'Microsoft Dataverse (CDS)', value: 7, category: 'Office 365' },
	{ name: 'Microsoft Graph API', value: 7, category: 'Office 365' },
	{ name: 'Microsoft Power Automate', value: 9, category: 'Office 365' },
	{ name: 'Microsoft Sharepoint', value: 5, category: 'Office 365' },
	{ name: 'Microsoft Excel', value: 7, category: 'Office 365' },
	{ name: 'Microsoft Word', value: 7, category: 'Office 365' },
	{ name: 'Microsoft PowerPoint', value: 9, category: 'Office 365' },

	// Dynamics 365 CE
	{ name: 'WebAPI', value: 8, category: 'Dynamics 365 CE' },
	{ name: 'XrmToolbox', value: 9, category: 'Dynamics 365 CE' },
	{ name: 'Custom Web Resources', value: 9, category: 'Dynamics 365 CE' },
	{ name: 'FetchXML', value: 7, category: 'Dynamics 365 CE' },
	{ name: 'Dataverse (CDS)', value: 7, category: 'Dynamics 365 CE' },
	{ name: 'Power Apps', value: 7, category: 'Dynamics 365 CE' },

	// Operating Systems
	{ name: 'Windows', value: 9, category: 'Operating Systems' },
	{ name: 'Mac', value: 9, category: 'Operating Systems' },

	// 3D
	{ name: '3DS Max', value: 2, category: '3D' },
	{ name: 'Sketchup', value: 4, category: '3D' },
	{ name: 'UV mapping', value: 3, category: '3D' },
	{ name: 'OpenGL', value: 2, category: '3D' },

	// Other
	{ name: 'Object-Oriented Programming (OOP)', value: 8, category: 'Other' },
	{ name: 'Inheritance', value: 8, category: 'Other' },
	{ name: 'Abstraction', value: 8, category: 'Other' },

	// Soft Skills	
	{ name: 'Communication', value: 7, category: 'Soft Skills' },
	{ name: 'Teamwork', value: 8, category: 'Soft Skills' },
	{ name: 'Leadership', value: 8, category: 'Soft Skills' },
	{ name: 'Problem-Solving', value: 8, category: 'Soft Skills' },
	{ name: 'Time Management', value: 8, category: 'Soft Skills' },
	{ name: 'Adaptability', value: 9, category: 'Soft Skills' },
	{ name: 'Critical Thinking', value: 7, category: 'Soft Skills' },
	{ name: 'Emotional Intelligence', value: 7, category: 'Soft Skills' },
	{ name: 'Conflict Resolution', value: 6, category: 'Soft Skills' },
	{ name: 'Active Listening', value: 8, category: 'Soft Skills' },
	{ name: 'Mentoring', value: 8, category: 'Soft Skills' },
	{ name: 'Public Speaking', value: 5, category: 'Soft Skills' },
	{ name: 'Decision Making', value: 7, category: 'Soft Skills' },
	{ name: 'Creativity', value: 9, category: 'Soft Skills' },
	{ name: 'Work Ethic', value: 9, category: 'Soft Skills' },
	{ name: 'Organization', value: 8, category: 'Soft Skills' },

	// Personal
	{ name: 'Tennis', value: 5, category: 'Personal' },
	{ name: 'Guitar', value: 3, category: 'Personal' },
	{ name: 'Piano', value: 8, category: 'Personal' },
	{ name: 'DIY', value: 6, category: 'Personal' },
	{ name: 'Gardening', value: 2, category: 'Personal' },
	{ name: 'Zumba', value: 0, category: 'Personal' },
]