import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Projects } from './components/Projects';
import Technologies from './components/Technologies';
import Contacts from './components/Contacts';
import "./App.css";
import Experience from './components/Experience';

function App() {
  return (
    <div className="overflow-x-hidden text-gray-800 antialiased selection:bg-blue-100 selection:text-blue-800">

      {/* ✨ Enhanced Animated Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-white via-blue-50/40 to-indigo-100">
        {/* Soft radial blobs for depth */}
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(56,189,248,0.25),transparent)] blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(167,139,250,0.25),transparent)] blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-[30%] right-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(96,165,250,0.15),transparent)] blur-2xl animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto ">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
