"use client";

import { motion } from "framer-motion";

const education = [
  {
    title: "Bachelor of Computer Science",
    institute: "University of Engineering & Technology Peshawar",
    year: "2023 - 2027",
    details: "Current CGPA: 3.40",
  },
  {
    title: "Intermediate",
    institute: "Government Higher Secondary School",
    year: "2022",
    details: "78%",
  },
  {
    title: "Matric",
    institute: "Government Higher Secondary School",
    year: "2020",
    details: "82%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-[#0b1220]">

      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-8">

          {education.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              className="bg-[#10172A] border border-white/10 rounded-2xl p-8"
            >

              <h3 className="text-2xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-2 text-lg">
                {item.institute}
              </p>

              <p className="text-gray-400">
                {item.year}
              </p>

              <p className="mt-4">
                {item.details}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}