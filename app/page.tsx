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
function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
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

const SERVICES = [
  {
    icon: ShieldIcon,
    title: "Ciberseguridad",
    description: "Protegemos tu infraestructura contra amenazas reales. Análisis de vulnerabilidades, hardening de servidores y monitoreo continuo.",
    tags: ["Pentesting", "Hardening", "Vulnerabilidades"],
  },
  {
    icon: ZapIcon,
    title: "Automatizaciones n8n",
    description: "Conectamos tus herramientas y eliminamos procesos manuales. Flujos inteligentes que ahorran tiempo y reducen errores.",
    tags: ["n8n", "APIs", "Integraciones", "Bots"],
  },
  {
    icon: CodeIcon,
    title: "Desarrollo Web & SaaS",
    description: "Creamos plataformas web, sistemas SaaS y aplicaciones a medida. Tecnología moderna, diseño profesional, entregas reales.",
    tags: ["Next.js", "React", "Node.js", "SaaS"],
  },
  {
    icon: SearchIcon,
    title: "Auditorías Técnicas",
    description: "Revisión completa de tu infraestructura, código y configuraciones para encontrar vulnerabilidades antes que alguien las explote.",
    tags: ["Security Review", "Code Audit", "Infra"],
  },
]

const PROCESS = [
  { step: "01", title: "Diagnóstico", description: "Analizamos tu situación actual: qué tecnología usás, qué problemas tenés y qué objetivos querés alcanzar." },
  { step: "02", title: "Plan a medida", description: "Diseñamos la solución más eficiente para tu caso. Sin paquetes genéricos, sin costos innecesarios." },
  { step: "03", title: "Implementación", description: "Ejecutamos, probamos y te acompañamos hasta que todo funcione perfectamente. Y después también." },
]

const WHY = [
  "Entregamos lo que prometemos, sin vueltas",
  "Experiencia real en sistemas productivos",
  "Conocemos el mercado argentino y sus necesidades",
  "Precio justo para pymes y emprendedores",
  "Soporte post-entrega incluido",
  "Código limpio y documentado que podés controlar",
]

