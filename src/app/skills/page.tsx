"use client"

import { Brain, Search, Star } from 'lucide-react'

import ContentContainer from '../../components/content_container'
import PageContainer from '../../components/page_container'
import { useState } from 'react'

export default function Skills() {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

	const filteredSkills = skills.filter(skill =>
		skill.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
		(selectedCategory === null || skill.category === selectedCategory)
	)

	const groupedSkills = filteredSkills.reduce((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = []
		}
		acc[skill.category].push(skill)
		return acc
	}, {} as Record<string, Skill[]>)

	const categories = Array.from(new Set(skills.map(skill => skill.category)))

	return (
		<PageContainer>
			<div className="space-y-12">
				<section>
					<ContentContainer>
						<div className="space-y-8">
							<div className="space-y-2">
								<h1 className="text-4xl font-bold">
									<span className="gradient-text">Skills & Expertise</span>
								</h1>
								<div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
								<p className="text-text-muted max-w-2xl">
									A comprehensive overview of my technical skills, expertise, and proficiency levels across various domains.
								</p>
							</div>

							<div className="flex flex-col gap-8 w-full">
								<div className="glass-card p-6 animate-fade-in">
									<div className="flex flex-col md:flex-row gap-6 items-center">
										<div className="flex-shrink-0">
											<div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
												<Brain className="w-8 h-8 text-white" />
											</div>
										</div>
										<div className="flex-grow space-y-4">
											<h2 className="text-2xl font-bold">Search my brain 🧠</h2>
											<div className="relative">
												<input
													type="text"
													placeholder="Search skills..."
													value={searchQuery}
													onChange={(e) => setSearchQuery(e.target.value)}
													className="p-4 pl-12 border rounded-lg w-full bg-background border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
												/>
												<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
											</div>
										</div>
									</div>
								</div>

								<div className="animate-fade-in delay-100">
									<h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
									<div className="flex flex-wrap gap-2">
										<button
											onClick={() => setSelectedCategory(null)}
											className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
												selectedCategory === null
													? 'bg-primary text-white'
													: 'bg-gray-800 text-gray-300 hover:bg-gray-700'
											}`}
										>
											All Categories
										</button>
										{categories.map(category => (
											<button
												key={category}
												onClick={() => setSelectedCategory(category)}
												className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
													selectedCategory === category
														? 'bg-primary text-white'
														: 'bg-gray-800 text-gray-300 hover:bg-gray-700'
												}`}
											>
												{category}
											</button>
										))}
									</div>
								</div>

								<div className="space-y-12 animate-fade-in delay-200">
									{Object.entries(groupedSkills).length > 0 ? (
										Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
											<div key={category} className={`space-y-6 animate-fade-in delay-${(categoryIndex % 5) * 100}`}>
												<div className="flex items-center gap-3">
													<h2 className="text-2xl font-bold">{category}</h2>
													<div className="h-px flex-grow bg-gray-700"></div>
												</div>
												<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
													{categorySkills.sort((a, b) => b.value - a.value).map((skill) => (
														<div 
															key={skill.name} 
															className={`glass-card p-5 border-l-4 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg ${getSkillBorderColor(skill.value)}`}
														>
															<div className="flex flex-col gap-3 h-full">
																<div className="flex justify-between items-start">
																	<div className="flex-grow">
																		<h3 className="text-lg font-semibold flex items-center gap-2">
																			{skill.name}
																			{skill.new && (
																				<span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
																					New
																				</span>
																			)}
																		</h3>
																	</div>
																	<div className="flex items-center gap-1">
																		{Array.from({ length: Math.min(5, Math.ceil(skill.value / 2)) }).map((_, i) => (
																			<Star 
																				key={i} 
																				className={`w-4 h-4 ${i < Math.floor(skill.value / 2) ? 'text-yellow-400' : 'text-gray-600'}`} 
																				fill={i < Math.floor(skill.value / 2) ? 'currentColor' : 'none'} 
																			/>
																		))}
																	</div>
																</div>
																
																{skill.links && (
																	<div className="flex flex-wrap gap-2 mt-1">
																		{skill.links.map((link) => (
																			<a 
																				href={link} 
																				key={link} 
																				target="_blank" 
																				rel="noopener noreferrer" 
																				className="text-primary hover:text-primary-light text-sm flex items-center gap-1 transition-colors duration-300"
																			>
																				<span className="underline">{formatLink(link)}</span>
																			</a>
																		))}
																	</div>
																)}
																
																<div className="mt-auto pt-2">
																	<div className="flex items-center justify-between mb-1">
																		<span className="text-xs text-gray-400">Proficiency</span>
																		<span className="text-xs font-medium text-gray-300">{skill.value}/10</span>
																	</div>
																	<div className="w-full bg-gray-700 rounded-full h-2">
																		<div
																			className={`h-2 rounded-full ${getSkillProgressColor(skill.value)} transition-all duration-1000 ease-out`}
																			style={{ width: `${(skill.value / 10) * 100}%` }}
																		/>
																	</div>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										))
									) : (
										<div className="text-center py-12">
											<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4">
												<Search className="w-8 h-8 text-gray-400" />
											</div>
											<h3 className="text-xl font-medium mb-2">No skills found</h3>
											<p className="text-gray-400">
												Don't worry, I'm a quick learner 😊
											</p>
										</div>
									)}
								</div>
							</div>
						</div>
					</ContentContainer>
				</section>
			</div>
		</PageContainer>
	)
}

