import Image from "next/image"
import ContactForm from "@/components/ContactForm"
import RainingLettersBackground, { ScrambledTagline } from "@/components/ui/modern-animated-hero-section"
import { AnimatedSection } from "@/components/AnimatedSection"
import VerticalTabs from "@/components/ui/vertical-tabs"

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
function ScanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect x="7" y="7" width="10" height="10" rx="1" />
    </svg>
  )
}
function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}
function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const PRODUCTS = [
  {
    icon: MailIcon,
    title: "HERSEC Mail Shield",
    description: "Detección temprana de correos sospechosos, phishing y amenazas entrantes. Analizamos cada mensaje antes de que impacte en tu operación.",
    tags: ["Phishing", "Email Threats", "Detección en tiempo real"],
  },
  {
    icon: ScanIcon,
    title: "HERSEC Exposure Scan",
    description: "Diagnóstico de exposición digital y riesgos públicos. Identificamos qué información tuya o de tu empresa está expuesta en la red.",
    tags: ["OSINT", "Riesgo digital", "Diagnóstico"],
  },
  {
    icon: AlertIcon,
    title: "HERSEC Fraud Response",
    description: "Asistencia y ordenamiento de evidencia ante estafas digitales. Te acompañamos cuando ya ocurrió el fraude para minimizar el daño.",
    tags: ["Respuesta a incidentes", "Evidencia digital", "Fraude"],
  },
  {
    icon: ZapIcon,
    title: "HERSEC Automation Guard",
    description: "Automatizaciones seguras para procesos internos y validaciones críticas. Integramos herramientas sin comprometer la seguridad de tu operación.",
    tags: ["n8n", "Procesos seguros", "Automatización"],
  },
]

const PAIN_POINTS = [
  {
    icon: MailIcon,
    title: "Correos de phishing que parecen reales",
    description: "Los atacantes imitan a proveedores, bancos o colegas. Un clic equivocado puede comprometer toda tu operación.",
  },
  {
    icon: EyeIcon,
    title: "Tu información está expuesta sin saberlo",
    description: "Datos de tu empresa, empleados o clientes circulan en la red. No lo sabés hasta que alguien los usa en tu contra.",
  },
  {
    icon: AlertIcon,
    title: "Estafas digitales cada vez más sofisticadas",
    description: "Transferencias fraudulentas, suplantación de identidad, accesos no autorizados. Las pymes son el blanco preferido.",
  },
  {
    icon: LockIcon,
    title: "Procesos internos sin controles de seguridad",
    description: "Automatizaciones mal configuradas o integraciones inseguras abren puertas que nadie vigila.",
  },
]

const PROCESS = [
  { step: "01", title: "Analizamos", description: "Evaluamos tu situación actual: qué herramientas usás, qué información está expuesta y cuáles son tus puntos de vulnerabilidad reales." },
  { step: "02", title: "Detectamos", description: "Identificamos amenazas activas y riesgos latentes antes de que se conviertan en incidentes. Monitoreo continuo y alertas tempranas." },
  { step: "03", title: "Implementamos", description: "Desplegamos las medidas necesarias, automatizamos procesos de seguridad y te acompañamos para que tu operación quede protegida." },
]

const WHY = [
  "Foco exclusivo en seguridad digital — no hacemos de todo",
  "Herramientas reales: VirusTotal, AbuseIPDB, análisis forense",
  "Alertas inmediatas por WhatsApp ante amenazas detectadas",
  "Conocemos el contexto argentino y latinoamericano",
  "Sin paquetes genéricos — diagnóstico real para tu caso",
  "Respuesta en menos de 24hs ante cualquier incidente",
]

const SECTORS = ["Estudios jurídicos", "Estudios contables", "Inmobiliarias", "Comercios", "Startups", "Salud", "Logística", "ONGs"]

const glass = {
  background: "rgba(12,25,41,0.88)",
  backdropFilter: "blur(2px)",
} as const

