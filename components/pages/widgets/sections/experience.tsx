import React from 'react';

import { motion } from "framer-motion"
import { Building } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge';
import { fadeInUp } from './section-definitions';


export const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Solvd, Inc.",
      position: "Full Stack Engineer",
      period: "Aug 2024 – Present",
      location: "Remote",
      description:
        "Global software engineering and consultancy firm providing tailored digital solutions across multiple industries, focusing on digital transformation and operational efficiency.",
      projects: [
        {
          title: "CRM Modernization for Field Service Companies",
          description:
            "Modernized comprehensive CRM platform unifying technicians, dispatchers, and administrative staff into a customizable digital environment, replacing paper-based workflows.",
          achievements: [
            "Redesigned CRM layout improving responsiveness, intuitiveness, and modernity",
            "Optimized UX/UI to enhance usability and user experience",
            "Added interactive features boosting platform efficiency and productivity",
            "Ensured modern design aligned with new technologies",
          ],
          tech: [".NET Framework", "Webforms", "Bootstrap", "jQuery", "HTML", "CSS"],
        },
        {
          title: "Property and Quote Management System",
          description:
            "Developed property and quote management platform with focus on data control, report generation, and changelog integration for auditability and operational transparency.",
          achievements: [
            "Engineered scalable resolvers and data operations using MongoDB and Prisma",
            "Enhanced system performance and data integrity",
            "Built reusable React components and documented processes",
            "Implemented comprehensive unit and integration tests with Jest",
          ],
          tech: ["Node.js", "React", "NextJs", "TypeScript", "MongoDB", "Prisma", "Git", "GitHub", "Jira"],
        },
      ],
    },
    {
      company: "O2OBots",
      position: "Full Stack Engineer",
      period: "Oct 2022 - Aug 2024",
      location: "Remote",
      description:
        "Startup specialized in creating bots for selling digital products through WhatsApp, offering automated solutions for direct consumer interaction.",
      projects: [
        {
          title: "O2OSpot SaaS CRM Development",
          description:
            "Developed comprehensive SaaS CRM focused on optimizing sales and customer relationship management with lead tracking, workflow automation, and detailed reporting.",
          achievements: [
            "Architected full-stack solutions for frontend, backend, and infrastructure",
            "Provided technical guidance and architectural decisions",
            "Implemented comprehensive testing strategies using xUnit, Jest, Supertest, and Cypress",
            "Participated in code reviews ensuring code quality and consistency",
          ],
          tech: [
            ".NET",
            "C#",
            "Node.js",
            "NestJs",
            "React",
            "NextJs",
            "TypeScript",
            "MongoDB",
            "PostgreSQL",
            "TypeOrm",
            "AWS",
          ],
        },
      ],
    },
    {
      company: "RaroLabs",
      position: "Full Stack Engineer",
      period: "Jan 2021 - Oct 2022",
      location: "Remote",
      description:
        "Brazilian technology company specializing in customized digital solutions for startups and enterprise clients, focusing on innovation, scalability, and user experience.",
      projects: [
        {
          title: "Real-Time Auction and Marketplace Platform",
          description:
            "Built fully automated, real-time online auction and marketplace platform from ground up, enabling users to create, manage, and participate in auctions efficiently.",
          achievements: [
            "Developed microservices architecture aimed at scalability",
            "Created real-time auction management system with traditional marketplace features",
            "Provided technical guidance for frontend, backend, and infrastructure decisions",
            "Participated in hiring processes conducting technical interviews on React, .NET, and Node.js",
          ],
          tech: [
            ".NET",
            "Node.js",
            "ExpressJs",
            "React",
            "NextJs",
            "CronJob",
            "BullJs",
            "C#",
            "TypeScript",
            "Redis",
            "MySQL",
            "PostgreSQL",
            "TypeOrm",
            "AWS",
          ],
        },
      ],
    },
    {
      company: "Infosistemas - Unidas",
      position: "Full Stack Engineer",
      period: "Sep 2020 - Jan 2021",
      location: "Remote",
      description:
        "Worked with Unidas, one of Brazil's largest mobility companies offering vehicle rentals, fleet outsourcing, and pre-owned car sales for corporate and individual customers.",
      projects: [
        {
          title: "Locavia-Unidas CRM Integration",
          description:
            "Developed integrations between Locavia platform and Unidas' CRM, creating APIs and microservices to optimize data exchange and improve operational processes.",
          achievements: [
            "Created microservices facilitating communication between legacy systems",
            "Developed WebAPIs using Node.js and Express.js for seamless integration",
            "Implemented comprehensive testing suite using Jest and Testing Library",
            "Created integration tests using InMemory and Supertest",
          ],
          tech: ["Node.js", "ExpressJs", "Angular", "TypeScript", "SQL Server", "TypeOrm", "CronJob", "Git", "Jira"],
        },
      ],
    },
    {
      company: "Meep",
      position: "Full Stack Engineer",
      period: "Oct 2019 - Sep 2020",
      location: "Remote",
      description:
        "Technology company specializing in management and automation solutions for food service businesses, offering Portal Meep CRM and payment solutions.",
      projects: [
        {
          title: "PortalMeep CRM & MeepFood Platform",
          description:
            "Maintained and enhanced PortalMeep CRM for food businesses. During COVID-19, contributed to MeepFood project focusing on delivery services and financial operations.",
          achievements: [
            "Enhanced CRM features for customer, product, inventory, and cash flow management",
            "Contributed to delivery platform development during pandemic",
            "Managed financial operations and order management systems",
            "Created static websites and maintained relational databases",
          ],
          tech: [
            "ReactJS",
            ".NET Core",
            ".NET Framework",
            "Webforms",
            "AngularJs",
            "TypeScript",
            "SQL Server",
            "HTML",
            "CSS",
            "Bootstrap",
            "jQuery",
          ],
        },
      ],
    },
    {
      company: "Santa Casa Hospital",
      position: "Full Stack Engineer (Intern)",
      period: "May 2019 - Oct 2019",
      location: "Belo Horizonte, Brazil",
      description:
        "Largest philanthropic hospital in Minas Gerais, recognized for high-complexity medical care in oncology, cardiology, neurology, orthopedics, pediatrics, and general surgery.",
      projects: [
        {
          title: "PortalApps Hospital Management Platform",
          description:
            "Maintained and improved internal platform hosting applications for hospital management, optimizing operations across various departments.",
          achievements: [
            "Fixed bugs and enhanced existing features for hospital management",
            "Developed new functionalities optimizing departmental operations",
            "Created applications using AspNet WebForms and .NET Framework",
            "Built static websites for internal hospital systems",
          ],
          tech: [".NET Framework", "Webforms", "HTML", "CSS", "Bootstrap", "jQuery", "JavaScript", "Git", "OracleDb"],
        },
      ],
    },
  ]

  return (
    <section id="experience" className="relative z-10 px-8 py-32 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="group cursor-pointer"
              whileHover={{ scale: 1.01, y: -5 }}
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/50 transition-all">
                <CardHeader className="pb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors flex items-center gap-3">
                        <Building className="w-6 h-6" />
                        {exp.company}
                      </CardTitle>
                      <CardDescription className="text-xl font-medium text-purple-400 mt-2">
                        {exp.position}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-300 font-medium text-lg">{exp.period}</div>
                      <div className="text-gray-400 text-sm">{exp.location}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-4 leading-relaxed">{exp.description}</p>
                </CardHeader>

                <CardContent className="space-y-8">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="border-l-2 border-purple-400/30 pl-6 space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-white mb-3">Key Achievements:</h5>
                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="leading-relaxed">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <motion.div key={tech} whileHover={{ scale: 1.05 }}>
                            <Badge
                              variant="outline"
                              className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-all cursor-pointer"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
