import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-16 text-textLight '>
        <a href="mailto:raja.t.ahmed04@gmail.com">
            <p className='text-[1.1rem] rotate-90 w-72 tracking-wide text-textGreen hover:-translate-y-2 transition-all duration-300'>
                raja.t.ahmed04@gmail.com
            </p>
        </a>
        <span className='w-[2px] h-40 bg-textDark inline-flex'></span>
    </div>
  )
}

export default RightSide