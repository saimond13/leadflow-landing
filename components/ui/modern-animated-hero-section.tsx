"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

class TextScramble {
  el: HTMLElement
  chars: string
  queue: Array<{ from: string; to: string; start: number; end: number; char?: string }>
  frame: number
  frameRequest: number
  resolve: (value: void | PromiseLike<void>) => void

  constructor(el: HTMLElement) {
    this.el = el
    this.chars = "!<>-_\\/[]{}—=+*^?#"
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.update = this.update.bind(this)
  }

  setText(newText: string) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise<void>((resolve) => (this.resolve = resolve))
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ""
      const to = newText[i] || ""
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ""
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

export const ScrambledTagline: React.FC = () => {
  const elementRef = useRef<HTMLParagraphElement>(null)
  const scramblerRef = useRef<TextScramble | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (mounted && scramblerRef.current) {
      const phrases = [
        "Inteligencia, Prevencion y Respuesta Digital",
        "Proteccion contra phishing y fraude",
        "Deteccion temprana de amenazas online",
        "Seguridad operativa para tu empresa",
        "Diagnostico de exposicion digital",
        "Respuesta ante fraudes e incidentes",
      ]
      let counter = 0
      const next = () => {
        if (scramblerRef.current) {
          scramblerRef.current.setText(phrases[counter]).then(() => {
            setTimeout(next, 2200)
          })
          counter = (counter + 1) % phrases.length
        }
      }
      next()
    }
  }, [mounted])

  return (
    <p
      ref={elementRef}
      className="text-center text-sm font-medium uppercase"
      style={{ fontFamily: "monospace", color: "#e8b84b", letterSpacing: "0.22em", minWidth: "32ch", minHeight: "1.6em" }}
    >
      Inteligencia, Prevencion y Respuesta Digital
    </p>
  )
}

const RainingLettersBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
    const CHAR_COUNT = 300

    const chars = Array.from({ length: CHAR_COUNT }, () => ({
      char: ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.07 + Math.random() * 0.22,
    }))

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const activeSet = new Set<number>()
    let lastActiveUpdate = 0
    let rafId: number

    const tick = (timestamp: number) => {
      if (timestamp - lastActiveUpdate > 50) {
        activeSet.clear()
        const count = Math.floor(Math.random() * 3) + 3
        for (let i = 0; i < count; i++) {
          activeSet.add(Math.floor(Math.random() * CHAR_COUNT))
        }
        lastActiveUpdate = timestamp
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Inactive chars — no shadow (fast path)
      ctx.shadowBlur = 0
      ctx.fillStyle = "rgba(232,184,75,0.1)"
      ctx.font = "300 24px monospace"
      for (let i = 0; i < chars.length; i++) {
        const c = chars[i]
        c.y += c.speed
        if (c.y >= 100) {
          c.y = -5
          c.x = Math.random() * 100
          c.char = ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)]
        }
        if (!activeSet.has(i)) {
          ctx.fillText(c.char, (c.x / 100) * canvas.width, (c.y / 100) * canvas.height)
        }
      }

      // Active chars — glow (only 3–6 per frame)
      ctx.font = "bold 24px monospace"
      ctx.fillStyle = "#e8b84b"
      ctx.shadowColor = "rgba(232,184,75,0.9)"
      ctx.shadowBlur = 8
      for (const i of activeSet) {
        const c = chars[i]
        ctx.fillText(c.char, (c.x / 100) * canvas.width, (c.y / 100) * canvas.height)
      }
      ctx.shadowBlur = 0

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, background: "#0c1929" }}
      aria-hidden="true"
    />
  )
}

export default RainingLettersBackground
