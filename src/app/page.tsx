import Footer from './components/footer'
import Image from "next/image";
import Nav from './components/nav'

export default function Home() {

  return (
    <div className="flex flex-col h-screen m-2">
      <div id="page" className="flex flex-col h-screen rounded-2xl">
        <Nav />
        <div className="flex flex-col bg-black h-full m-2 rounded-xl p-8 text-white">
          <div className="flex flex-col gap-4 justify-center items-center m-8">
            <h1 className="text-4xl font-bold">Your next full stack software engineer.</h1>
            <p className="text-lg">Build Fast. Build Smart.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
