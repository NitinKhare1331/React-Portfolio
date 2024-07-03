import { RiReactjsLine, RiHtml5Line, RiCss3Line, RiJavascriptLine, RiNodejsLine, RiGitBranchFill} from "react-icons/ri"
import { SiMongodb, SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial : {y:-10},
    animate : {
        y : [10, -10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse"
        },
    },
});

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Line 
                
                className="text-7xl text-[#DD4B25]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Line className="text-7xl text-[#2D53E5]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className="text-7xl text-[#F7E025]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-[#08E1FF]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-[#58A149]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiGitBranchFill className="text-7xl text-[#E84E31]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-[#1AAD57]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-[#08668E]"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies