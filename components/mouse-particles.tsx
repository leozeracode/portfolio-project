"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
}

export default function MouseParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    let particleId = 0

    const createParticle = (x: number, y: number) => {
      const colors = ["#8B5CF6", "#3B82F6", "#06B6D4", "#10B981"]
      const newParticle: Particle = {
        id: particleId++,
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }

      setParticles((prev) => [...prev, newParticle])

      // Remove particle after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
      }, 1000)
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Create particles occasionally
      if (Math.random() < 0.1) {
        createParticle(e.clientX, e.clientY)
      }
    }

    const handleClick = (e: MouseEvent) => {
      // Create burst of particles on click
      for (let i = 0; i < 8; i++) {
        setTimeout(() => createParticle(e.clientX, e.clientY), i * 50)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-[9996] rounded-full"
          style={{
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: particle.x + (Math.random() - 0.5) * 100,
            y: particle.y - Math.random() * 100 - 50,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  )
}
