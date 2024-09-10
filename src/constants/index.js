import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, MySQL, MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, going to the gym, and exploring new technologies.`;

export const EDUCATION_1 = `Bachelor of Technology (2019-2023) - 7.95 CGPA`;

export const EDUCATION_2 = `Intermediate (2018-2019) - 7.88 CGPA`;

export const EDUCATION_3 = `High School (2016-2017) - 83.6 %`;

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Todo App",
    image: project2,
    description:
      "Developed a dynamic Todo App using React JS for a responsive UI and Tailwind CSS for modern, mobile-first designs. Focused on component-based architecture, effective state management, and cross-device compatibility to enhance user experience.",
    technologies: ["HTML ", "CSS ", "React", "Tailwind CSS"],
  },
  {
    title: "Poekedex App",
    image: project3,
    description:
      "Developed a Pokedex App using React JS for an interactive UI and CSS for styling. Implemented efficient state management and used Axios to fetch data from the free Pokémon API. Added Prev and Next buttons for pagination and used React Router for smooth navigation, enabling a seamless SPA experience.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "CoinGecko Crypto Tracker",
    image: project4,
    description:
      "The CoinGecko Crypto Tracker app displays a table of cryptocurrencies fetched from the free CoinGecko API. Clicking on a coin navigates to a details page showing the coin's description and various charts. The app implements routing, lazy loading for optimized performance, error boundaries for handling failures, and state management using Zustand. Debouncing is used to handle search input efficiently.",
    technologies: ["HTML", "Tailwind CSS", "React"],
  },
];

export const CONTACT = {
  address: "C 240 Awas Vikas Colony Hardoi (UP) 241001",
  phoneNo: "+91-7355079179",
  email: "kharenitin777@gmail.com",
};
