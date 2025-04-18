import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";

const Hero = () => {
  console.log("Hero component is rendering ✅");
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 text-white overflow-hidden bg-transparent">
    <ParticlesBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-blue-400 drop-shadow-md">Sahitya Ravali Kandukuri</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Full Stack Developer
        </h2>

        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed text-gray-300">
        I'm passionate about building scalable, high-performance applications using Angular 17+, React.js, Node.js, and Java. I focus on developing clean, responsive user interfaces with TypeScript, SCSS, Tailwind CSS, and modern UI libraries. My expertise includes REST API integration, state management with NgRx and Redux, and testing using Jest and Jasmine.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
        {/* <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg hover-float"
        >
        View Projects
        </a> */}

        <a
        href="/resume.pdf"
        download
        className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white py-2 px-6 rounded-lg hover-float"
          >
         Download Resume
        </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
