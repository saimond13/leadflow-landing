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
  const [form, setForm] = useState({ nombre: "", email: "", empresa: "", servicio: "", whatsapp: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      setForm({ nombre: "", email: "", empresa: "", servicio: "", whatsapp: "" })
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-2xl px-8 py-16 text-center" style={{ background: "var(--surface)", border: "1px solid rgba(232,184,75,0.25)" }}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)" }}>
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25d366" }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold uppercase" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>¡Solicitud recibida!</h3>
          <p className="mt-2 text-sm max-w-xs mx-auto leading-relaxed" style={{ color: "var(--text-2)" }}>
            En breve nuestro asistente te va a contactar por WhatsApp para coordinar tu diagnóstico inicial.
          </p>
        </div>
        <p className="text-xs" style={{ color: "var(--text-3)" }}>Tu información es tratada con estricta confidencialidad.</p>
        <button onClick={() => setStatus("idle")} className="mt-1 text-xs underline" style={{ color: "var(--text-3)" }}>Enviar otra solicitud</button>
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
        <label className="text-xs font-medium" style={{ color: "var(--text-2)" }}>
          WhatsApp *
          <span className="ml-1.5 font-normal" style={{ color: "var(--text-3)" }}>(te contactamos para coordinar tu diagnóstico)</span>
        </label>
        <div className="relative">
          <span
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium select-none"
            style={{ color: "rgba(232,184,75,0.6)" }}
          >
            +
          </span>
          <input
            className="input pl-7"
            type="tel"
            name="whatsapp"
            placeholder="549XXXXXXXXXX"
            value={form.whatsapp}
            onChange={handleChange}
            required
            pattern="[0-9\s\-\+\(\)]{7,20}"
          />
        </div>
        <p className="text-[10px]" style={{ color: "var(--text-3)" }}>Ej: 5493425989300 — incluí código de país sin el +</p>
      </div>
      {status === "error" && (
        <p className="text-xs" style={{ color: "#f87171" }}>
          Hubo un error al enviar. Intentá de nuevo o escribinos directo por WhatsApp.
        </p>
      )}
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
          <span style={{ color: "rgba(232,184,75,0.5)" }}>&#x25C6;</span> Diagnóstico sin costo · Te contactamos por WhatsApp
        </p>
        <p className="text-xs" style={{ color: "var(--text-3)" }}>100% confidencial</p>
      </div>
    </form>
  )
}
