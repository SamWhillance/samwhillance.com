import Footer from './footer'
import Nav from './nav'

export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen m-2">
            <div id="page" className="flex flex-col min-h-screen rounded-2xl">
                <div className="ml-auto mr-auto">
                    <Nav />
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    )
}