"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image"

export function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className={`fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-gray-200 px-20 max-md:px-5 max-sm:px-0 ${open ? "bg-white/80" : "bg-transparent"}`}>
            <div className='mx-auto w-full px-6 h-20 flex items-center justify-between'>
                <Link href="/">
                    <Image
                        src="/images/next-logo.png"
                        alt="Nethanel"
                        width={60}
                        height={60}
                        priority />
                </Link>
                <nav className="flex gap-4 text-m hidden md:flex">
                    <Link href="#home" className="hover:underline">Home</Link>
                    <Link href="#about" className="hover:underline">About</Link>
                    <Link href="#projects" className="hover:underline">Projects</Link>
                    <Link href="#contact" className="hover:underline">Contact</Link>
                </nav>
                <button
                    className="md:hidden inline-flex items-center justify-center rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >

                    <svg className={`h-6 w-6 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                    <svg className={`h-6 w-6 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div
                className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300
                ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <nav className="px-6 pb-4 pt-2 flex flex-col gap-3 text-base">
                    <Link onClick={() => setOpen(false)} href="#home" className="py-1">Home</Link>
                    <Link onClick={() => setOpen(false)} href="#about" className="py-1">About</Link>
                    <Link onClick={() => setOpen(false)} href="#projects" className="py-1">Projects</Link>
                    <Link onClick={() => setOpen(false)} href="#contact" className="py-1">Contact</Link>
                </nav>
            </div>

        </header>
    )
}
