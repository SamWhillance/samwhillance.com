import ContentContainer from '../../components/content_container'
import Image from 'next/image'
import PageContainer from '../../components/page_container'

export default function About() {

	return (
		<PageContainer>
			<ContentContainer>
				<div className="flex flex-col gap-4 p-8 text-lg justify-center items-center text-left md:text-center">
					<p>I'm an ambitious self-starter, innovator, automator and ideas man who is always seeking his next challenge.</p>

					<p>Devoted husband and father of 4. When I'm not playing tennis, I'm fixing Breville coffee machines in my shed.</p>

					<div className="flex flex-row gap-2 items-center">
						<Image src="/breville.jpg" alt="Breville" width={50} height={100} className="rounded-full mr-4" />
						<a href="https://bendigobreville.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-800">Bendigo Breville Repairs & Service</a>
					</div>

					<div className="flex justify-center w-full mt-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[650px]">
							<GalleryImage src="/tennis.png" />
							<GalleryImage src="/penguin.png" />
							<GalleryImage src="/sports.png" />
							<GalleryImage src="/drink.png" />
						</div>
					</div>

					<div className="flex flex-col gap-2 items-center mt-12">
						<h2 className="text-2xl font-bold mb-4">Who I follow</h2>
						<div className="flex flex-row flex-wrap gap-12 items-center text-center justify-center">
							<FollowImage name="Fireship" src="/fireship.jpg" href="https://www.youtube.com/@Fireship" alt="Fireship" />
							<FollowImage name="Theo" src="/theo.jpg" href="https://www.youtube.com/@t3dotgg" alt="Theo" />
							<FollowImage name="Levels.io" src="/levels_io.jpg" href="https://x.com/levelsio" alt="Levels.io" />
							<FollowImage name="Matt Vid Pro" src="/mattvid.jpg" href="https://www.youtube.com/@MattVidPro" alt="Matt Vid Pro" />
							<FollowImage name="WDS" src="/web_dev_simplified.jpg" href="https://www.youtube.com/@WebDevSimplified" alt="WebDevSimplified" />
							<FollowImage name="Kevin Powell" src="/kevin.jpg" href="https://www.youtube.com/@KevinPowell" alt="Kevin Powell" />
						</div>
					</div>
				</div>
			</ContentContainer>
		</PageContainer>
	)
}

const FollowImage = ({ name, src, href, alt }) => {
	return (
		<div className="flex flex-col gap-2 items-center">
			<a href={href} target="_blank" rel="noopener noreferrer">
				<Image src={src} alt={alt} width={64} height={64} className="rounded-full" />
			</a>
			<span className="text-sm font-bold">{name}</span>
		</div>
	)
}

const GalleryImage = ({ src }) => {
	return (
		<Image src={src} alt="Image" width={300} height={300} className="rounded-xl h-[300px] object-cover" />
	)
}