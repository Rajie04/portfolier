import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { hacklahoma, msa, placeholder } from '@/public/assets'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Activities = () => {
  return (
    <section id='activities' className='max-w-contentContainer mx-auto lgl:px-20 py-24'>
        <SectionTitle title="activities" />
        {/* Hacklahoma */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a href="https://hacklahoma.org/" className='w-full xl:w-1/2 h-auto relative group'>
                    <div>
                        <Image 
                        // xl:max-w-full max-w-[70%]
                            className='w-full h-full object-contain'
                            src={hacklahoma}
                            alt='Hacklahoma Picture'
                        />
                    </div>
                </a>
                {/* xl:mt-0 mt-[-50px] */}
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-center items-end text-right xl:-ml-16 z-10'> 
                    <p className='font-titleFont text-textGreen text-lg tracking-wide'>Hacklahoma</p>
                    <h3 className='text-2xl font-bold'>Operations Director</h3>
                    <p className='bg-[#112240] text-lg md:text-base p-2 md:p-6 rounded-md'>
                    Led and managed all logistical operations, resulting in a hackathon with over 170 participants and over $5,000 in prizes. 
                    Directed a team of 7 members, and coordinated communication between 4 teams and 12 sponsors to ensure project execution.
                    </p>
                    <div className='flex flex-row items-center gap-4 text-lg'>
                        Check out some of the projects from this year! 
                        <a href="https://hacklahoma-2024.devpost.com/" className='hover:text-textGreen hover:-translate-y-1 transform duration-300' target='_blank'>
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* OU AI/ML */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
                <a href="https://www.instagram.com/ou.artificial/" className='w-full xl:w-1/2 h-auto relative group'>
                    <div className='flex justify-end'>
                        <Image 
                            className='w-full h-full object-contain'
                            src={placeholder}
                            alt='OU AI/ML Picture'
                        />
                    </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-center text-right z-10'>
                    <p className='font-titleFont text-textGreen text-lg tracking-wide'>OU AI / ML</p>
                    <h3 className='text-2xl font-bold'>Operations Officer</h3>
                    <p className='bg-[#112240] text-lg md:text-base p-2 md:p-6 xl:-mr-16 rounded-md'>
                    Coordinate workshops and speaker events annually, enhancing AI/ML learning for over 300 club members.
                    Expanding club membership through promotions and collaboration with university departments.
                    </p>
                    <div className='flex flex-row items-center gap-4 text-lg justify-end '>
                        Check out our Instagram page! 
                        <a href="https://www.instagram.com/ou.artificial/" className='hover:text-textGreen hover:-translate-y-1 transform duration-300' target='_blank'>
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* OU MSA */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a href="https://muslimsofou.wixsite.com/oumsa" className='w-full xl:w-1/2 h-auto relative group'>
                    <div>
                        <Image 
                            className='w-full h-full object-contain'
                            src={msa}
                            alt='OU MSA Picture'
                        />
                    </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-center items-end text-right xl:-ml-16 z-10'>
                    <p className='font-titleFont text-textGreen text-lg tracking-wide'>OU MSA</p>
                    <h3 className='text-2xl font-bold'>Public Relations Chair</h3>
                    <p className='bg-[#112240] text-lg md:text-base p-2 md:p-6 rounded-md'>
                    Managed  MSA's social media platforms, creating engaging content, and fostering online engagement to increase our reach and impact.
                    </p>
                    <div className='flex flex-row items-center gap-4 text-lg'>
                        Check out our website! 
                        <a href="https://muslimsofou.wixsite.com/oumsa" className='hover:text-textGreen hover:-translate-y-1 transform duration-300' target='_blank'>
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Activities