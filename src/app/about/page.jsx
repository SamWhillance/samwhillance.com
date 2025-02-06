import ContentContainer from '../../components/content_container'
import Image from 'next/image'
import PageContainer from '../../components/page_container'

export default function About() {

    return (
        <PageContainer>
            <ContentContainer>
                <div className="flex flex-col gap-4 p-8 text-lg justify-center items-center text-center">
                    <p>I'm an ambitious self-starter, innovator, automator and ideas man who is always seeking his next challenge (sometimes too soon).</p>

                    <p>When I'm not playing tennis, I'm fixing Breville coffee machines in my shed.</p>

                    <div className="flex flex-row gap-2 items-center">
                        <Image src="/breville.jpg" alt="Breville" width={50} height={100} className="rounded-full mr-4" />

                        <a href="https://www.facebook.com/profile.php?id=100083324981791" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-800">Bendigo Breville Repairs & Service</a>
                    </div>

                    <div className="flex flex-row gap-4 w-full items-center justify-center flex-wrap mt-4">
                        <GalleryImage src="/tennis.png" />
                        <GalleryImage src="/penguin.png" />
                        <GalleryImage src="/sports.png" />
                        <GalleryImage src="/drink.png" />
                    </div>

                    <p>The MacBook Air 15" Silicon is the best laptop ever made.</p>

                </div>
            </ContentContainer>
        </PageContainer>
    )
}

const GalleryImage = ({ src }) => {
    return (
        <Image src={src} alt="Image" width={300} height={300} className="rounded-xl h-[300px] object-cover" />
    )
}