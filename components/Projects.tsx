"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#10172A] border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600"
                >
                  GitHub
                </a>

               

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}