const INDUSTRIES = ["Inmobiliarias", "Consultorios", "E-commerce", "Estudios jurídicos", "Restaurantes", "Startups", "ONGs", "Agencias"]

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
            <a href="#inicio" aria-label="Hersec — Inicio" className="flex items-center gap-2.5">
              <Image
                src="/hersec-icon.jpg"
                alt="Logotipo Hersec"
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
              {["Servicios", "Proceso", "Nosotros", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-white"
                  style={{ color: "var(--text-2)" }}
                >
                  {item}
                </a>
              ))}
            </nav>
            <a href="#contacto" className="btn-primary text-xs px-5 py-2.5 uppercase tracking-wide">
              Consultar gratis
            </a>
          </div>
        </header>

        {/* Hero */}
        <section id="inicio" aria-label="Inicio" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-16">
          <div className="flex flex-col items-center gap-7 text-center">
            <AnimatedSection delay={0}>
              <div className="badge">
                <ShieldIcon className="h-3.5 w-3.5" />
                Tecnología sin fronteras
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
                  Consultar gratis
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
                {INDUSTRIES.map((ind) => (
                  <span
                    key={ind}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "var(--text-3)" }}
                  >
                    {ind}
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

        {/* Stats bar */}
        <div style={glass}>
          <div className="gold-line" />
          <AnimatedSection className="px-6 py-10 md:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {[
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, value: "360°", label: "Seguridad integral", sub: "Pentest · Hardening · Monitoreo" },
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>, value: "n8n", label: "Automatizaciones", sub: "APIs · Bots · Workflows" },
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>, value: "SaaS", label: "Desarrollo web", sub: "Next.js · React · Node.js" },
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, value: "Global", label: "Para todo el mundo", sub: "Desde Argentina · Sin fronteras" },
                ].map((item, i) => (
                  <div
                    key={item.value}
                    className="flex flex-col items-center gap-2 text-center px-4 py-6"
                    style={{ borderRight: i < 3 ? "1px solid rgba(232,184,75,0.1)" : "none" }}
                  >
                    <div style={{ color: "rgba(232,184,75,0.5)" }}>{item.icon}</div>
                    <span className="text-3xl font-bold uppercase md:text-4xl leading-none" style={{ color: "#e8b84b", fontFamily: "var(--font-serif)" }}>{item.value}</span>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-2)" }}>{item.label}</span>
                    <span className="text-[10px] uppercase tracking-wider hidden md:block" style={{ color: "var(--text-3)", fontFamily: "monospace" }}>{item.sub}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs uppercase tracking-[0.2em] mt-4 pt-4" style={{ color: "var(--text-3)", borderTop: "1px solid rgba(232,184,75,0.07)", fontFamily: "monospace" }}>
                Trabajamos para clientes en todo el mundo
              </p>
            </div>
          </AnimatedSection>
          <div className="gold-line" />
        </div>

        {/* Services */}
        <section id="servicios" aria-label="Servicios de Hersec" className="px-6 py-24 md:px-12" style={glass}>
          <div className="mx-auto max-w-6xl">
            <AnimatedSection className="mb-3 text-center"><span className="section-label">Servicios</span></AnimatedSection>
            <AnimatedSection delay={80} className="mb-4 text-center">
              <h2 className="text-4xl font-bold uppercase md:text-6xl leading-none" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>
                Todo lo que necesitás, <span className="text-gradient">en un solo lugar</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={140} className="mb-16">
              <p className="mx-auto max-w-2xl text-center text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                Desde asegurar tu infraestructura hasta automatizar tus operaciones o construir el sistema que tu negocio necesita.
              </p>
            </AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-2">
              {SERVICES.map((service, i) => {
                const Icon = service.icon
                return (
                  <AnimatedSection key={service.title} delay={i * 80}>
                    <div className="card group h-full">
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "rgba(232,184,75,0.1)", color: "#e8b84b", border: "1px solid rgba(232,184,75,0.15)" }}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold uppercase tracking-wide" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>{service.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
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
        <section id="proceso" aria-label="Cómo trabajamos" className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection className="mb-3 text-center"><span className="section-label">Cómo trabajamos</span></AnimatedSection>
            <AnimatedSection delay={80} className="mb-4 text-center">
              <h2 className="text-4xl font-bold uppercase md:text-5xl" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>Simple, directo y sin vueltas</h2>
            </AnimatedSection>
            <AnimatedSection delay={140} className="mb-14 text-center">
              <p className="mx-auto max-w-xl text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>Nuestro proceso está pensado para llegar rápido a resultados concretos.</p>
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

        {/* Why Hersec */}
        <section id="nosotros" aria-label="Por qué elegir Hersec" className="px-6 py-24 md:px-12" style={glass}>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <AnimatedSection direction="left">
                  <span className="section-label">Por qué Hersec</span>
                  <h2 className="mt-4 mb-6 text-4xl font-bold uppercase leading-none md:text-6xl" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>
                    Tecnología real,<br /><span className="text-gradient">resultados concretos.</span>
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                    No somos una agencia de marketing con sección de "tecnología". Somos técnicos que construyen, aseguran y automatizan. Cada proyecto lo tratamos como si fuera propio.
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
        <section className="px-6 py-16 md:px-12">
          <AnimatedSection>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-8 py-20 text-center" style={{ background: "linear-gradient(135deg, rgba(232,184,75,0.07) 0%, rgba(232,184,75,0.03) 100%)", border: "1px solid rgba(232,184,75,0.18)" }}>
              <div className="gold-line absolute top-0 left-1/4 right-1/4" />
              <h2 className="mb-4 text-4xl font-bold uppercase md:text-6xl" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>¿Listo para el próximo nivel?</h2>
              <p className="mb-8 text-base" style={{ color: "var(--text-2)" }}>Primera consulta sin costo. Te respondemos en menos de 24hs.</p>
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold uppercase tracking-widest transition-all duration-200" style={{ background: "linear-gradient(135deg, #e8b84b, #c49a30)", color: "#0c1929", boxShadow: "0 0 24px rgba(232,184,75,0.25)" }}>
                Contactar ahora
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            </div>
          </AnimatedSection>
        </section>

        {/* Contact */}
        <section id="contacto" aria-label="Contacto" className="px-6 py-24 md:px-12" style={glass}>
          <div className="mx-auto max-w-2xl">
            <AnimatedSection className="mb-3 text-center"><span className="section-label">Contacto</span></AnimatedSection>
            <AnimatedSection delay={80} className="mb-4 text-center">
              <h2 className="text-4xl font-bold uppercase md:text-5xl" style={{ color: "var(--text-1)", fontFamily: "var(--font-serif)" }}>Hablemos de tu proyecto</h2>
            </AnimatedSection>
            <AnimatedSection delay={140} className="mb-12 text-center">
              <p className="mx-auto max-w-md text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>Completá el formulario y te respondemos en menos de 24hs.</p>
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
                <Image src="/hersec-icon.jpg" alt="Hersec" width={28} height={28} className="object-contain rounded-sm" />
                <span className="text-lg font-bold uppercase tracking-widest" style={{ color: "#e8b84b", fontFamily: "var(--font-serif)" }}>HERSEC</span>
              </div>
              <nav aria-label="Navegación footer" className="flex flex-wrap items-center justify-center gap-6">
                {["Servicios", "Proceso", "Nosotros", "Contacto"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-white" style={{ color: "var(--text-3)" }}>{item}</a>
                ))}
              </nav>
            </div>
            <div className="gold-line mb-6" />
            <div className="flex flex-col items-center justify-between gap-2 text-center text-xs uppercase tracking-wide md:flex-row" style={{ color: "var(--text-3)" }}>
              <span>© {new Date().getFullYear()} Hersec. Todos los derechos reservados.</span>
              <span>mileadflow.com</span>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}
