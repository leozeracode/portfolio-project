import React from 'react';

import {
  Globe,
  MapPin,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from '@/components/ui/button';
import { Card } from "@/components/ui/card"
import { fadeInUp, staggerContainer } from './section-definitions';


export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative z-10 px-8 py-32 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              Let's Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Together
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              I'm always interested in new opportunities and exciting projects. Whether you need a full-stack solution,
              system architecture consultation, or want to discuss the latest in cloud-native technologies.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer">
                <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Minas Gerais, Brazil</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <Globe className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Available for remote work</span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold text-white mb-6">Quick Message</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 backdrop-blur-sm cursor-text"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 backdrop-blur-sm cursor-text"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 backdrop-blur-sm resize-none cursor-text"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 cursor-pointer">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}
