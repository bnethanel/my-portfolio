import React from 'react'
import { StackCard } from "./StackCard";

const tech = [
    { name: "Sass", src: "/images/sass.png" },
    { name: "React", src: "/icons/react-logo.svg" },
    { name: 'Tailwind', src: '/images/tailwind.png' },
    { name: 'Node', src: '/icons/node-logo.svg' },
    { name: 'Css', src: '/icons/css-logo.svg' },
    { name: 'Next', src: '/icons/next-logo.svg' },
    { name: 'Js', src: '/icons/js-logo.svg' },
    { name: 'Git', src: '/icons/git-logo.svg' },
    { name: 'Html', src: '/icons/html-logo.svg' },
    { name: 'Mongo', src: '/icons/mongo-logo.svg' },
]

export function Stack() {
    return (
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 justify-items-center lg:grid-cols-10 gap-4 mt-15 ">
            {tech.map((item) => (
                <StackCard key={item.name} name={item.name} src={item.src} />
            ))}
        </div>
    )
}

