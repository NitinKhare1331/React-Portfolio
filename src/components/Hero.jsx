import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/images/profilePic.jpg';
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, delay },
    },
});

const Hero = () => {
    return (
        <section className="relative overflow-hidden text-neutral-900 mt-20">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-6 py-20 md:py-28 lg:py-2">

                {/* Left Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                        <motion.h1
                            variants={container(0.2)}
                            initial="hidden"
                            animate="visible"
                            className="pb-8 text-5xl font-light tracking-tight text-neutral-800 sm:text-6xl md:text-7xl"
                        >
                            Nitin Khare
                        </motion.h1>

                        <motion.h2
                            variants={container(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="mb-6 text-xl font-semibold tracking-wide text-blue-600 sm:text-2xl"
                        >
                            Full Stack Developer
                        </motion.h2>

                        <motion.p
                            variants={container(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="max-w-xl text-base font-light leading-relaxed text-neutral-700 sm:text-lg text-justify"
                        >
                            {HERO_CONTENT}
                        </motion.p>

                        <motion.div
                            variants={container(0.8)}
                            initial="hidden"
                            animate="visible"
                            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
                        >
                            <a href='#contact'  className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg">
                                Contact Me
                            </a>
                            <a href='#projects' className="rounded-lg border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 transition-all hover:bg-blue-50">
                                View Projects
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="mt-10 w-full lg:mt-0 lg:w-1/2 lg:p-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <div className="absolute -inset-2 rounded-3xl bg-blue-200/40 blur-2xl"></div>
                            <img
                                src={profilePic}
                                alt="Nitin Khare"
                                className="relative z-10 w-72 rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105 sm:w-96"
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
