import Footer from './footer'
import Image from "next/image";
import Nav from './nav'

export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen m-2">
            <div id="page" className="flex flex-col h-screen rounded-2xl">
                <Nav />
                {children}
            </div>

            <Footer />
        </div>
    )
}