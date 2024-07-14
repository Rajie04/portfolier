import React from 'react'
import {motion} from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'
import { FaAngleRight } from 'react-icons/fa'

const Uflip = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 0.1}}
        className='w-full'
    >
        <h3 className='flex gap-1 font-semibold text-[22px] lg:text-jobTitle font-titleFont tracking-wide'>
             Software Engineer Intern <span className='text-textGreen tracking-wide'>@UFLIP</span>
        </h3>
        <p className='text-jobDuration mt-1 font-medium text-textDark'>April 2023 - November 2023</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-jobDuration flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <FaAngleRight />
                </span>
                Created the submission, accepted, and rejected features in a ticket tracking React web app, streamlining ticket transactions for 1000+ users.
            </li>
            <li className='text-jobDuration flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <FaAngleRight />
                </span>
                Operated within an Agile ecosystem utilizing Scrum methodologies, resulting in a 20% increase in team productivity.
            </li>
            <li className='text-jobDuration flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <FaAngleRight />
                </span>
                Rotated team lead between four teammates on a project, coordinating and guiding team members to ensure project execution.
            </li>
        </ul>
    </motion.div>
  )
}

export default Uflip