import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import resume from "../assets/projects/Nitin_Khare_FullStackDeveloper_Resume.pdf";

const Contacts = () => {
  return (
    <section
      id="contact"
      className="relative border-t border-neutral-200 py-24 overflow-hidden "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(56,189,248,0.15),transparent)] blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(168,85,247,0.15),transparent)] blur-3xl"></div>

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-12 text-center text-5xl font-semibold tracking-tight text-gray-900"
      >
        Get in Touch
        <div className="mx-auto mt-3 h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </motion.h2>

      {/* Contact Details */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl text-center space-y-6 text-lg text-gray-700"
      >
        <p className="leading-relaxed">
          I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
        </p>

        <div className="mt-10 flex flex-col items-center space-y-3 text-gray-700">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:text-blue-600 transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-600" />
            <span>{CONTACT.phoneNo}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-600" />
            <a
              href="https://linkedin.com/in/13-nitin-khare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub className="text-blue-600" />
            <a
              href="https://github.com/NitinKhare1331"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Resume Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={resume}
            download="Nitin_Khare_FullStackDeveloper_Resume.pdf"
            className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-medium text-white shadow-md transition-all hover:shadow-xl hover:from-blue-500 hover:to-purple-500"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contacts;
