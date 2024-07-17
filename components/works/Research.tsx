import React from 'react'
import {motion} from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'
import { FaAngleRight } from 'react-icons/fa'

const Research = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 0.1}}
        className='w-full'
    >
        <h3 className='flex flex-wrap gap-1 font-semibold text-[22px] lg:text-jobTitle font-titleFont tracking-wide'>
            Research Engineer <span className='text-textGreen tracking-wide'>@University of Oklahoma</span>
        </h3>
        <p className='text-jobDuration mt-1 font-medium text-textDark'>July 2024 - Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-jobDuration flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <FaAngleRight />
                </span>
                Utilizing YouTube API and Python to scrape and compile a JSON dataset of 9,000 comments to use as foundation in a machine learning model. 
            </li>
            <li className='text-jobDuration flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <FaAngleRight />
                </span>
                Creating a machine learning model using NLP to classify new comments as disinformation or not, targeting an accuracy of 85%. 
            </li>
        </ul>
    </motion.div>
  )
}

export default Research