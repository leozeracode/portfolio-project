"use client"


import CursorTrail from "@/components/cursor-trail"
import MouseParticles from "@/components/mouse-particles"
import { About, Certifications, Contact, Experience, Footer, Hero, Navigation, Projects, Skill } from "@/components/pages"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden cursor-none">
      <CursorTrail />
      <MouseParticles />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139,92,246,0.1) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <Navigation />

      <Hero />
      <About/>
      <Skill/>
      <Experience/>
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}
