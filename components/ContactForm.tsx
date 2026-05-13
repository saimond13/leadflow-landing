"use client"

import { useState, useRef, FormEvent } from "react"

const WEBHOOK_URL = "/api/lead"

const SERVICES = [
  "HERSEC Mail Shield",
  "Diagnóstico inicial de ciberseguridad",
  "Monitoreo de correos sospechosos",
  "Protección contra phishing",
  "Otro",
]

// ── Utilidades ──────────────────────────────────────────────────────────────

function sanitizeText(value: string, maxLength = 120): string {
  return value.trim().replace(/[<>`{}$]/g, "").slice(0, maxLength)
}

function normalizeWhatsapp(value: string): string {
  return value.replace(/\D/g, "")
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// ── Tipos ────────────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error"

interface FormState {
  nombre: string
  email: string
  empresa: string
  servicio: string
  whatsapp: string
  website: string   // honeypot — oculto
}

interface FieldErrors {
  nombre?: string
  email?: string
  servicio?: string
  whatsapp?: string
}

// ── Submit ───────────────────────────────────────────────────────────────────

async function submitLead(payload: Record<string, string>): Promise<void> {
  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(payload),
  })

  let data: { success?: boolean; message?: string } | null = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    throw new Error(data?.message ?? "Error del servidor")
  }
}

// ── Componente ────────────────────────────────────────────────────────────────

const EMPTY_FORM: FormState = {
  nombre: "", email: "", empresa: "", servicio: "", whatsapp: "", website: "",
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<FieldErrors>({})
  const cooldownRef = useRef(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // limpiar error del campo al editar
    if (name in errors) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  function validate(): FieldErrors {
    const errs: FieldErrors = {}
    const nombre = sanitizeText(form.nombre, 80)
    const email = form.email.trim().toLowerCase()
    const servicio = sanitizeText(form.servicio, 120)
    const wa = normalizeWhatsapp(form.whatsapp)

    if (nombre.length < 2)  errs.nombre   = "Ingresá tu nombre (mínimo 2 caracteres)."
    if (!EMAIL_RE.test(email)) errs.email = "Ingresá un email válido."
    if (!servicio)           errs.servicio = "Seleccioná un servicio."
    if (wa.length < 10 || wa.length > 15) errs.whatsapp = "Ingresá un WhatsApp válido con código de país. Ej: +54 9 3491 687718"

    return errs
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // honeypot — si tiene contenido, silenciar sin enviar
    if (form.website) {
      setStatus("success")
      return
    }

    // cooldown anti double-submit
    if (cooldownRef.current || status === "loading") return

    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus("loading")
    cooldownRef.current = true

    const payload = {
      nombre:   sanitizeText(form.nombre, 80),
      email:    form.email.trim().toLowerCase().slice(0, 120),
      empresa:  sanitizeText(form.empresa, 120),
      servicio: sanitizeText(form.servicio, 120),
      whatsapp: normalizeWhatsapp(form.whatsapp),
      origen:   "hersec-landing",
    }

    try {
      await submitLead(payload)
      setStatus("success")
      setForm(EMPTY_FORM)
    } catch (err) {
      if (process.env.NODE_ENV === "development") console.error(err)
      setStatus("error")
    } finally {
      // cooldown de 15 segundos para evitar spam
      setTimeout(() => { cooldownRef.current = false }, 15_000)
    }
  }

  // ── Success ────────────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center gap-5 rounded-2xl px-8 py-16 text-center"
        style={{ background: "var(--surface)", border: "1px solid rgba(232,184,75,0.25)" }}
      >
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "rgba(232,184,75,0.1)", border: "1px solid rgba(232,184,75,0.25)" }}
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "#e8b84b" }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold uppercase" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>
            Solicitud recibida
          </h3>
          <p className="mt-2 text-sm max-w-xs mx-auto leading-relaxed" style={{ color: "var(--text-2)" }}>
            Te enviamos un WhatsApp para que puedas agendar tu diagnóstico.
          </p>
        </div>
        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          Tu información es tratada con estricta confidencialidad.
        </p>
        <button
          onClick={() => { setStatus("idle"); setErrors({}) }}
          className="mt-1 text-xs underline cursor-pointer"
          style={{ color: "var(--text-3)" }}
        >
          Enviar otra solicitud
        </button>
      </div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  const isLoading = status === "loading"

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4 rounded-2xl p-8"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      {/* Honeypot — oculto para humanos, visible para bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 0, height: 0, overflow: "hidden" }}>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
      </div>

      {/* Nombre + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nombre" className="text-xs font-medium" style={{ color: "var(--text-2)" }}>
            Nombre <span style={{ color: "#e8b84b" }}>*</span>
          </label>
          <input
            id="nombre" name="nombre" type="text"
            className={`input${errors.nombre ? " border-red-500/60" : ""}`}
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            maxLength={80}
            disabled={isLoading}
            autoComplete="name"
          />
          {errors.nombre && <p className="text-[11px]" style={{ color: "#f87171" }}>{errors.nombre}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium" style={{ color: "var(--text-2)" }}>
            Email <span style={{ color: "#e8b84b" }}>*</span>
          </label>
          <input
            id="email" name="email" type="email"
            className={`input${errors.email ? " border-red-500/60" : ""}`}
            placeholder="tu@email.com"
            value={form.email}
            onChange={handleChange}
            maxLength={120}
            disabled={isLoading}
            autoComplete="email"
          />
          {errors.email && <p className="text-[11px]" style={{ color: "#f87171" }}>{errors.email}</p>}
        </div>
      </div>

      {/* Empresa */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="empresa" className="text-xs font-medium" style={{ color: "var(--text-2)" }}>
          Empresa / Negocio
        </label>
        <input
          id="empresa" name="empresa" type="text"
          className="input"
          placeholder="Nombre de tu empresa (opcional)"
          value={form.empresa}
          onChange={handleChange}
          maxLength={120}
          disabled={isLoading}
          autoComplete="organization"
        />
      </div>

      {/* Servicio */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="servicio" className="text-xs font-medium" style={{ color: "var(--text-2)" }}>
          ¿Qué necesitás? <span style={{ color: "#e8b84b" }}>*</span>
        </label>
        <select
          id="servicio" name="servicio"
          className={`input${errors.servicio ? " border-red-500/60" : ""}`}
          value={form.servicio}
          onChange={handleChange}
          disabled={isLoading}
        >
          <option value="" disabled>Seleccioná un servicio</option>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.servicio && <p className="text-[11px]" style={{ color: "#f87171" }}>{errors.servicio}</p>}
      </div>

      {/* WhatsApp */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="whatsapp" className="text-xs font-medium" style={{ color: "var(--text-2)" }}>
          WhatsApp <span style={{ color: "#e8b84b" }}>*</span>
          <span className="ml-1.5 font-normal" style={{ color: "var(--text-3)" }}>
            (te contactamos para coordinar el diagnóstico)
          </span>
        </label>
        <input
          id="whatsapp" name="whatsapp" type="tel"
          className={`input${errors.whatsapp ? " border-red-500/60" : ""}`}
          placeholder="+54 9 3491 687718"
          value={form.whatsapp}
          onChange={handleChange}
          disabled={isLoading}
          autoComplete="tel"
        />
        {errors.whatsapp
          ? <p className="text-[11px]" style={{ color: "#f87171" }}>{errors.whatsapp}</p>
          : <p className="text-[10px]" style={{ color: "var(--text-3)" }}>Ej: +54 9 3491 687718 · incluí código de país</p>
        }
      </div>

      {/* Error global */}
      {status === "error" && (
        <div
          className="rounded-lg px-4 py-3 text-xs"
          style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", color: "#f87171" }}
        >
          No pudimos enviar la solicitud. Revisá los datos o intentá nuevamente.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full justify-center"
        style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? "not-allowed" : "pointer" }}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </span>
        ) : "Solicitar diagnóstico"}
      </button>

      {/* Footer del form */}
      <div className="flex flex-col gap-1.5 pt-1">
        <p className="text-center text-[11px] leading-relaxed" style={{ color: "var(--text-3)" }}>
          Usaremos tus datos únicamente para responder tu consulta y coordinar el diagnóstico solicitado.
        </p>
        <p className="text-center text-[10px] uppercase tracking-wide" style={{ color: "rgba(232,184,75,0.35)", fontFamily: "monospace" }}>
          Diagnóstico sin costo · Respuesta por WhatsApp · 100% confidencial
        </p>
      </div>
    </form>
  )
}
