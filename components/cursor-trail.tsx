"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MousePosition {
  x: number
  y: number
}

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<MousePosition[]>([])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Update trail
      setTrail((prev) => {
        const newTrail = [newPosition, ...prev.slice(0, 8)]
        return newTrail
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-400/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />

      {/* Trail Effect */}
      {trail.map((position, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full pointer-events-none z-[9997]"
          animate={{
            x: position.x - 4,
            y: position.y - 4,
            scale: 1 - index * 0.1,
            opacity: 1 - index * 0.15,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      ))}
    </>
  )
}
