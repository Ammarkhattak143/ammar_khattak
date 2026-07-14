"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-14"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#10172A] rounded-3xl p-8">
            <Mail className="mx-auto text-cyan-400 mb-4" size={40} />
            <p className="font-semibold">Email</p>
            <p className="text-gray-400 break-all">
              ktkammar5@gmail.com
            </p>
          </div>

          <div className="bg-[#10172A] rounded-3xl p-8">
            <Phone className="mx-auto text-cyan-400 mb-4" size={40} />
            <p className="font-semibold">Phone</p>
            <p className="text-gray-400">
              +92 308 8011451
            </p>
          </div>

          <div className="bg-[#10172A] rounded-3xl p-8">
            <MapPin className="mx-auto text-cyan-400 mb-4" size={40} />
            <p className="font-semibold">Location</p>
            <p className="text-gray-400">
              Peshawar, Pakistan
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}