import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-gray-200 px-20">
            <div className='mx-auto w-full px-6 h-20 flex items-center justify-between'>
                <Link href="/">
                    <Image
                        src="/images/next-logo.png"
                        alt="Nethanel"
                        width={60}
                        height={60}
                        priority />
                </Link>
                <nav className="flex gap-4 text-m">
                    <Link href="#home" className="hover:underline">Home</Link>
                    <Link href="#about" className="hover:underline">About</Link>
                    <Link href="#projects" className="hover:underline">Projects</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </nav>
            </div>

        </header>
    )
}
