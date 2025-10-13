import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a dedicated Full Stack Developer specializing in the MERN stack, with hands-on experience in building responsive, scalable, and high-performance web applications. Through real-world projects at Naag Foundation Trust, I’ve developed and integrated dynamic user interfaces, RESTful APIs, and secure backend services that enhanced user engagement and data accessibility. I’m passionate about crafting impactful digital solutions that blend clean design, seamless functionality, and meaningful user experiences.`;


export const ABOUT_TEXT = `I am a passionate and detail-oriented Full Stack Developer specializing in the MERN stack, with hands-on experience in building responsive, scalable, and user-focused web applications. My journey in development began with curiosity about how technology connects people, which evolved into a drive to craft impactful digital solutions. During my work at Naag Foundation Trust, I contributed to real-world projects that enhanced online engagement and accessibility through robust front-end design and efficient backend systems. I thrive in collaborative environments, enjoy solving complex technical challenges, and continuously seek to learn and adapt to emerging technologies. Outside of coding, I enjoy fitness, exploring new tools, and staying curious about innovative tech trends.`;


export const EDUCATION_1 = `Bachelor of Technology (2019-2023) - 7.95 CGPA`;

export const EDUCATION_2 = `Intermediate (2018-2019) - 7.88 CGPA`;

export const EDUCATION_3 = `High School (2016-2017) - 83.6 %`;

export const PROJECTS = [
  {
    title: "Unireach Bharat",
    description:
      "A nationwide service listing platform built using the MERN stack with AWS S3 and UPI integration. Features role-based dashboards for customers, businesses, employees, and admins. Integrated secure payments via UPI, cloud file storage on AWS S3, and Zod-based input validation for reliability and scalability.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "AWS S3",
      "UPI Integration",
      "JWT Auth",
      "Zod Validation",
    ],
  },
  {
    title: "Team Talk",
    description:
      "A real-time communication platform enabling direct and group chats using Socket.io. Built with MERN stack and AWS S3 for image uploads, JWT-based authentication, and RESTful APIs for managing users, messages, and channels — ensuring secure, scalable real-time performance.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "AWS S3",
      "JWT",
    ],
  },
  {
    title: "CoinGecko Crypto Tracker",
    description:
      "A cryptocurrency analytics app fetching live data from the CoinGecko API. Includes interactive charts, search debouncing, lazy loading, and Zustand-based state management to ensure high performance and smooth navigation.",
    technologies: ["React", "Tailwind CSS", "Zustand", "Chart.js"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, fully responsive personal portfolio built with React.js and Tailwind CSS to showcase projects, experience, and contact information — optimized for SEO and performance.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "C 240 Awas Vikas Colony Hardoi (UP) 241001",
  phoneNo: "+91-7355079179",
  email: "nitin.khare.03.13.2001@gmail.com",
};




"Implemented Socket.io for real-time chat updates and notifications. Integrated Amazon S3 for secure and scalable image uploads. Added features like user authentication, channel creation, direct messaging, and group chats.  Ensured  seamless  performance  with  efficient  backend  and  real-time  communication  mechanisms."