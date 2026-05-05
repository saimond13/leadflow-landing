"use client"

import { useState, FormEvent } from "react"

const WEBHOOK_URL = "https://api.mileadflow.com/webhook/hersec-contact"

const SERVICES = [
  "Mail Shield — Detección de phishing y correos sospechosos",
  "Exposure Scan — Diagnóstico de exposición digital",
  "Fraud Response — Respuesta y evidencia ante estafas",
  "Automation Guard — Automatizaciones seguras",
  "Consulta general / No estoy seguro",
]

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [form, setForm] = useState({ nombre: "", email: "", empresa: "", servicio: "", mensaje: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, origen: "hersec-landing" }),
      })
      if (!res.ok) throw new Error("Error en el servidor")
      setStatus("success")
      setForm({ nombre: "", email: "", empresa: "", servicio: "", mensaje: "" })
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl px-8 py-16 text-center" style={{ background: "var(--surface)", border: "1px solid rgba(232,184,75,0.25)" }}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full text-3xl" style={{ background: "rgba(232,184,75,0.1)", color: "#e8b84b" }}>✓</div>
        <h3 className="text-xl font-semibold" style={{ color: "var(--text-1)" }}>¡Solicitud recibida!</h3>
        <p className="text-sm max-w-xs" style={{ color: "var(--text-2)" }}>Te respondemos en menos de 24hs con tu diagnóstico inicial. Revisá tu bandeja de entrada.</p>
        <p className="text-xs" style={{ color: "var(--text-3)" }}>Tu información es tratada con estricta confidencialidad.</p>
        <button onClick={() => setStatus("idle")} className="mt-2 text-xs underline" style={{ color: "var(--text-3)" }}>Enviar otro mensaje</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Nombre *</label>
          <input className="input" type="text" name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Email *</label>
          <input className="input" type="email" name="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} required />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Empresa / Negocio</label>
        <input className="input" type="text" name="empresa" placeholder="Nombre de tu empresa (opcional)" value={form.empresa} onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium" style={{ color: "var(--text-2)" }}>¿Qué servicio te interesa? *</label>
        <select className="input" name="servicio" value={form.servicio} onChange={handleChange} required>
          <option value="" disabled>Seleccioná un servicio</option>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Contanos tu situación *</label>
        <textarea className="input min-h-[110px] resize-none" name="mensaje" placeholder="¿Qué problema querés resolver? ¿Ya tuviste algún incidente? Cuanto más detalle, mejor podemos ayudarte." value={form.mensaje} onChange={handleChange} required />
      </div>
      {status === "error" && <p className="text-xs" style={{ color: "#f87171" }}>Hubo un error al enviar. Intentá de nuevo o escribinos directo por WhatsApp.</p>}
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center">
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </span>
        ) : "Solicitar diagnóstico gratuito"}
      </button>
      <div className="flex items-center justify-between gap-4 pt-1">
        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          <span style={{ color: "rgba(232,184,75,0.5)" }}>&#x25C6;</span> Diagnóstico sin costo · Respuesta &lt;24hs
        </p>
        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          100% confidencial
        </p>
      </div>
    </form>
  )
}
