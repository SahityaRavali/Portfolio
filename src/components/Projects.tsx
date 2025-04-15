import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-gray-800 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
       
      </motion.div>
    </section>
  );
};

export default Projects;
