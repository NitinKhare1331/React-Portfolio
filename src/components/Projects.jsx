import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

export const Projects = () => {
    return (
        <section
            id="projects"
            className="relative border-b border-neutral-200 py-24 overflow-hidden"
        >
            {/* Background Glows */}
            <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.1),transparent)] blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(168,85,247,0.15),transparent)] blur-3xl"></div>

            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mb-16 text-center text-5xl font-semibold tracking-tight text-gray-900"
            >
                Projects
                <div className="mx-auto mt-3 h-[2px] w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.h2>

            {/* Projects Grid */}
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="rounded-2xl border border-neutral-200 bg-white/20 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 p-8"
                    >
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-blue-700 font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
