import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className=' py-3 '>
      <div className='container mx-auto text-center flex justify-center items-center gap-5 text-slate-700 '>
        <a
          href='https://www.linkedin.com/in/raj-verma21/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center'
        >
          <FaLinkedin
            size={24}
            className='hover:scale-125 duration-200 transition-all hover:text-[#0015ce]'
          />
        </a>
        <a
          href='https://github.com/rajverma21'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center'
        >
          <FaGithub
            size={24}
            className='hover:scale-125 duration-200 transition-all hover:text-black'
          />
        </a>
        <a
          href='mailto:rajverma42244@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center'
        >
          <IoMdMail
            size={27}
            className='hover:scale-125 duration-200 transition-all hover:text-[#d0ad00]'
          />
        </a>
      </div>
      <p className='text-sm mt-4 text-gray-500'>
        © 2024 Raj Verma. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
