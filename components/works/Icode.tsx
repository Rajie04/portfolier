import React from 'react'
import {motion} from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa'

const Icode = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 0.1}}
        className='w-full'
    >
        <h3 className='flex flex-wrap gap-1 font-semibold text-[22px] lg:text-jobTitle font-titleFont tracking-wide'>
            Programming Instructor <span className='text-textGreen tracking-wide'>@iCode</span>
        </h3>
        <p className='text-jobDuration mt-1 font-medium text-textDark'>November 2024 - Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-jobDuration flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <FaAngleRight />
                </span>
                Built strong foundations in Java and JavaScript for 15-student classes, resulting in a 30% improvement in assessment scores.
            </li>
            <li className='text-jobDuration flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <FaAngleRight />
                </span>
                Asessed student progress through regular evaluations and provided constructive feedback to support continuous improvement.
            </li>
        </ul>
    </motion.div>
  )
}

export default Icode