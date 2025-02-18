import ButtonContact from "./button_contact";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav_link";

export default function Nav() {

    return (
        <div className="flex flex-col md:flex-row m-8 gap-8 text-black justify-between">
            <div className="flex">
                <Link href="/" className="mr-4 w-16">
                    <Image
                        className="rounded-full shadow-lg"
                        src="/sam_real.jpg"
                        alt="Sam Whillance"
                        title="Sam Whillance"
                        width={64}
                        height={0}
                        priority
                    />
                </Link>
                <div id="sam_whillance" className="md:hidden flex flex-nowrap whitespace-nowrap text-2xl font-bold text-black mt-auto mb-auto">
                    Samuel Whillance
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 flex-wrap">
            <NavLink href="/experience">Experience</NavLink>
                <NavLink href="/skills">Skills</NavLink>
                <NavLink href="/education">Education</NavLink>
                <NavLink href="/about">About</NavLink>
            </div>

            <div className="w-full md:w-auto flex">
                <ButtonContact>Contact</ButtonContact>
            </div>

        </div>
    )
}