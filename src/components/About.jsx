import about from "../assets/images/about.jpg";
import { ABOUT_TEXT, EDUCATION_1, EDUCATION_2, EDUCATION_3 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="relative flex flex-col items-center justify-center overflow-hidden border-b border-neutral-200 pb-24 pt-20"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.1),transparent)] blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(168,85,247,0.15),transparent)] blur-3xl"></div>

            {/* Section Title */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mb-16 text-center text-5xl font-bold tracking-tight text-gray-800"
            >
                About <span className="text-blue-600">Me</span>
                <div className="mx-auto mt-3 h-[3px] w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.h1>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl items-center justify-center gap-12 px-6">
                {/* Image Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center w-full md:w-1/2"
                >
                    <div className="relative group">
                        {/* Image */}
                        <img
                            src={about}
                            alt="About Me"
                            className="relative z-10 w-[85%] max-w-[420px] rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 flex flex-col justify-center"
                >
                    <p className="text-lg leading-relaxed text-gray-700 text-justify mb-8">
                        {ABOUT_TEXT}
                    </p>

                    {/* Education Cards */}
                    <div className="space-y-6">
                        {[EDUCATION_1, EDUCATION_2, EDUCATION_3].map((edu, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="rounded-xl bg-white/50 backdrop-blur-md shadow-md border border-white/20 p-4 hover:shadow-lg transition-shadow duration-300"
                            >
                                <p className="text-gray-800">{edu}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
