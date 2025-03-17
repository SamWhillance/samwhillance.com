import Nav from "./nav";
import Footer from "./footer";

interface PageContainerProps {
    children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <div id="page" className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-grow flex justify-center py-8 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}