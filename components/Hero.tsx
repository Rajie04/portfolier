/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {motion} from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto h-[90vh] py-10 mdl:py-24 flex flex-col justify-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        <motion.h3 initial={{y: 10, opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.6}} className='text-xl font-titleFont tracking-wide text-textGreen'>
            Hi, my name is
        </motion.h3>
        <motion.h1 initial={{y: 10, opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.6}} className='text-5xl lgl:text-6xl font-titleFont font-semibold flex flex-col'>
            Raja Ahmed. 
            <span className='text-textDark mt-2 lgl:mt-4'>
            <TypeAnimation
                sequence={[
                    'I dabble in develobm', 
                    1000,
                    'I dabble in development.'
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                />
            </span>
        </motion.h1>
        <motion.p initial={{y: 10, opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.8}} className='text-[18px] md:text-pg md:max-w-[650px] text-textDark font-medium leading-8'>
            I'm a junior in computer science at the University of Oklahoma. I love building web apps and find machine learning fascinating.  
        </motion.p>
        <a href="mailto:raja.t.ahmed04@gmail.com">
            <motion.button initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.5, delay: 0.9}} className='w-52 h-14 text-[18px] md:text-pg font-semibold font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>
                Say Hi !
            </motion.button>
        </a>
    </section>
  )
}

export default Hero