import ContentContainer from '../../components/content_container'
import Link from 'next/link'
import PageContainer from '../../components/page_container'
import TreeLine from '../../components/tree_line'

const ContactMethod = ({ title, value, href }: { title: string, value: string, href: string }) => (
    <div>
        <TreeLine isFirst><div className="text-sm -translate-y-0.25">{title}</div></TreeLine>
        <Link href={href} target="_blank">
            <div className="pl-4">
                <TreeLine><div className="text-sm text-blue-400 underline -translate-y-0.5">{value}</div></TreeLine>
            </div></Link>
    </div>
)

export default function Home() {

    return (
        <PageContainer>
            <ContentContainer>
                <div className="flex flex-col gap-4 justify-center items-start md:items-center m-4 tracking-wider">
                    <div className="text-3xl font-bold flex flex-col items-start md:items-center gap-2">
                        <h1 className="text-2xl mb-12">Contact Me</h1>
                        <div className="flex flex-col gap-8 pl-4">
                            <ContactMethod title="Email" value="samwhillance@gmail.com" href="mailto:samwhillance@gmail.com" />
                            {/* <ContactMethod title="Phone" value="+61 6838 5315" href="tel:+61468385315" /> */}
                            <ContactMethod title="LinkedIn" value="linkedin.com/in/samwhillance" href="https://www.linkedin.com/in/samwhillance/" />
                            <ContactMethod title="GitHub" value="github.com/samwhillance" href="https://github.com/samwhillance" />
                            <ContactMethod title="In person, year 1985" value="Twin Pines Mall, Hill Valley" href="https://maps.app.goo.gl/PseUJrFDBD7ENk4MA" />
                        </div>
                    </div>
                    <br />
                    <p className="text-lg">Build <span className="italic font-bold">Fast</span>. Build <span className="text-cyan-400 font-bold">Smart</span>.</p>
                </div>
            </ContentContainer>
        </PageContainer >
    )
}
