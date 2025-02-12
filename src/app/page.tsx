import ContentContainer from '../components/content_container'
import Image from 'next/image'
import PageContainer from '../components/page_container'
import TreeLine from '../components/tree_line'

export default function Home() {

  return (
    <PageContainer>
      <ContentContainer>


        <div className="relative flex flex-col gap-4 justify-center items-start md:items-center m-4 tracking-wider">

          <div className="text-3xl font-bold flex flex-col items-start md:items-center gap-2">
            <span className="text-2xl text-white/65 -rotate-6">Your next</span>
            <span className="text-5xl">Full Stack</span>
            <span className="font-lightest text-code tracking-tight">{'<Software Engineer />'}</span>
          </div>
          {/* <p className="text-lg">Build <span className="italic font-bold">Fast</span>. Build <span className="text-cyan-400 font-bold">Smart</span>.</p> */}

          <br />

          <div className="flex flex-col pl-4">
            <TreeLine isFirst>Design</TreeLine>
            <div className="pl-4">
              <TreeLine>Develop</TreeLine>
              <div className="pl-4">
                <TreeLine>Database</TreeLine>
                <div className="pl-4">
                  <TreeLine>Debug</TreeLine>
                  <div className="pl-4">
                    <TreeLine>Deploy</TreeLine>
                    <div className="pl-4">
                      <TreeLine>Deliver</TreeLine>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-around items-center mt-12 w-full">
            <Image src="/wethrift.png" alt="WeThrift" width={100} height={100} className="rounded-lg" />
            <Image src="/mphn.png" alt="WeThrift" width={100} height={100} />
            <Image src="/ca.png" alt="WeThrift" width={100} height={100} />
          </div>

        </div>
      </ContentContainer>
    </PageContainer>
  )
}
