import React from 'react';

import {
  Github,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeInUp, staggerContainer } from './section-definitions';


export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Telemedicine Platform",
      description:
        "Scalable healthcare platform processing thousands of patient consultations daily with real-time video integration and secure data handling.",
      sector: "Healthcare",
      tech: ["Node.js", "React", "PostgreSQL", "AWS", "WebRTC"],
      features: ["Real-time consultations", "Patient management", "Secure data handling"],
    },
    {
      title: "Auction Marketplace",
      description:
        "Fully automated auction platform for collectibles with real-time bidding, payment processing, and inventory management.",
      sector: "E-commerce",
      tech: ["React", "Node.js", "Redis", "MySQL", "WebSocket"],
      features: ["Real-time bidding", "Payment integration", "Inventory tracking"],
    },
    {
      title: "Financial CRM System",
      description:
        "Comprehensive CRM solution for financial services with lead tracking, opportunity management, and automated workflows.",
      sector: "Finance",
      tech: [".NET", "C#", "SQL Server", "Angular", "Azure"],
      features: ["Lead management", "Workflow automation", "Financial reporting"],
    },
    {
      title: "Media Content Platform",
      description:
        "High-traffic content management system for major media company handling millions of daily visitors and content distribution.",
      sector: "Media",
      tech: ["Next.js", "Node.js", "MongoDB", "AWS", "CDN"],
      features: ["Content distribution", "High availability", "Real-time analytics"],
    },
  ]

  return (
    <section id="projects" className="relative z-10 px-8 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Projects
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp} className="group cursor-pointer" whileHover={{ y: -10 }}>
              <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/50 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">{project.sector}</Badge>
                    <motion.div whileHover={{ scale: 1.2, rotate: 45 }}>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <motion.div key={tech} whileHover={{ scale: 1.05 }}>
                        <Badge
                          variant="outline"
                          className="text-xs text-gray-300 border-white/20 cursor-pointer hover:border-purple-400/50 transition-all"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 cursor-pointer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
