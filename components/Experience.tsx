"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 bg-[#0b1220]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="bg-[#10172A] rounded-3xl p-10 border border-white/10"
        >

          <h3 className="text-2xl font-bold text-cyan-400">

            Frontend Developer Intern

          </h3>

          <p className="text-gray-400 mt-2">

            Developer Hub Corporation

          </p>

          <p className="mt-6 leading-8 text-gray-300">

            • Developed responsive frontend interfaces using HTML, CSS, and JavaScript.

            <br /><br />

            • Worked on real-world web development tasks during internship.

            <br /><br />

            • Improved UI design and user experience.

            <br /><br />

            • Collaborated with team members to complete assigned projects.

          </p>

        </motion.div>

      </div>
    </section>
  );
}