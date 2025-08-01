import React from 'react';

import { motion } from "framer-motion"
import { Badge } from '@/components/ui/badge';
import { fadeInUp } from './section-definitions';

export const Skill: React.FC = () => {
  const programmingLanguages = ["C#", "JavaScript", "TypeScript"]
  const frameworks = [
    "Node.js",
    "Express.js",
    "NestJs",
    "React.js",
    "Next.js",
    "Angular",
    "AngularJs",
    "Webforms",
    ".NET",
  ]
  const testingTools = ["Jest", "Cypress", "Supertest", "xUnit"]
  const databases = ["PostgreSQL", "MySQL", "SQL Server", "OracleDb", "MongoDB"]
  const cloudServices = ["AWS SQS", "AWS SES", "AWS S3", "AWS SMS", "AWS RDS", "CloudWatch"]
  const otherTech = [
    "Prisma",
    "TypeOrm",
    "Redis",
    "CronJob",
    "BullJs",
    "JWT/OAuth2.0",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub",
    "GitLab",
  ]

  return (
    <section className="relative z-10 px-8 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Programming Languages", skills: programmingLanguages },
            { title: "Frameworks & Libraries", skills: frameworks },
            { title: "Testing Tools", skills: testingTools },
            { title: "Databases", skills: databases },
            { title: "Cloud Services", skills: cloudServices },
            { title: "Other Technologies", skills: otherTech },
          ].map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div key={skill} whileHover={{ scale: 1.1, y: -2 }}>
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-all cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
