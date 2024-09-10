import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import resume from "../assets/projects/Nitin-Khare-13-03-2001-resume.pdf";

const Contacts = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-10">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className="text-center tracking-tighter border-b border-neutral-900 pb-5">
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="my-4">
              {CONTACT.phoneNo}
            </motion.p>
            <motion.p
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}>
                {CONTACT.email}
            </motion.p>
            <motion.button
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="my-4 border rounded p-2 bg-neutral-900 text-white">
              <a href={resume} className="mt-4" download="Nitin-Khare-13-03-2001-resume.pdf">
                Download Resume
              </a>
            </motion.button>
        </div>
    </div>
  )
}

export default Contacts;