export default function HersecLanding() {
  return (
    <>
      <RainingLettersBackground />

      <main className="relative min-h-screen" style={{ zIndex: 1 }}>

        {/* Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50">
          <div
            className="absolute inset-0 backdrop-blur-md"
            style={{ background: "rgba(12,25,41,0.85)", borderBottom: "1px solid rgba(232,184,75,0.08)" }}
          />
          <div className="relative flex items-center justify-between px-6 py-4 md:px-12">
            <a href="#inicio" aria-label="HERSEC Security — Inicio" className="flex items-center gap-2.5">
              <Image
                src="/hersec-icon.jpg"
                alt="Logotipo HERSEC Security"
                width={36}
                height={36}
                className="object-contain rounded-sm"
                priority
              />
              <span
                className="text-xl font-bold uppercase tracking-widest"
                style={{ color: "#e8b84b", fontFamily: "var(--font-serif)" }}
              >
                HERSEC
              </span>
            </a>
            <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
              {[
                { label: "Riesgos", href: "#riesgos" },
                { label: "Servicios", href: "#servicios" },
                { label: "Proceso", href: "#proceso" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-white"
                  style={{ color: "var(--text-2)" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a href="#contacto" className="btn-primary text-xs px-5 py-2.5 uppercase tracking-wide">
              Solicitar diagnóstico
            </a>
          </div>
        </header>

        {/* Hero */}
        <section id="inicio" aria-label="Inicio" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-16">
          <div className="flex flex-col items-center gap-7 text-center">
            <AnimatedSection delay={0}>
              <div className="badge">
                <ShieldIcon className="h-3.5 w-3.5" />
                Inteligencia, Prevención y Respuesta Digital
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1
                className="text-[clamp(5rem,18vw,14rem)] font-bold uppercase leading-none tracking-tight"
                style={{
                  fontFamily: "var(--font-serif)",
                  background: "linear-gradient(135deg, #e8b84b 0%, #f5d47a 55%, #c49a30 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                HERSEC
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ScrambledTagline />
            </AnimatedSection>

            <AnimatedSection delay={260}>
              <p
                className="mx-auto max-w-xl text-base leading-relaxed md:text-lg"
                style={{ color: "var(--text-2)" }}
              >
                Fraudes digitales, phishing y amenazas online afectan a empresas como la tuya todos los días.
                <br />
                <span style={{ color: "var(--text-1)" }}>Nosotros los detectamos antes de que sea tarde.</span>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={280}>
              <div
                className="w-40 h-px mx-auto"
                style={{ background: "linear-gradient(to right, transparent, rgba(232,184,75,0.5), transparent)" }}
              />
            </AnimatedSection>

            <AnimatedSection delay={350}>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #e8b84b, #c49a30)",
                    color: "#0c1929",
                    boxShadow: "0 0 24px rgba(232,184,75,0.3)",
                  }}
                >
                  Solicitar diagnóstico
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center gap-2 rounded-xl border px-8 py-3.5 text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:bg-white/5"
                  style={{ borderColor: "rgba(232,184,75,0.25)", color: "rgba(232,184,75,0.8)" }}
                >
                  Ver servicios
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={430}>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {SECTORS.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "var(--text-3)" }}
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(232,184,75,0.3)", fontFamily: "monospace" }}>
              scroll
            </span>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 1L8 8L15 1" stroke="rgba(232,184,75,0.3)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </section>

        {/* Problemas Reales */}
        <section id="riesgos" aria-label="Problemas reales" className="px-6 py-24 md:px-12" style={glass}>
          <div className="mx-auto max-w-6xl">
            <AnimatedSection className="mb-3 text-center"><span className="section-label">Problemas Reales</span></AnimatedSection>
            <AnimatedSection delay={80} className="mb-4 text-center">
              <h2 className="text-4xl font-bold uppercase md:text-6xl leading-none" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>
                Las amenazas no esperan.<br /><span className="text-gradient">Tu empresa tampoco debería.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={140} className="mb-16">
              <p className="mx-auto max-w-2xl text-center text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                Estos son los riesgos más frecuentes que enfrentan pymes, estudios y profesionales en Argentina y LATAM hoy.
              </p>
            </AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-2">
              {PAIN_POINTS.map((point, i) => {
                const Icon = point.icon
                return (
                  <AnimatedSection key={point.title} delay={i * 80}>
                    <div className="card group h-full" style={{ borderColor: "rgba(232,184,75,0.12)" }}>
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "rgba(232,184,75,0.08)", color: "#e8b84b", border: "1px solid rgba(232,184,75,0.15)" }}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold uppercase tracking-wide" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>{point.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{point.description}</p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicios" aria-label="Servicios HERSEC" className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-6xl">
            <AnimatedSection className="mb-3 text-center"><span className="section-label">Nuestros Servicios</span></AnimatedSection>
            <AnimatedSection delay={80} className="mb-4 text-center">
              <h2 className="text-4xl font-bold uppercase md:text-6xl leading-none" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>
                Cuatro productos.<br /><span className="text-gradient">Una sola misión.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={140} className="mb-16">
              <p className="mx-auto max-w-2xl text-center text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                Cada servicio está diseñado para cubrir una fase crítica de tu seguridad operativa. Sin paquetes genéricos.
              </p>
            </AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-2">
              {PRODUCTS.map((product, i) => {
                const Icon = product.icon
                return (
                  <AnimatedSection key={product.title} delay={i * 80}>
                    <div className="card group h-full">
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "rgba(232,184,75,0.1)", color: "#e8b84b", border: "1px solid rgba(232,184,75,0.15)" }}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold uppercase tracking-wide" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>{product.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{product.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span key={tag} className="rounded-md px-2 py-0.5 text-xs font-medium" style={{ background: "rgba(232,184,75,0.08)", color: "#e8b84b", border: "1px solid rgba(232,184,75,0.18)" }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Vertical Tabs */}
        <AnimatedSection>
          <div style={{ background: "rgba(12,25,41,0.92)", borderTop: "1px solid rgba(232,184,75,0.08)", borderBottom: "1px solid rgba(232,184,75,0.08)" }}>
            <VerticalTabs />
          </div>
        </AnimatedSection>

        {/* Process */}
        <section id="proceso" aria-label="Cómo trabajamos" className="px-6 py-24 md:px-12" style={glass}>
          <div className="mx-auto max-w-4xl">
            <AnimatedSection className="mb-3 text-center"><span className="section-label">Cómo trabajamos</span></AnimatedSection>
            <AnimatedSection delay={80} className="mb-4 text-center">
              <h2 className="text-4xl font-bold uppercase md:text-5xl" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>Metodología clara,<br />resultados concretos</h2>
            </AnimatedSection>
            <AnimatedSection delay={140} className="mb-14 text-center">
              <p className="mx-auto max-w-xl text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>Tres pasos para transformar tu exposición al riesgo en seguridad operativa real.</p>
            </AnimatedSection>
            <div className="flex flex-col">
              {PROCESS.map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 120} direction="left">
                  <div className="flex gap-6 mb-6 rounded-2xl p-7" style={{ background: "rgba(12,25,41,0.88)", border: "1px solid rgba(232,184,75,0.1)" }}>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-bold" style={{ background: "rgba(232,184,75,0.1)", border: "1px solid rgba(232,184,75,0.2)", color: "#e8b84b", fontFamily: "var(--font-serif)" }}>{item.step}</div>
                    <div className="pt-1">
                      <h3 className="mb-2 text-xl font-bold uppercase tracking-wide" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why HERSEC */}
        <section id="nosotros" aria-label="Por qué elegir HERSEC" className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <AnimatedSection direction="left">
                  <span className="section-label">Por qué HERSEC</span>
                  <h2 className="mt-4 mb-6 text-4xl font-bold uppercase leading-none md:text-6xl" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>
                    Seguridad real,<br /><span className="text-gradient">no marketing.</span>
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                    No somos una agencia genérica con "servicio de seguridad". Somos especialistas en protección digital operativa para pymes y profesionales que no pueden darse el lujo de ser vulnerables.
                  </p>
                </AnimatedSection>
              </div>
              <div className="grid gap-3">
                {WHY.map((item, i) => (
                  <AnimatedSection key={item} delay={i * 60} direction="right">
                    <div className="flex items-center gap-4 rounded-xl px-4 py-3" style={{ background: "rgba(232,184,75,0.04)", border: "1px solid rgba(232,184,75,0.1)" }}>
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(232,184,75,0.12)", color: "#e8b84b" }}>
                        <CheckIcon className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm" style={{ color: "var(--text-1)" }}>{item}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-6 py-16 md:px-12" style={glass}>
          <AnimatedSection>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-8 py-20 text-center" style={{ background: "linear-gradient(135deg, rgba(232,184,75,0.07) 0%, rgba(232,184,75,0.03) 100%)", border: "1px solid rgba(232,184,75,0.18)" }}>
              <div className="gold-line absolute top-0 left-1/4 right-1/4" />
              <h2 className="mb-4 text-4xl font-bold uppercase md:text-5xl" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>
                ¿Qué tan expuesta<br />está tu operación?
              </h2>
              <p className="mb-8 text-base max-w-lg mx-auto" style={{ color: "var(--text-2)" }}>
                Solicitá un diagnóstico inicial y descubrí exactamente cuáles son tus puntos de riesgo antes de que alguien más los encuentre.
              </p>
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold uppercase tracking-widest transition-all duration-200" style={{ background: "linear-gradient(135deg, #e8b84b, #c49a30)", color: "#0c1929", boxShadow: "0 0 24px rgba(232,184,75,0.25)" }}>
                Solicitar diagnóstico gratuito
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              <p className="mt-4 text-xs uppercase tracking-widest" style={{ color: "var(--text-3)" }}>Sin compromiso · Respondemos en menos de 24hs</p>
            </div>
          </AnimatedSection>
        </section>

        {/* Contact */}
        <section id="contacto" aria-label="Contacto" className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-2xl">
            <AnimatedSection className="mb-3 text-center"><span className="section-label">Contacto</span></AnimatedSection>
            <AnimatedSection delay={80} className="mb-4 text-center">
              <h2 className="text-4xl font-bold uppercase md:text-5xl" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>Hablemos de tu seguridad</h2>
            </AnimatedSection>
            <AnimatedSection delay={140} className="mb-12 text-center">
              <p className="mx-auto max-w-md text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>Completá el formulario y te respondemos en menos de 24hs con un diagnóstico inicial sin costo.</p>
            </AnimatedSection>
            <AnimatedSection delay={200}><ContactForm /></AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 md:px-12" style={glass}>
          <div className="gold-line mb-10" />
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-2.5">
                <Image src="/hersec-icon.jpg" alt="HERSEC Security" width={28} height={28} className="object-contain rounded-sm" />
                <span className="text-lg font-bold uppercase tracking-widest" style={{ color: "#e8b84b", fontFamily: "var(--font-serif)" }}>HERSEC</span>
              </div>
              <nav aria-label="Navegación footer" className="flex flex-wrap items-center justify-center gap-6">
                {[
                  { label: "Riesgos", href: "#riesgos" },
                  { label: "Servicios", href: "#servicios" },
                  { label: "Proceso", href: "#proceso" },
                  { label: "Contacto", href: "#contacto" },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-white" style={{ color: "var(--text-3)" }}>{item.label}</a>
                ))}
              </nav>
            </div>
            <div className="gold-line mb-6" />
            <div className="flex flex-col items-center justify-between gap-2 text-center text-xs uppercase tracking-wide md:flex-row" style={{ color: "var(--text-3)" }}>
              <span>© {new Date().getFullYear()} HERSEC Security. Todos los derechos reservados.</span>
              <a href="mailto:contacto@hersecsecurity.com" className="hover:text-white transition-colors" style={{ color: "rgba(232,184,75,0.5)" }}>contacto@hersecsecurity.com</a>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}
