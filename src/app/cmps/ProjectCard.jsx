import React from 'react'
import Image from 'next/image'

export default function ProjectCard({ name, src, description, shortDescription, githubLink, projectLink }) {
    return (
        <div
            className="group relative w-full h-full overflow-hidden 
                 px-5 py-2 border border-gray-200 rounded-xl shadow-sm
                 hover:border-gray-400 hover:shadow-md hover:scale-105 hover:bg-black/70
                 transition duration-500 ease-in-out flex items-center justify-center"
        >
            <Image
                src={src}
                alt={`${name} logo`}
                width={300}
                height={300}
                className="transition duration-200 ease-in-out group-hover:blur-sm"
            />

            <div
                className="absolute inset-0 z-20 px-12 leading-relaxed py-5 text-start
                   opacity-0 -translate-y-30
                   text-white text-base font-semibold
                   transition duration-500  overflow-hidden
                   group-hover:opacity-100 group-hover:translate-y-0"
            >
                {description}
            </div>

            <div
                className="absolute inset-0 z-20 flex justify-center items-end mb-3
                   opacity-0 translate-y-30 
                   transition duration-500 overflow-hidden
                   group-hover:opacity-100 group-hover:translate-y-0"
            >
                <div className="w-10/12 max-w-md bg-white/95 rounded-lg shadow p-5 text-gray-900">
                    <div className="flex items-center justify-between">
                        <div className="project-info">
                            <h2 className="text-lg font-semibold">{name}</h2>
                            <p className="text-sm text-gray-600">{shortDescription}</p>
                        </div>
                        <div className='project-links flex gap-5'>
                            <a href={projectLink} title='Project link' className='cursor-pointer hover:scale-110 hover:rotate-10 transition duration-100 ease-in-out'>
                                <Image
                                    src='/icons/send-logo.svg'
                                    alt={`send logo`}
                                    width={25}
                                    height={25}
                                    className=""
                                />
                            </a>
                            <a href={githubLink} title='Github link' className='cursor-pointer hover:scale-110 hover:rotate-10 transition duration-100 ease-in-out'>
                                <Image
                                    src='/icons/github-logo.svg'
                                    alt={`github logo`}
                                    width={25}
                                    height={25}
                                    className=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
