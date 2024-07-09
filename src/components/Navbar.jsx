import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './About.css'

const Navbar = () => {

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center text-2xl tracking-wider'>
            Portfolio
        </div>
        <div className='m-8 flex items-center justify-center gap-8 text-xl'>
            <a href='#about' id='about_me' className='hidden lg:block'>About Me</a>
            <a href='#technologies' id='tech' className='hidden lg:block'>Technologies</a>
            <a href='#projects' id='project' className='hidden lg:block'>Projects</a>
            <a href='#contact' id='contact' className='hidden lg:block'>Contact</a>
            <a href='https://linkedin.com/in/13-nitin-khare' target='_blank'><FaLinkedin /></a>
            <a href='https://github.com/NitinKhare1331' target='_blank'><FaGithub /></a>
        </div>
    </nav>
  )
}

export default Navbar