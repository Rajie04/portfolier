import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialLinkedin, SlSocialInstagram  } from 'react-icons/sl'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mdl:inline-flex flex-col items-center justify-center w-full py-6 gap-0'>
        <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
            <a href="https://github.com/Rajie04" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <TbBrandGithub />
                </span>
            </a>
            <a href="https://www.linkedin.com/in/rtahmed/" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialLinkedin />
                </span>
            </a>
            <a href="https://www.instagram.com/_rajie" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialInstagram />
                </span>
            </a>
        </div>
        <div className='flex gap-2 justify-center items-center text-textDark'>
            made with <span className='text-sm mb-1'><FaHeart /></span> for u
        </div>
    </div>
  )
}

export default Footer