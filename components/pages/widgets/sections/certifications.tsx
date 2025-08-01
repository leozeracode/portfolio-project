import React from 'react';

import {
  Download,
  ExternalLink,
} from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeInUp, staggerContainer } from './section-definitions';

export const Certifications: React.FC = () => {
  return (
    <section className="relative z-10 px-8 py-32 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Certifications &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Achievements
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              title: "AWS Certified Solutions Architect",
              issuer: "Amazon Web Services",
              date: "2023",
              description: "Professional level certification for designing distributed systems on AWS",
              preview: "/certificates/aws-solutions-architect.pdf",
              badge: "AWS",
              color: "from-orange-500 to-yellow-500",
            },
            {
              title: "Microsoft Azure Developer Associate",
              issuer: "Microsoft",
              date: "2022",
              description: "Certification for developing and maintaining cloud applications on Azure",
              preview: "/certificates/azure-developer.pdf",
              badge: "Azure",
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "React Developer Certification",
              issuer: "Meta",
              date: "2023",
              description: "Advanced React development patterns and best practices",
              preview: "/certificates/react-developer.pdf",
              badge: "React",
              color: "from-blue-400 to-cyan-400",
            },
            {
              title: "Node.js Application Developer",
              issuer: "OpenJS Foundation",
              date: "2022",
              description: "Professional Node.js development and server-side JavaScript",
              preview: "/certificates/nodejs-developer.pdf",
              badge: "Node.js",
              color: "from-green-500 to-emerald-500",
            },
            {
              title: "Docker Certified Associate",
              issuer: "Docker Inc.",
              date: "2023",
              description: "Container orchestration and Docker ecosystem expertise",
              preview: "/certificates/docker-certified.pdf",
              badge: "Docker",
              color: "from-blue-600 to-indigo-600",
            },
            {
              title: "Kubernetes Administrator",
              issuer: "Cloud Native Computing Foundation",
              date: "2023",
              description: "Kubernetes cluster administration and orchestration",
              preview: "/certificates/kubernetes-admin.pdf",
              badge: "K8s",
              color: "from-purple-500 to-pink-500",
            },
          ].map((cert, index) => (
            <motion.div key={index} variants={fadeInUp} className="group cursor-pointer" whileHover={{ y: -10 }}>
              <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/50 transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`bg-gradient-to-r ${cert.color} text-white border-0 px-3 py-1`}>
                      {cert.badge}
                    </Badge>
                    <span className="text-sm text-gray-400">{cert.date}</span>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-purple-400 transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-purple-400 font-medium">{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-400 leading-relaxed">{cert.description}</p>

                  <div className="relative bg-white/5 rounded-lg p-4 border border-white/10 hover:border-purple-400/30 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">Certificate Preview</span>
                    </div>

                    <div className="bg-white rounded-sm p-3 text-xs text-gray-800 space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="font-bold text-blue-600">{cert.issuer}</div>
                        <div className="text-gray-500">{cert.date}</div>
                      </div>
                      <div className="text-center py-4">
                        <div className="font-bold text-lg mb-2">CERTIFICATE</div>
                        <div className="text-sm mb-1">This certifies that</div>
                        <div className="font-bold text-base">Leonardo Viana</div>
                        <div className="text-sm mt-2">has successfully completed</div>
                        <div className="font-semibold">{cert.title}</div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Certificate ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 cursor-pointer text-xs"
                      >
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 cursor-pointer text-xs"
                      >
                        <Download className="w-3 h-3 mr-2" />
                        PDF
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
