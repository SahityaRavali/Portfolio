import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="px-4 py-20 bg-gray-700 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300">
 I'm Sahitya Ravali Kandukuri, a Full Stack Developer with 6+ years of experience building scalable, user-focused web applications.
I specialize in Angular 17+, React.js, TypeScript, SCSS, and Tailwind CSS for modern frontend development.
Proficient in UI frameworks like Bootstrap, Material UI, Angular Material, and tools like Figma and Adobe XD.
Experienced in state management (NgRx, Redux, RxJS), testing (Jasmine, Karma, Jest), and REST API integration.
        </p>
        <p className="mt-6 text-lg text-gray-300">
        I’ve worked on complex enterprise applications with a focus on performance, usability, and scalability.
I enjoy solving challenging problems, exploring new technologies, and writing clean, maintainable code.
Collaborating in agile, cross-functional teams is where I thrive and deliver my best work.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
