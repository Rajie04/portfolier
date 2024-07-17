/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import SectionTitle from './SectionTitle'
import { headshot } from '@/public/assets'
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
        <SectionTitle title="about me" />
        <div className='flex flex-col lgl:flex-row gap-12 lgl:gap-32'>
            <div className='w-full lgl:w-2/3 text-[18px] md:text-pg text-textDark font-medium flex flex-col gap-6'>
                <p>
                    I'm currently an Undergraduate Research Assistant at the University of Oklahoma, working under Dr. Samuel Cheng. I'm also the Operations Director of Hacklahoma, Oklahoma's largest hackathon!
                </p>
                <p>Here are a few technologies I've been using recently:</p>
                <ul className='max-w-[450px] text-[18px] font-titleFont grid grid-cols-2 gap-2 mt-[-10px]'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen mb-1'>
                            <FaAngleRight />
                        </span>
                        JavaScript
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen mb-1'>
                            <FaAngleRight />
                        </span>
                        Python
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen mb-1'>
                            <FaAngleRight />
                        </span>
                        React Native
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen mb-1'>
                            <FaAngleRight />
                        </span>
                        React.js
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen mb-1'>
                            <FaAngleRight />
                        </span>
                        Next.js
                    </li>
                </ul>
                <p>
                    Outside of work and studies, I enjoy playing and watching basketball, watching anime, and going to new coffee shops! {"(*^o^*)"}
                </p>
            </div>
            <div className='flex justify-center '>
                <Image 
                 className='rounded-lg max-w-[75%] mdl:max-w-[50%] lgl:max-w-[100%]  h-full object-cover hover:-translate-y-2 transform duration-300'
                 src={headshot}
                 alt="Headshot"
                />
            </div>
        </div>
    </section>
  )
}

export default About