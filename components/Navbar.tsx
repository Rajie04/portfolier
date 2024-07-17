import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineClose } from 'react-icons/md'
import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl'

const Navbar = () => {
    const refer = useRef<string | any>("")
    const [showMenu, setShowMenu] = useState(false)

    const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        setShowMenu(false)
        const href = e.currentTarget.href
        const targetId = href.replace(/.*\#/, "")
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
            behavior: 'smooth'
        })
        // Update class name of the clicked link
        const links = document.querySelectorAll('.nav-link')
        links.forEach((link) => {
            link.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    }

    const handleClick = (e: any) => {
        if (e.target.contains(ref.current)) {
            setShowMenu(false)
        }
    }

  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h[20vh] fixed top-0 left-0 right-0 z-50 bg-bodyColor px-4'>
        <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} className='font-semibold text-[18px]'>[ ahmed ]</motion.div>
            <div className='hidden mdl:inline-flex items-center gap-7'>
                <ul className='flex text-[18px] gap-7'>
                    <Link 
                    href="#home"
                    className='flex items-center gap-1 font-semibold text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    onClick={handleScroll}
                    >
                        <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.1}}>[ home ]</motion.li>
                    </Link>
                    <Link 
                    href="#about"
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-semibold text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    >
                        <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.1, delay: 0.1}}><span className='text-textGreen'></span>[ about ]
                        </motion.li>
                    </Link>
                    <Link
                    onClick={handleScroll}
                    href="#experience"
                    className='flex items-center gap-1 font-semibold text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    >
                        <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.1, delay: 0.2}}><span className='text-textGreen'></span>[ experience ]
                        </motion.li>
                    </Link>
                    <Link 
                    onClick={handleScroll}
                    href="#activities"
                    className='flex items-center gap-1 font-semibold text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    >
                        <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.1, delay: 0.3}}><span className='text-textGreen'></span>[ activities ]
                        </motion.li>
                    </Link>
                    <Link 
                    onClick={handleScroll}
                    href="#projects"
                    className='flex items-center gap-1 font-semibold text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    >
                        <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.1, delay: 0.4}}><span className='text-textGreen'></span>[ projects ]
                        </motion.li>
                    </Link>
                </ul>
                <a href="/assets/Ahmed_Resume.pdf" target='_blank'>
                <motion.button 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    transition={{delay: 0.5}}
                    className='px-4 py-2 rounded-md text-textGreen text-[16px] border border-textGreen hover:bg-hoverColor duration-300'
                    >[ resume ]</motion.button>
                </a>
            </div>
            {/* Small Icon Section */}
            <div onClick={() => {setShowMenu(true)}} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
            </div>
            {
                showMenu && (
                    <div 
                     ref={(node: any) => (refer.current = node)} 
                     className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
                     onClick={handleClick}
                    >
                        <motion.div initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.1}} className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'>
                            <MdOutlineClose onClick={() => setShowMenu(false)} className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4' />
                            <div className='flex flex-col items-center gap-7 mt-12'>
                                <ul className='flex flex-col text-[16px] gap-7'>
                                    <Link 
                                    href="#home"
                                    className='flex items-center gap-1 font-semibold text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                                    onClick={handleScroll}
                                    >
                                        <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.1}}>/ home</motion.li>
                                    </Link>
                                    <Link 
                                    href="#about"
                                    onClick={handleScroll}
                                    className='flex items-center gap-1 font-semibold text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                                    >
                                        <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.1, delay: 0.1}}><span className='text-textGreen'>/</span> about
                                        </motion.li>
                                    </Link>
                                    <Link
                                    onClick={handleScroll}
                                    href="#experience"
                                    className='flex items-center gap-1 font-semibold text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                                    >
                                        <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.1, delay: 0.2}}><span className='text-textGreen'>/</span> experience
                                        </motion.li>
                                    </Link>
                                    <Link 
                                    onClick={handleScroll}
                                    href="#activities"
                                    className='flex items-center gap-1 font-semibold text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                                    >
                                        <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.1, delay: 0.3}}><span className='text-textGreen'>/</span> activities
                                        </motion.li>
                                    </Link>
                                    <Link 
                                    onClick={handleScroll}
                                    href="#projects"
                                    className='flex items-center gap-1 font-semibold text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                                    >
                                        <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.1, delay: 0.4}}><span className='text-textGreen'>/</span> projects
                                        </motion.li>
                                    </Link>
                                </ul>
                                <a href="/assets/Ahmed_Resume.pdf" target='_blank'>
                                    <motion.button 
                                        initial={{opacity: 0}} 
                                        animate={{opacity: 1}} 
                                        transition={{delay: 0.5}}
                                        className='px-4 py-2 rounded-md text-textGreen text-[16px] border border-textGreen hover:bg-hoverColor duration-300'
                                    >/ resume</motion.button>
                                </a>
                                <div className='flex gap-4 mt-8'>
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
                                <a href="mailto:raja.t.ahmed04@gmail.com">
                                    <p className='flex justify-center text-[1.1rem] w-72 tracking-wide text-textGreen hover:-translate-y-2 transition-all duration-300'>
                                        raja.t.ahmed04@gmail.com
                                    </p>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Navbar