import React from 'react'
import Reveal from './Reveal';
export function Top() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center gap-30 min-h-screen 
        max-md:flex-col max-md:items-center max-md:gap-20 max-md:pt-30">

            <div className='flex flex-col items-start
                            max-md:items-center'>
                <Reveal delay={0} once={false}><h2 className={`text-2xl mb-5 text-blue-600 `}>Hello! I'm</h2></Reveal>
                <Reveal delay={200} once={false}><h1 className={`text-6xl font-bold text-gray-700`}>Nate <span className='text-blue-500 underline decoration-4 decoration-blue-200 underline-offset-5'>Buz</span></h1></Reveal>
                <Reveal delay={400} once={false}>
                    <p className='mt-5 font-light text-3xl max-md:text-center max-sm:text-2xl'>Fullstack / Front End Developer</p>
                    <p className='mt-5 text-1xl max-md:text-center'>Designing and developing elegant web solutions that leave a lasting impression.</p>
                </Reveal>
                <Reveal delay={400} once={false}><a className='px-10 py-3 border rounded-full border-gray-500 flex items-center mt-10'>My Resume</a></Reveal>
            </div>
            <Reveal delay={600} once={false}>
                <div className='bg-white border border-gray-200 p-6 rounded-2xl shadow w-md hover:shadow-xl hover:-translate-y-1 duration-300 max-sm:text-sm max-lg:w-full'>
                    <div className='code-block-header flex justify-between mb-6'>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-red-500 transition-transform duration-200 ease-in-out hover:scale-120'></div>
                            <div className='w-3 h-3 rounded-full bg-yellow-500 transition-transform duration-200 ease-in-out hover:scale-120'></div>
                            <div className='w-3 h-3 rounded-full bg-green-500 transition-transform duration-200 ease-in-out hover:scale-120'></div>
                        </div>
                        <p className='text-s text-gray-500'>Nate Buz</p>
                    </div>
                    <div className='code-block-body '>
                        <div className='text-green-600 mb-1'>/ / Fullstack Developer</div>
                        <div className='mb-1'>
                            <span className='text-blue-600'>const </span>
                            <span className='text-blue-500'>developer </span>
                            <span className='text-gray-500'>= </span>
                            <span className='text-yellow-500'>{'{'}</span>
                        </div>
                        <div className='pl-6 mb-1'>
                            <span className='text-blue-400'>name: </span>
                            <span className='text-orange-500'>'Nate Buz' </span>
                            <span className='text-gray-500'>,</span>
                        </div>
                        <div className='pl-6 mb-1'>
                            <span className='text-blue-400'>skills: </span>
                            <span className='text-purple-500'>{'['} </span>
                            <span className='text-orange-500'>'React' </span>
                            <span className='text-gray-500'>,</span>
                            <span className='text-orange-500'>'Node.js' </span>
                            <span className='text-gray-500'>,</span>
                            <span className='text-orange-500'>'MongoDB' </span>
                            <span className='text-purple-500'>{']'} </span>
                            <span className='text-gray-500'>,</span>
                        </div>
                        <div className='pl-6 mb-1'>
                            <span className='text-blue-400'>hobbies: </span>
                            <span className='text-purple-500'>{'['} </span>
                            <span className='text-orange-500'>'Gaming' </span>
                            <span className='text-gray-500'>,</span>
                            <span className='text-orange-500'>'Reading' </span>
                            <span className='text-gray-500'>,</span>
                            <span className='text-orange-500'>'Cooking' </span>
                            <span className='text-purple-500'>{']'} </span>
                            <span className='text-gray-500'>,</span>
                        </div>
                        <div className='pl-6 mb-1'>
                            <span className='text-blue-400'>motto: </span>
                            <span className='text-orange-500'>'Build, break, learn, repeat.' </span>
                        </div>
                        <div className='mb-1'>
                            <span className='text-yellow-500'>{'} '}</span>
                            <span className='text-gray-500'>{';'}</span>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>

    )
}
