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
              title: "EF SET English Certificate",
              issuer: "EF C1 Advanced",
              date: "2025",
              description: "High proficiency in English language skills certified by EF SET",
              preview: "/certificates/ef-set-certificate.pdf",
              badge: "EF SET",
              url: "https://cert.efset.org/en/fapy65",
              color: "from-green-400 to-teal-400",
            },
            {
              title: "Uncomplicating Kubernetes",
              issuer: "Linuxtips",
              date: "2024",
              description: "Comprehensive Kubernetes course covering core concepts and practical applications",
              preview: "/certificates/uncomplicating-kubernetes.png",
              badge: "Kubernetes",
              url: "https://www.credential.net/3705a113-5193-4995-a475-705ca7108730#acc.UpQhq3MZ",
              color: "from-purple-400 to-indigo-400",
            },
            {
              title: "Serverless Framework Bootcamp",
              issuer: "Udemy",
              date: "2023",
              description: "Serverless Framework Bootcamp: Node.js, AWS & Microservices",
              preview: "/certificates/serverless-bootcamp.pdf",
              badge: "Serverless",
              url: "https://www.udemy.com/certificate/UC-5fb05821-6f01-47c5-8df4-dd28236e9cd4/",
              color: "from-yellow-400 to-orange-400",
            },
            {
              title: "Microservices Architecture",
              issuer: "Udemy",
              date: "2023",
              description: "Microservices Architecture and Implementation on .NET",
              preview: "/certificates/microservices-architecture-dotnet.pdf",
              badge: "Microservices",
              url: "https://www.udemy.com/certificate/UC-73b836ac-64b4-46a4-8918-a72f22b87d5f/",
              color: "from-red-400 to-pink-400",
            },
            {
              title: "Clean Architecture in ReactJS",
              issuer: "Udemy",
              date: "2023",
              description: "ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID",
              preview: "/certificates/clean-architecture-reactjs.pdf",
              badge: "ReactJS",
              url: "https://www.udemy.com/certificate/UC-e3315d63-6707-4cbf-bdff-b722930330b9/",
              color: "from-blue-400 to-cyan-400",
            },
            {
              title: "Advanced Node.js",
              issuer: "Udemy",
              date: "2023",
              description: "Advanced Node.js with TDD, Clean Architecture and Typescript",
              preview: "/certificates/advanced-nodejs.pdf",
              badge: "Advanced Node.js",
              url: "https://www.udemy.com/certificate/UC-859c8247-a829-40f5-8050-a6045148ed75/",
              color: "from-green-400 to-emerald-400",
            },
            {
              title: "Clean Architecture in Node.js",
              issuer: "Udemy",
              date: "2020",
              description: "Node.js, Typescript, TDD, Clean Architecture and SOLID",
              preview: "/certificates/clean-architecture-nodejs.pdf",
              badge: "Node.js",
              url: "https://www.udemy.com/certificate/UC-736dc484-df50-42fd-bed5-13e64796577d/",
              color: "from-yellow-400 to-amber-400",
            },
            {
              title: "Apache Kafka",
              issuer: "Desenvolvedor.io",
              date: "2024",
              description: "Comprehensive course on Apache Kafka for building real-time data pipelines and streaming apps",
              preview: "/certificates/apache-kafka.png",
              badge: "Kafka",
              url: "https://desenvolvedor.io/certificado/925bccea-dfd4-4302-9c52-132da5c6e62f",
              color: "from-red-400 to-rose-400",
            },
            {
              title: "Kubernetes for Developers",
              issuer: "Desenvolvedor.io",
              date: "2024",
              description: "In-depth Kubernetes course covering container orchestration, deployment, and management",
              preview: "/certificates/kubernetes-developers.png",
              badge: "K8s",
              url: "https://desenvolvedor.io/certificado/a30a452b-ecc4-481f-9153-b751024540f8",
              color: "from-purple-400 to-fuchsia-400",
            }
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

                    {cert.preview.endsWith('.pdf') ? (
                      <iframe
                        src={cert.preview}
                        title={`${cert.title} Preview`}
                        className="w-full h-48 rounded border-none"
                      />
                    ) : (
                      <img
                        src={cert.preview}
                        alt={`${cert.title} Preview`}
                        className="w-full h-48 object-contain rounded"
                      />
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                      <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 cursor-pointer text-xs"
                      >
                      <a href={cert.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View
                      </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                      <Button
                      asChild
                      size="sm"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 cursor-pointer text-xs"
                      >
                      <a href={cert.preview} download target="_blank" rel="noopener noreferrer">
                        <Download className="w-3 h-3 mr-2" />
                        Download
                      </a>
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