function getSkillBorderColor(value: number): string {
	if (value >= 8) return 'border-primary';
	if (value >= 6) return 'border-secondary';
	if (value >= 4) return 'border-blue-500';
	return 'border-gray-600';
}

function getSkillProgressColor(value: number): string {
	if (value >= 8) return 'bg-gradient-to-r from-primary to-secondary';
	if (value >= 6) return 'bg-secondary';
	if (value >= 4) return 'bg-blue-500';
	return 'bg-gray-500';
}

function formatLink(url: string): string {
	try {
		const domain = new URL(url).hostname.replace('www.', '');
		return domain;
	} catch {
		return url;
	}
}

type Skill = {
	name: string
	value: number
	category: string
	new?: boolean
	links?: string[]
}

const skills: Skill[] = [
	// Languages
	{ name: 'JavaScript', value: 9, category: 'Languages' },
	{ name: 'CSS', value: 9, category: 'Languages' },
	{ name: 'HTML', value: 9, category: 'Languages' },
	{ name: 'PHP', value: 2, category: 'Languages' },
	{ name: 'C', value: 2, category: 'Languages' },
	{ name: 'C++', value: 2, category: 'Languages' },
	{ name: 'C#', value: 2, category: 'Languages' },
	{ name: 'Java', value: 4, category: 'Languages' },
	{ name: 'Python', value: 3, category: 'Languages' },
	{ name: 'SQL', value: 4, category: 'Languages' },
	{ name: 'GML', value: 8, category: 'Languages' },

	// Web
	{ name: 'React', value: 9, category: 'Web' },
	{ name: 'Solid.js', value: 7, category: 'Web' },
	{ name: 'Node.js', value: 9, category: 'Web' },
	{ name: 'TypeScript', value: 7, category: 'Web', new: true },
	{ name: 'Angular', value: 5, category: 'Web' },
	{ name: 'Cloudflare', value: 7, category: 'Web' },
	{ name: 'Cloudflare (Workers)', value: 7, category: 'Web', new: true },
	{ name: 'Cloudflare (Queues)', value: 7, category: 'Web', new: true },
	{ name: 'jQuery', value: 8, category: 'Web' },
	{ name: 'JSX', value: 8, category: 'Web' },
	{ name: 'Docker', value: 3, category: 'Web' },
	{ name: 'NPM', value: 7, category: 'Web' },
	{ name: 'Azure', value: 4, category: 'Web' },
	{ name: 'WordPress', value: 5, category: 'Web' },
	{ name: 'Puppeteer', value: 7, category: 'Web' },
	{ name: 'Chrome Extensions', value: 7, category: 'Web' },
	{ name: 'Leaflet', value: 5, category: 'Web' },
	{ name: 'D3.js', value: 6, category: 'Web' },
	{ name: 'SEO', value: 5, category: 'Web' },
	{ name: 'SSG/SSR', value: 6, category: 'Web' },
	{ name: 'Design principles', value: 7, category: 'Web' },
	{ name: 'Web Performance', value: 7, category: 'Web' },

	// CSS
	{ name: 'Bootstrap', value: 7, category: 'Web' },
	{ name: 'Design', value: 7, category: 'Web' },
	{ name: 'Tailwind CSS', value: 7, category: 'Design & CSS', new: true, links: [ 'https://samwhillance.com', 'https://bendigobreville.com' ] },
	{ name: 'Material UI', value: 7, category: 'Design & CSS' },
	{ name: 'UX & UI', value: 7, category: 'Web' },
	{ name: 'Responsive design', value: 8, category: 'Web' },
	{ name: 'Inline Styles (SX)', value: 8, category: 'Web' },

	// API
	{ name: 'Express', value: 7, category: 'API' },
	{ name: 'REST APIs', value: 7, category: 'Networking' },
	{ name: 'OpenAI API', value: 6, category: 'API' },
	{ name: 'NestJS', value: 4, category: 'API', links: [ 'https://learn-nestjs-iota.vercel.app/' ], new: true },
	{ name: 'Apache', value: 3, category: 'Web' },
	{ name: 'Nginx', value: 3, category: 'Web' },
	{ name: 'Slack API', value: 4, category: 'API' },
	{ name: 'Stripe', value: 5, category: 'API', new: true },
	{ name: 'Swagger', value: 6, category: 'API', links: [ 'https://learn-nestjs-iota.vercel.app/' ] },

	// Database
	{ name: 'DynamoDB', value: 7, category: 'Database' },
	{ name: 'AWS S3', value: 7, category: 'Database' },
	{ name: 'Supabase (PostgreSQL)', value: 4, category: 'Database', new: true },
	{ name: 'Supabase (Auth)', value: 5, category: 'Database', new: true },
	{ name: 'Drizzle ORM', value: 3, category: 'Database', new: true },
	{ name: 'MongoDB', value: 3, category: 'Database' },
	{ name: 'LDAP', value: 2, category: 'Database' },
	{ name: 'SQLite', value: 3, category: 'Database' },
	{ name: 'Relational Databases', value: 4, category: 'Database' },
	{ name: 'ERDs', value: 5, category: 'Database' },

	// Dev Ops
	{ name: 'CI / CD', value: 6, category: 'Dev Ops' },
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
	{ name: 'Microsoft PowerBI', value: 7, category: 'Office 365' },
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