import React from 'react'
import Image from 'next/image'
import { Stack } from './Stack'

export function About() {
  return (
    <div id='about' className='max-w-6xl mx-auto px-6 py-6 flex flex-col w-full scroll-mt-20 min-h-[75vh] max-md:mt-10'>
      <h1 className='text-5xl text-start text-gray-700 font-bold mb-15 max-md:text-center'>
        <span className='underline underline-offset-10 decoration-blue-500'>Ab</span>out Me
      </h1>

      <div className='info-container flex gap-35 max-md:flex-col max-md:gap-10 max-md:items-center max-md:text-center'>
        <div className='about-me-container'>
          <h4 className='text-2xl text-blue-500 font-bold'>A bit about myself</h4>
          <p className='mt-5 text-gray-500 text-xl'>
            I’m a 24-year-old full-stack developer with expertise in building scalable, high-quality web applications. <br /> I completed an intensive 640-hour coding bootcamp, gaining solid experience in both front-end and back-end development. My work emphasizes clean architecture, efficient code, and maintainable solutions that turn ideas into fully functional applications.
          </p>
        </div>
          <Image
            src="/images/My-Photo2.png"
            alt="My photo"
            width={250}
            height={250}
            className="rounded-full"
          />
      </div>
      <Stack/>
    </div>
  )
}
