import React from 'react';

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sparkles,
  Code,
  Database,
  Cloud,
  TestTube,
  MapPin,
  Calendar,
  Download,
} from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import { fadeInRight, fadeInLeft } from './section-definitions';

export const Hero: React.FC = () => {
  const techStack = ["React", "TypeScript", "Node.js", "PostgreSQL", ".NET", "AWS"]

  return (
    <section className="relative z-10 px-8 pt-16 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInLeft} initial="initial" animate="animate" className="space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-6 py-3 text-sm font-medium backdrop-blur-sm hover:bg-purple-500/30 transition-all">
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to Innovate
              </Badge>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Full Stack</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Developer
                </span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-2xl text-gray-300 font-light">
                Computer Science &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Engineering
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Brazilian | Married | 32 years</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">6+ Years Experience</span>
                </div>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Enhancing digital experiences that are smooth, scalable, and made to impress across healthcare, finance,
              and e-commerce industries. Specialized in distributed systems and large-scale data processing.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="cursor-pointer"
                >
                  <Badge
                    variant="outline"
                    className="bg-white/5 text-gray-300 border-white/20 px-4 py-2 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/50 transition-all"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-purple-500/25 cursor-pointer"
                  size="lg"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Projects
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 text-lg font-medium backdrop-blur-sm bg-transparent cursor-pointer"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-14 h-14 bg-white/5 border border-white/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-400/50 transition-all backdrop-blur-sm cursor-pointer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-96 h-96 flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Code className="w-16 h-16 text-purple-400" />
              </motion.div>

              <motion.div
                className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.2 }}
              >
                <Database className="w-8 h-8 text-blue-400" />
              </motion.div>

              <motion.div
                className="absolute top-10 right-10 w-14 h-14 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer"
                animate={{
                  rotate: -360,
                  y: [0, -15, 0],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  y: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.2 }}
              >
                <Cloud className="w-7 h-7 text-purple-400" />
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-16 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer"
                animate={{
                  rotate: 180,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.3 }}
              >
                <TestTube className="w-6 h-6 text-blue-400" />
              </motion.div>

              <motion.div
                className="absolute bottom-16 right-8 w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-white/10 cursor-pointer"
                animate={{
                  rotate: -180,
                  x: [0, 10, 0],
                }}
                transition={{
                  rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  x: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.2 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
