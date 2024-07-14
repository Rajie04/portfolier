import React from 'react'
import {motion} from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'
import { FaAngleRight } from 'react-icons/fa'

const UIUX = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 0.1}}
        className='w-full'
    >
        <h3 className='flex gap-1 font-semibold text-[22px] lg:text-jobTitle font-titleFont tracking-wide'>
            Web Developer <span className='text-textGreen tracking-wide'>@OU UI/UX Club</span>
        </h3>
        <p className='text-jobDuration mt-1 font-medium text-textDark'>July 2024 - Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-jobDuration flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <FaAngleRight />
                </span>
                Designing a user-centric organization website using React, Node.js, and MySQL.
            </li>
        </ul>
    </motion.div>
  )
}

export default UIUX