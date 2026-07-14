"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="text-5xl font-bold text-center mb-14"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity:0,y:30 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ delay:index*.1 }}
              viewport={{ once:true }}
              className="bg-[#10172A] rounded-2xl p-6 border border-white/10 hover:border-cyan-400 duration-300"
            >

              <div className="flex justify-between mb-3">

                <h3 className="font-semibold text-xl">

                  {skill.name}

                </h3>

                <span className="text-cyan-400">

                  {skill.level}

                </span>

              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width:0 }}
                  whileInView={{ width:skill.level }}
                  transition={{ duration:1 }}
                  viewport={{ once:true }}
                  className="h-full bg-cyan-400 rounded-full"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}