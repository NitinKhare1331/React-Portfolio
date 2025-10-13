import {
    RiReactjsLine,
    RiHtml5Line,
    RiCss3Line,
    RiJavascriptLine,
    RiGitBranchFill,
    RiTailwindCssLine,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: 0 },
    animate: {
        y: [0, -8, 0],
        transition: {
            duration,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
});

const Technologies = () => {
    const categories = [
        {
            title: "Frontend",
            items: [
                { Icon: RiHtml5Line, color: "#DD4B25", name: "HTML5" },
                { Icon: RiCss3Line, color: "#2D53E5", name: "CSS3" },
                { Icon: RiJavascriptLine, color: "#F7E025", name: "JavaScript" },
                { Icon: RiReactjsLine, color: "#08E1FF", name: "React.js" },
                { Icon: RiTailwindCssLine, color: "#1FB9BC", name: "Tailwind CSS" },
            ],
        },
        {
            title: "Backend",
            items: [
                { Icon: FaNodeJs, color: "#58A149", name: "Node.js" },
                { Icon: SiMongodb, color: "#1AAD57", name: "MongoDB" },
            ],
        },
        {
            title: "DevOps & Tools",
            items: [
                { Icon: FaAws, color: "#FF9900", name: "AWS" },
                { Icon: RiGitBranchFill, color: "#E84E31", name: "Git" },
            ],
        },
    ];

    return (
        <section
            id="technologies"
            className="relative py-24 border-b border-neutral-200 overflow-hidden"
        >
            {/* Subtle Background Glow */}
            <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(56,189,248,0.1),transparent)] blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(168,85,247,0.15),transparent)] blur-3xl"></div>

            {/* Section Header */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 mb-16 text-center text-5xl font-semibold tracking-tight text-gray-900"
            >
                Technologies
                <div className="mx-auto mt-3 h-[2px] w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.h2>

            {/* Tech Grid */}
            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="grid gap-16 md:gap-24">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                        >
                            <h3 className="mb-8 text-center text-2xl font-semibold text-gray-800">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-8">
                                {category.items.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        variants={iconVariants(3 + index * 0.5)}
                                        initial="initial"
                                        animate="animate"
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 2,
                                            transition: { duration: 0.3 },
                                        }}
                                        className="flex flex-col items-center justify-center rounded-2xl bg-white/60 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 p-6"
                                    >
                                        <tech.Icon
                                            className="text-7xl"
                                            style={{ color: tech.color }}
                                        />
                                        <span className="mt-3 text-base font-medium text-gray-700">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
