import React from 'react'
import Image from 'next/image'

export function Footer() {
    return (
        <div className='max-w-7xl mx-auto w-full px-6 mt-25 scroll-mt-20 flex flex-col items-center justify-center'>
            <Image
                src='/images/next-logo.png'
                alt={`next logo`}
                width={60}
                height={60}
                className="mb-5"
            />
            <div className='border-t border-gray-400 w-full flex items-center py-8 text-lg justify-between'>
                <p>© Nate Buz. All rights reserved.</p>
                <div className='flex gap-6'>
                    <a href='https://github.com/bnethanel' title='Github link' >
                        <Image
                            src='/icons/github-logo.svg'
                            alt={`github logo`}
                            width={25}
                            height={25}
                            className='cursor-pointer hover:scale-110 hover:rotate-10 transition duration-100 ease-in-out'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/nethanel-buznah-454599243/' title='Linkedin link' >
                        <Image
                            src='/icons/linkedin-logo.svg'
                            alt={`linkedin logo`}
                            width={25}
                            height={25}
                            className='cursor-pointer hover:scale-110 hover:rotate-10 transition duration-100 ease-in-out'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
