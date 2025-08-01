import React from 'react';

import { motion } from "framer-motion"

export const Navigation: React.FC = () => {
  return (
      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="relative z-50 px-8 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div className="text-2xl font-bold text-white cursor-pointer" whileHover={{ scale: 1.05 }}>
            Leonardo Viana
          </motion.div>
          <div className="hidden md:flex items-center space-x-10">
            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer"
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
  )
}
