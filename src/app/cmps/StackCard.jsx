import React from 'react'
import Image from 'next/image'
import Reveal from './Reveal'


export function StackCard({ name, src, delay = 0, }) {
    return (
        <Reveal delay={delay}>
            <div
                className="px-5 py-2 border border-gray-200 rounded-xl shadow-sm
                 hover:border-gray-400 hover:shadow-md hover:scale-105
                 transition duration-200 ease-in-out
                 flex items-center justify-center bg-white
                 "
                title={name}
            >
                <Image
                    src={src}
                    alt={`${name} logo`}
                    width={50}
                    height={50}
                    className="rounded-full object-contain"
                />
            </div>
        </Reveal>
    )
}
