import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad | HERSEC Security",
  description: "Política de privacidad de HERSEC Security. Información sobre el tratamiento de datos personales.",
  robots: { index: true, follow: true },
}

const LAST_UPDATED = "15 de mayo de 2025"
const CONTACT_EMAIL = "contacto@hersecsecurity.com"
const SITE_URL = "https://www.hersecsecurity.com"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: "#0c1929", color: "#c8d6e0" }}>

      {/* Header */}
      <header style={{ borderBottom: "1px solid rgba(232,184,75,0.1)", background: "rgba(8,18,32,0.95)" }}>
        <div className="mx-auto max-w-4xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-lg font-bold uppercase tracking-widest" style={{ color: "#e8b84b", fontFamily: "var(--font-serif)" }}>
              HERSEC
            </span>
            <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(200,214,224,0.5)" }}>Security</span>
          </Link>
          <Link href="/" className="text-xs uppercase tracking-widest hover:opacity-80 transition-opacity" style={{ color: "rgba(232,184,75,0.7)" }}>
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: "#e8b84b", fontFamily: "monospace" }}>
            HERSEC Security
          </p>
          <h1 className="text-4xl font-bold uppercase mb-3" style={{ color: "#f0f0f6", fontFamily: "var(--font-serif)" }}>
            Política de Privacidad
          </h1>
          <p className="text-sm" style={{ color: "rgba(200,214,224,0.5)" }}>
            Última actualización: {LAST_UPDATED}
          </p>
        </div>

        <div className="flex flex-col gap-10 text-sm leading-relaxed" style={{ color: "#8898a8" }}>

          <Section title="1. Responsable del tratamiento">
            <p>
              <strong style={{ color: "#c8d6e0" }}>HERSEC Security</strong> es responsable del tratamiento de los datos personales
              recopilados a través del sitio web <a href={SITE_URL} style={{ color: "#e8b84b" }}>{SITE_URL}</a> y sus formularios de contacto.
            </p>
            <p className="mt-3">Contacto: <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#e8b84b" }}>{CONTACT_EMAIL}</a></p>
          </Section>

          <Section title="2. Datos que recopilamos">
            <p>Al completar el formulario de diagnóstico, recopilamos:</p>
            <ul className="mt-3 flex flex-col gap-2 ml-4">
              {[
                "Nombre y apellido",
                "Dirección de correo electrónico",
                "Número de WhatsApp (con código de país)",
                "Nombre de empresa u organización (opcional)",
                "Servicio de interés seleccionado",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#e8b84b" }}>·</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              También podemos recopilar de forma automática: dirección IP, tipo de navegador, páginas visitadas y tiempo de sesión,
              con fines exclusivos de análisis de seguridad y mejora del servicio.
            </p>
          </Section>

          <Section title="3. Finalidad del tratamiento">
            <p>Los datos recopilados se utilizan exclusivamente para:</p>
            <ul className="mt-3 flex flex-col gap-2 ml-4">
              {[
                "Responder tu consulta y coordinar el diagnóstico de seguridad solicitado",
                "Contactarte por WhatsApp o email para el seguimiento del servicio",
                "Enviar información relevante sobre los servicios de HERSEC Security (solo si lo aceptaste)",
                "Cumplir con obligaciones legales aplicables",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#e8b84b" }}>·</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-medium" style={{ color: "#c8d6e0" }}>
              No utilizamos tus datos para fines publicitarios de terceros ni los vendemos bajo ninguna circunstancia.
            </p>
          </Section>

          <Section title="4. Base legal del tratamiento">
            <p>
              El tratamiento de tus datos personales se basa en el consentimiento expreso que otorgás al completar y enviar el formulario
              de contacto. Podés retirar ese consentimiento en cualquier momento escribiéndonos a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#e8b84b" }}>{CONTACT_EMAIL}</a>.
            </p>
          </Section>

          <Section title="5. Terceros y transferencia de datos">
            <p>Para operar nuestros servicios utilizamos los siguientes proveedores:</p>
            <ul className="mt-3 flex flex-col gap-3 ml-4">
              {[
                { name: "WhatsApp (Meta Platforms)", desc: "Para coordinación y contacto directo con el cliente." },
                { name: "n8n (automatización interna)", desc: "Procesamiento de formularios en servidores privados auto-hospedados." },
                { name: "Supabase / PostgreSQL", desc: "Almacenamiento cifrado de datos de contacto y registros de servicio." },
                { name: "Vercel", desc: "Hosting del sitio web." },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2">
                  <span style={{ color: "#e8b84b" }}>·</span>
                  <span><strong style={{ color: "#c8d6e0" }}>{item.name}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Ninguno de estos proveedores recibe autorización para usar tus datos con fines propios.
            </p>
          </Section>

          <Section title="6. Retención de datos">
            <p>
              Conservamos tus datos personales durante el tiempo necesario para prestarte el servicio solicitado y hasta{" "}
              <strong style={{ color: "#c8d6e0" }}>2 años</strong> después del último contacto, salvo que solicites su eliminación
              antes o que la ley exija un plazo distinto.
            </p>
          </Section>

          <Section title="7. Tus derechos">
            <p>Tenés derecho a:</p>
            <ul className="mt-3 flex flex-col gap-2 ml-4">
              {[
                "Acceder a los datos que tenemos sobre vos",
                "Rectificar datos incorrectos o incompletos",
                "Solicitar la eliminación de tus datos (derecho al olvido)",
                "Oponerte al tratamiento o solicitar su limitación",
                "Retirar tu consentimiento en cualquier momento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#e8b84b" }}>·</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, escribinos a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#e8b84b" }}>{CONTACT_EMAIL}</a> con el asunto
              "Derechos de privacidad". Respondemos en un plazo máximo de 15 días hábiles.
            </p>
          </Section>

          <Section title="8. Seguridad">
            <p>
              Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o divulgación.
              Toda la información se transmite bajo protocolo HTTPS y se almacena con cifrado en reposo.
            </p>
          </Section>

          <Section title="9. Cookies">
            <p>
              Este sitio puede utilizar cookies técnicas estrictamente necesarias para su funcionamiento. No utilizamos cookies
              publicitarias ni de rastreo de terceros.
            </p>
          </Section>

          <Section title="10. Cambios a esta política">
            <p>
              Podemos actualizar esta política de privacidad periódicamente. Cualquier cambio significativo será notificado en esta misma
              página con la fecha de actualización. Te recomendamos revisarla regularmente.
            </p>
          </Section>

          <Section title="11. Contacto">
            <p>
              Si tenés preguntas sobre esta política o sobre el tratamiento de tus datos personales, podés contactarnos en:
            </p>
            <div className="mt-4 rounded-xl p-5 inline-block" style={{ background: "rgba(232,184,75,0.05)", border: "1px solid rgba(232,184,75,0.15)" }}>
              <p><strong style={{ color: "#c8d6e0" }}>HERSEC Security</strong></p>
              <p className="mt-1">Email: <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#e8b84b" }}>{CONTACT_EMAIL}</a></p>
              <p className="mt-1">Web: <a href={SITE_URL} style={{ color: "#e8b84b" }}>{SITE_URL}</a></p>
            </div>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-4xl px-6 py-8" style={{ borderTop: "1px solid rgba(232,184,75,0.08)" }}>
        <p className="text-center text-xs uppercase tracking-widest" style={{ color: "rgba(200,214,224,0.3)", fontFamily: "monospace" }}>
          © {new Date().getFullYear()} HERSEC Security — Argentina / LATAM
        </p>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-base font-bold uppercase tracking-wide mb-4" style={{ color: "#f0f0f6", fontFamily: "var(--font-serif)" }}>
        {title}
      </h2>
      {children}
    </section>
  )
}
