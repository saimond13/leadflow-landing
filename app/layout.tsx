import type { Metadata } from "next"
import { Barlow_Condensed, Outfit } from "next/font/google"
import "./globals.css"

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const SITE_URL = "https://www.mileadflow.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HERSEC Security | Protección Digital y Prevención de Fraude",
    template: "%s | HERSEC Security",
  },
  description:
    "HERSEC Security te protege contra fraudes digitales, phishing y amenazas online. Servicios de seguridad operativa para pymes, estudios y profesionales en Argentina y LATAM.",
  keywords: [
    "seguridad digital para empresas",
    "protección contra phishing",
    "prevención de fraude digital",
    "detección de amenazas online",
    "ciberseguridad para pymes",
    "respuesta a incidentes digitales",
    "exposición digital OSINT",
    "automatizaciones seguras n8n",
    "HERSEC Security",
    "seguridad operativa Argentina",
    "protección digital LATAM",
    "estafas digitales empresas",
    "mail shield phishing",
    "diagnóstico de seguridad digital",
  ],
  authors: [{ name: "HERSEC Security", url: SITE_URL }],
  creator: "HERSEC Security",
  publisher: "HERSEC Security",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "HERSEC Security | Protección Digital y Prevención de Fraude",
    description:
      "Fraudes digitales, phishing y amenazas online afectan a empresas como la tuya todos los días. HERSEC los detecta antes de que sea tarde.",
    url: SITE_URL,
    siteName: "HERSEC Security",
    type: "website",
    locale: "es_ES",
    images: [{ url: "/hersec-logo-tagline.png", width: 1200, height: 630, alt: "HERSEC Security — Inteligencia, Prevención y Respuesta Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HERSEC Security | Protección Digital y Prevención de Fraude",
    description: "Protección contra phishing, fraude digital y amenazas online para pymes y profesionales en Argentina y LATAM.",
    images: ["/hersec-logo-tagline.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "HERSEC Security",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/hersec-icon.jpg` },
      description: "Micro consultora de seguridad digital especializada en protección contra phishing, prevención de fraude y respuesta ante incidentes para pymes en Argentina y LATAM.",
      contactPoint: { "@type": "ContactPoint", email: "contacto@hersecsecurity.com", contactType: "customer service", availableLanguage: ["Spanish"] },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Argentina" },
        { "@type": "AdministrativeArea", name: "América Latina" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios HERSEC Security",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "HERSEC Mail Shield", description: "Detección temprana de correos sospechosos, phishing y amenazas entrantes." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "HERSEC Exposure Scan", description: "Diagnóstico de exposición digital y riesgos públicos." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "HERSEC Fraud Response", description: "Asistencia y ordenamiento de evidencia ante estafas digitales." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "HERSEC Automation Guard", description: "Automatizaciones seguras para procesos internos y validaciones críticas." } },
        ],
      },
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "HERSEC Security", publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: "es" },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "HERSEC Security | Protección Digital y Prevención de Fraude",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description: "HERSEC Security ofrece protección digital, detección de phishing, prevención de fraude y respuesta ante incidentes para pymes y profesionales.",
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL }] },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${outfit.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
