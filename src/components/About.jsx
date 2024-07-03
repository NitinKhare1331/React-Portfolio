import about from "../assets/about.jpg";
import { ABOUT_TEXT, EDUCATION_1, EDUCATION_2, EDUCATION_3 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About
            <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img height={500} width={400} className="rounded-2xl" src={about} alt="about"/>
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="w-full lg:w-1/2">
                <div className="flex flex-col justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 text-justify">{ABOUT_TEXT}</p>
                    <p className="max-w-xl py-6 text-justify">{EDUCATION_1}</p>
                    <p className="max-w-xl py-6 text-justify">{EDUCATION_2}</p>
                    <p className="max-w-xl py-6 text-justify">{EDUCATION_3}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About