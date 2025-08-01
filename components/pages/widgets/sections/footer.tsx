import React from 'react';

import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react"

import { motion } from "framer-motion"
import { Separator } from '@/components/ui/separator';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 px-8 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Leonardo Viana</h3>
              <p className="text-gray-400">Full Stack Engineer</p>
            </div>
            <div className="flex items-center gap-6">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
          <Separator className="my-8 bg-white/10" />
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Leonardo Viana. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
