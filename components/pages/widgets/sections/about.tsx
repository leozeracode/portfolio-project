import React from 'react';

import {
  Code,
  Database,
  Cloud,
  TestTube,
  MapPin,
  Globe,
} from "lucide-react"

import { motion } from "framer-motion"
import { fadeInUp } from './section-definitions';



export const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 px-8 py-32 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div {...fadeInUp} className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Building scalable solutions across diverse industries
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              With over 6 years of experience as a Full Stack Engineer, I specialize in distributed systems and
              large-scale data processing. My journey has taken me through various industries including healthcare
              (telemedicine and hospitals), auctions and e-commerce, finance, CRM and SaaS platforms, and media.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              I'm passionate about building robust, testable solutions using modern cloud-native technologies. My
              expertise spans the entire development lifecycle, from architecting scalable backend systems to creating
              intuitive user interfaces that serve millions of users.
            </p>

            <div className="space-y-6 pt-6">
              <motion.div className="flex items-center gap-4 cursor-pointer" whileHover={{ x: 5 }}>
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Bachelor's in System Information</span>
              </motion.div>
              <motion.div className="flex items-center gap-4 cursor-pointer" whileHover={{ x: 5 }}>
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">English: C1, Portuguese: Native</span>
              </motion.div>
              <motion.div className="flex items-center gap-4 cursor-pointer" whileHover={{ x: 5 }}>
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Available for remote work worldwide</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Industries Experience</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Healthcare", "Finance", "E-commerce", "Media", "CRM & SaaS", "Auctions"].map((industry) => (
                  <motion.div
                    key={industry}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{industry}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Database,
                  title: "Data Engineering",
                  desc: "Large-scale processing & pipelines",
                },
                { icon: Cloud, title: "Cloud Native", desc: "AWS services & containerization" },
                { icon: Code, title: "Full Stack", desc: "End-to-end development" },
                { icon: TestTube, title: "Testing", desc: "Comprehensive test strategies" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <item.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
