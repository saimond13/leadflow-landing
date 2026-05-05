"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"

interface Character {
  char: string
  x: number
  y: number
  speed: number
}

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
  const [characters, setCharacters] = useState<Character[]>([])
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set())

  const createCharacters = useCallback(() => {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
    const newCharacters: Character[] = []
    for (let i = 0; i < 300; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.07 + Math.random() * 0.22,
      })
    }
    return newCharacters
  }, [])

  useEffect(() => { setCharacters(createCharacters()) }, [createCharacters])

  useEffect(() => {
    const interval = setInterval(() => {
      const next = new Set<number>()
      const count = Math.floor(Math.random() * 3) + 3
      for (let i = 0; i < count; i++) {
        next.add(Math.floor(Math.random() * characters.length))
      }
      setActiveIndices(next)
    }, 50)
    return () => clearInterval(interval)
  }, [characters.length])

  useEffect(() => {
    let rafId: number
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
    const tick = () => {
      setCharacters((prev) =>
        prev.map((c) => ({
          ...c,
          y: c.y + c.speed,
          ...(c.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: allChars[Math.floor(Math.random() * allChars.length)],
          }),
        }))
      )
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0, background: "#0c1929" }} aria-hidden="true">
      {characters.map((char, index) => (
        <span
          key={index}
          className="absolute select-none"
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            transform: `translate(-50%, -50%)`,
            color: activeIndices.has(index) ? "#e8b84b" : "rgba(232,184,75,0.1)",
            textShadow: activeIndices.has(index) ? "0 0 8px rgba(232,184,75,0.9), 0 0 18px rgba(232,184,75,0.4)" : "none",
            fontFamily: "monospace",
            fontSize: "1.5rem",
            fontWeight: activeIndices.has(index) ? "700" : "300",
            transition: "color 0.1s, text-shadow 0.1s",
            willChange: "top",
          }}
        >
          {char.char}
        </span>
      ))}
    </div>
  )
}

export default RainingLettersBackground
