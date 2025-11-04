import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer",
    company: "Naag Foundation Trust",
    period: "Nov 2024 – Present",
achievements: [
  "Designed and developed interactive donor transparency dashboards using React.js and Tailwind CSS, ensuring accurate fund utilization tracking for contributors.",
  "Collaborated with backend teams to integrate Express.js REST APIs for real-time data visualization and donor activity updates.",
  "Implemented new dashboard features and enhancements, improving usability, performance, and transparency across multiple social initiatives.",
  "Optimized existing UI components, reduced bugs, and improved page responsiveness to ensure a seamless experience across devices.",
],
    stack: ["React.js", "Tailwind CSS", "Express Js", "REST APIs"],
  },
  {
    title: "Web Developer Trainee",
    company: "Naag Foundation Trust",
    period: "Nov 2023 – Oct 2024",
    achievements: [
      "Built and optimized MERN-based applications (MongoDB, Express.js, React.js, Node.js) for NGO platform.",
      "Integrated RESTful APIs, ensuring smooth data flow and consistent UI performance across devices.",
      "Collaborated on live projects improving load times, UI consistency, and data-driven content rendering.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 border-b border-neutral-200">
      {/* Subtle background gradients */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.05),transparent)] blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(168,85,247,0.08),transparent)] blur-3xl"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mb-20 text-center text-5xl font-semibold tracking-tight text-gray-900"
      >
        Professional Experience
        <div className="mx-auto mt-3 h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </motion.h2>

      {/* Experience Cards */}
      <div className="relative z-10 mx-auto flex flex-col gap-12 px-6 max-w-7xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="group rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-md px-8 py-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white/80"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-lg text-gray-600">{exp.company}</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</p>
            </div>

            <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed">
              {exp.achievements.map((item, i) => (
                <li key={i} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-500/80">
                  {item}
                </li>
              ))}
            </ul>

            {/* Tech stack badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {exp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-blue-700"
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

export default Experience;
