"use client";

import { Menu, X } from "lucide-react";

import ButtonContact from "./button_contact";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav_link";
import { useState } from "react";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-card-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link href="/" className="group">
                            <div className="profile-image animate-pulse-slow">
                                <Image
                                    className="rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105"
                                    src="/sam_real.jpg"
                                    alt="Sam Whillance"
                                    title="Sam Whillance"
                                    width={48}
                                    height={48}
                                    priority
                                />
                            </div>
                        </Link>
                        <div className="ml-3">
                            <Link href="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors duration-300">
                                Samuel Whillance
                            </Link>
                            <p className="text-sm text-text-muted">Full Stack Developer</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink href="/experience">Experience</NavLink>
                        <NavLink href="/skills">Skills</NavLink>
                        <NavLink href="/education">Education</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <div className="ml-4">
                            <ButtonContact>Contact</ButtonContact>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden glass-card m-4 animate-fade-in">
                    <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                        <NavLink href="/experience">Experience</NavLink>
                        <NavLink href="/skills">Skills</NavLink>
                        <NavLink href="/education">Education</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <div className="pt-2">
                            <ButtonContact>Contact</ButtonContact>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}