"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-[#0b1220]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-14"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.7 }}
          viewport={{ once:true }}
          className="bg-[#10172A] rounded-3xl p-10 border border-white/10 shadow-xl"
        >
          <p className="text-lg leading-9 text-gray-300">

            I'm <span className="text-cyan-400 font-semibold">Ammar Khattak</span>,
            a Computer Science undergraduate at the University of Engineering
            and Technology Peshawar with a CGPA of 3.40.

            <br /><br />

            I specialize in Frontend Development and enjoy building modern,
            responsive, and user-friendly web applications.

            <br /><br />

            Alongside frontend development, I am continuously learning DevOps,
            Linux, cloud technologies, and full-stack development to become a
            complete software engineer.

            <br /><br />

            I love solving problems, learning new technologies, and creating
            beautiful digital experiences.

          </p>
        </motion.div>

      </div>
    </section>
  );
}