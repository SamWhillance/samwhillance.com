import ContentContainer from '../components/content_container'
import Image from 'next/image'
import PageContainer from '../components/page_container'
import TreeLine from '../components/tree_line'

export default function Home() {

  return (
    <PageContainer>
      <ContentContainer>


        <div className="relative flex flex-col gap-8 justify-center items-start md:items-center m-4 tracking-wider">

          <div className="text-3xl font-bold flex flex-col items-start md:items-center gap-2">
            <span className="text-lg text-white/65 translate-y-3">Your next</span>
            <span className="text-5xl md:text-6xl">Full Stack</span>
            <span className="text-2xl md:text-3xl font-lightest text-code tracking-tight">{'<Software Engineer />'}</span>
          </div>
          {/* <p className="text-lg">Build <span className="italic font-bold">Fast</span>. Build <span className="text-cyan-400 font-bold">Smart</span>.</p> */}

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

          <div className="text-md md:text-lg flex flex-col gap-8 p-4 md:p-8">
      <p>As a full-stack web developer, I specialize in creating robust and scalable web applications using modern JavaScript technologies. With extensive expertise in React, Node.js, and the broader JavaScript ecosystem, I bring ideas to life through clean, efficient code and intuitive user interfaces.</p>
      <p>
My technical foundation spans the full development stack, from crafting responsive front-end experiences with HTML5, CSS3, and modern frameworks like Tailwind CSS, to implementing robust back-end solutions using Node.js and various cloud services. I'm particularly skilled in Microsoft technologies, having developed complex enterprise solutions using Office 365, Dynamics 365 CE, and the Power Platform suite. My experience extends to database design and management, API development, and system integration, ensuring seamless functionality across complex applications.
      </p>
      <p>
        What sets me apart is my commitment to combining technical excellence with strong project management and communication skills. I thrive in collaborative environments, bringing not just technical expertise but also leadership, mentoring capabilities, and a strong dedication to delivering high-quality solutions that exceed client expectations.
      </p>
      <p>
        Whether it's architecting new systems, optimizing existing applications, or leading development teams, I approach each project with creativity, analytical thinking, and a focus on delivering measurable results.
      </p>
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
