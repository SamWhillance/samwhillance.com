import ButtonContact from "./button_contact";
import Image from "next/image";
import NavLink from "./nav_link";

export default function Nav() {

    return (
        <div className="flex flex-row m-8 gap-8 text-white justify-between">

            <div className="flex">
                <Image
                    className="dark:invert rounded-full shadow-lg"
                    src="/sam_luxury.png"
                    alt="Sam Whillance"
                    title="Sam Whillance"
                    width={64}
                    height={0}
                    priority
                />
                <div className="flex flex-nowrap whitespace-nowrap p-2 m-auto text-lg font-bold text-black">SW</div>
            </div>

            <div className="flex gap-4">
                <NavLink href="/experience">Experience</NavLink>
                <NavLink href="/skills">Skills</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/about">About</NavLink>
            </div>

            <div className="flex">
                <ButtonContact>Contact</ButtonContact>
            </div>

        </div>
    )
}