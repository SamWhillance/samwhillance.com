"use client"

import { ChevronDown, ChevronRight } from 'lucide-react';

import Image from 'next/image';
import { useState } from 'react';

interface CollapseProps {
    children: React.ReactNode;
    title: string;
    image: string;
    line1: string;
    line2: string;
}

export function Collapse({ image, title, line1, line2, children }: CollapseProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border rounded-md border-gray-700 mb-1 min-h-24">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-8 w-full p-4 hover:bg-gray-800 rounded-md justify-start min-h-24"
            >
                {isOpen ? (
                    <ChevronDown className="h-8 w-8" />
                ) : (
                    <ChevronRight className="h-8 w-8" />
                )}

                <div className="flex items-center flex-row gap-8 justify-between w-full">
                    <div className="flex flex-col">
                        <Image src={image} alt={title} width={64} height={64} className="rounded-xl" />
                    </div>

                    <span>{title}</span>
                    <span className="text-lg text-white/75">{line1}</span>
                    <span className="text-lg text-white/75">{line2}</span>
                </div>
            </button>

            {isOpen && (
                <div className="flex flex-col w-full p-8">
                    {children}
                </div>)}
        </div>
    );
}
