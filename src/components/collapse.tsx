"use client"

import { ChevronDown, ChevronRight } from 'lucide-react';

import Image from 'next/image';
import { useState } from 'react';

interface CollapseProps {
    image: string;
    h1: string | undefined;
    h2?: string | undefined;
    line1: string;
    line2: string | undefined;
    children: React.ReactNode;
    h1_link?: string;
}

export function Collapse({ image, h1, h2, line1, line2, children, h1_link }: CollapseProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border rounded-lg border-white/20 mb-1 min-h-24">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-2 md:p-4 hover:bg-black/10 rounded-md min-h-24"
            >
                <div className="grid grid-cols-[auto_1fr] gap-2 md:gap-8 items-center">
                    {isOpen ? (
                        <ChevronDown className="h-8 w-8" />
                    ) : (
                        <ChevronRight className="h-8 w-8" />
                    )}

                    <div className="flex flex-row gap-4 md:gap-8">
                        <div className="flex justify-center m-auto">
                            <Image src={image} alt={h1 || ''} width={64} height={64} className="rounded-md" />
                        </div>
                        <div className="grid md:grid-cols-[1fr_auto_auto] gap-2 md:gap-4 items-center w-full text-left">
                            <div className="flex flex-col leading-tight">
                                <span className="bold text-lg md:text-xl text-left font-bold tracking-tighter">{h1}</span>
                                <span className="text-black/80 text-left">{h2}</span>
                                <span className="block md:hidden mt-2 text-black/50 text-sm md:text-base text-left whitespace-nowrap">{line1}</span>
                            </div>
                            <span className="hidden md:block text-black/85 text-sm md:text-base text-left whitespace-nowrap">{line1}</span>
                            <span className="hidden md:block text-sm md:text-base text-black/75 text-left whitespace-nowrap">{line2}</span>
                        </div>
                    </div>
                </div>
            </button>

            {isOpen && (
                <div className="flex flex-col w-full p-4 md:p-8">
                    {/* <div className="block md:hidden m-2">
                        <Image src={image} alt={h1 || ''} width={64} height={64} className="rounded-xl mb-2" />
                    </div> */}
                    {h1_link && (
                        <a href={`https://www.linkedin.com/company/${h1_link}`} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center bg-black/10 p-2 rounded-md mb-4 hover:bg-black/20">
                            <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className="m-2" />
                            <span>View on LinkedIn</span>
                        </a>
                    )}
                    {children}
                </div>
            )}
        </div>
    );
}
