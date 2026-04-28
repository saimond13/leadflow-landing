"use client"

import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  direction?: "up" | "left" | "right"
}

export function AnimatedSection({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const initial: CSSProperties =
    direction === "up"
      ? { opacity: 0, transform: "translateY(36px)" }
      : direction === "left"
      ? { opacity: 0, transform: "translateX(-36px)" }
      : { opacity: 0, transform: "translateX(36px)" }

  const final: CSSProperties = { opacity: 1, transform: "translate(0,0)" }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(visible ? final : initial),
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
