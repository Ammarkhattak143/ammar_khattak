"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
     className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 md:pt-0"
    >

      {/* Background Glow */}

      <div className="absolute pointer-events-none w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px] opacity-20 top-20 left-10"></div>

  <div className="absolute pointer-events-none w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-20 bottom-0 right-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="text-cyan-400 mb-3">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-extrabold leading-tight">
            Ammar
            <br />
            Khattak
          </h1>

          <div className="text-2xl mt-6 text-gray-300 h-12">

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "DevOps Learner",
                2000,
                "Computer Science Student",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-gray-400 max-w-xl leading-8">

            Passionate Frontend Developer and Computer Science student focused on creating modern web experiences, responsive interfaces, and scalable applications.

          </p>

          <div className="mt-10 flex gap-5 flex-wrap">

<a
  href="/resume.pdf"
  download
  
  className="px-8 py-4 rounded-full bg-cyan-500 hover:scale-105 duration-300"
>
  Download Resume
</a>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">
<a href="https://github.com/Ammarkhattak143">
            <FaGithub className="hover:text-cyan-400 cursor-pointer duration-300" />
</a>
<a
  href="https://linkedin.com/in/MUHAMMAD AMMAR khattak"
  target="_blank"
><FaLinkedin className="hover:text-cyan-400 cursor-pointer duration-300" /></a>
            
<a href="https://www.facebook.com/amaar.ktk.1">
<FaFacebook className="hover:text-cyan-400 cursor-pointer duration-300" />
</a>
          </div>

        </motion.div>

        <motion.div

          initial={{ opacity:0, scale:.8 }}

          animate={{ opacity:1, scale:1 }}

          transition={{ duration:1 }}

          className="flex justify-center"

        >

          <img
            src="/profile.png"
            alt="profile"
            className="w-[420px] rounded-full border-4 border-cyan-400 shadow-[0_0_60px_#00FFFF]"
          />

        </motion.div>

      </div>

    </section>
  );
}