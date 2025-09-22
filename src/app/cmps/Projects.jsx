import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
    {
        title:"Stupify",
        name: "Stupify",
        src: "/images/stupify-logo.png",
        description: 'As part of a three-person team, I co-developed Stupify, a full-stack Spotify-inspired music streaming web application built entirely from scratch. My responsibilities included implementing frontend components, handling API integration, and contributing to the overall architecture and UI/UX design. We worked under tight deadlines and emphasized collaboration, scalability, and performance throughout the project lifecycle.',
        shortDescription: 'Fullstack app built with React',
    },
    {
        title:"My portfolio",
        name: "My-logo",
        src: "/images/next-logo.png",
        description: 'A modern single-page website built with Next.js and Tailwind CSS, designed for speed, responsiveness, and clean user experience. The site showcases smooth navigation, scalable components, and a minimalist aesthetic, making it both performant and easy to maintain.',
        shortDescription: 'Website built with Next.js and Tailwind',
    },
]

export function Projects() {
    return (
        <div id='projects' className='max-w-6xl mx-auto px-6 py-6 flex flex-col w-full scroll-mt-20 min-h-[80vh]'>
            <h1 className='text-5xl text-start text-gray-700 font-bold mb-10'>
                <span className='underline underline-offset-15 decoration-blue-500'>Pro</span>jects
            </h1>
            <p className='text-gray-500 text-xl'>Some of the applications I’ve built, highlighting my skills across different technologies.</p>
            <div className='projects flex gap-5 mt-20'>
                {projects.map((item) => (
                    <ProjectCard key={item.name} name={item.name} src={item.src} description={item.description} title={item.title} shortDescription={item.shortDescription} />
                ))}
            </div>
        </div>

    )
}
