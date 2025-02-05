import ContentContainer from './components/content_container'
import PageContainer from './components/page_container'

export default function Home() {

  return (
    <PageContainer>
      <ContentContainer>
        <div className="flex flex-col gap-4 justify-center items-center m-8">
          <h1 className="text-4xl font-bold"><span className="text-white/85">Your next</span> Full Stack Software Engineer.</h1>
          <p className="text-lg">I Build <span className="italic font-bold">Fast</span>. I Build <span className="text-cyan-400 font-bold">Smart</span>.</p>
        </div>
      </ContentContainer>
    </PageContainer>
  )
}
