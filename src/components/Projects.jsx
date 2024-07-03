import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from "framer-motion"

export const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl'>Projects
        </motion.h1>
        <div id='projects'>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-4 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4'>
                        <img src={project.image}
                        width={150}
                        height={150}
                        alt={project.title} 
                        className='mb-6 rounded border border-neutral-50 hover:scale-125 transition-all duration-500'
                        />
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='p-1 rounded mr-2 bg-neutral-900 px-2py-1 text-sm font-medium text-violet-900'>
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}
