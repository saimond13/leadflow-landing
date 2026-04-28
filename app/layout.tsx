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
    default: "Hersec | Ciberseguridad, Automatizaciones y Desarrollo Web",
    template: "%s | Hersec",
  },
  description:
    "Hersec ofrece servicios de ciberseguridad, automatizaciones con n8n, desarrollo web & SaaS y auditorías técnicas para empresas de todo el mundo. Consultá gratis.",
  keywords: [
    "ciberseguridad para empresas",
    "auditorías de seguridad informática",
    "automatizaciones n8n",
    "desarrollo web profesional",
    "desarrollo SaaS",
    "pentesting",
    "hardening de servidores",
    "análisis de vulnerabilidades",
    "asesor tecnológico",
    "desarrollo Next.js React",
    "seguridad informática",
    "integraciones API",
    "Hersec",
  ],
  authors: [{ name: "Hersec", url: SITE_URL }],
  creator: "Hersec",
  publisher: "Hersec",
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
    title: "Hersec | Ciberseguridad, Automatizaciones y Desarrollo Web",
    description:
      "Servicios tecnológicos profesionales: ciberseguridad, automatizaciones con n8n, desarrollo web & SaaS y auditorías técnicas para empresas globales.",
    url: SITE_URL,
    siteName: "Hersec",
    type: "website",
    locale: "es_ES",
    images: [{ url: "/hersec-logo-tagline.png", width: 1200, height: 630, alt: "Hersec — Tu Asesor Tecnológico Personal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hersec | Ciberseguridad, Automatizaciones y Desarrollo Web",
    description: "Ciberseguridad, automatizaciones con n8n, desarrollo web y auditorías técnicas. Para empresas de todo el mundo.",
    images: ["/hersec-logo-tagline.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Hersec",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/hersec-icon.jpg` },
      description: "Empresa de servicios tecnológicos especializada en ciberseguridad, automatizaciones con n8n, desarrollo web & SaaS y auditorías técnicas.",
      contactPoint: { "@type": "ContactPoint", contactType: "customer service", availableLanguage: ["Spanish", "English"] },
      areaServed: { "@type": "AdministrativeArea", name: "Global" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios Hersec",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ciberseguridad", description: "Pentesting, hardening de servidores y análisis de vulnerabilidades." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatizaciones con n8n", description: "Integración de sistemas y flujos de trabajo automáticos." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo Web y SaaS", description: "Desarrollo de plataformas web y aplicaciones SaaS con Next.js y React." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auditorías Técnicas", description: "Revisión completa de infraestructura, código y configuraciones de seguridad." } },
        ],
      },
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Hersec", publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: "es" },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Hersec | Ciberseguridad, Automatizaciones y Desarrollo Web",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description: "Hersec ofrece ciberseguridad, automatizaciones con n8n, desarrollo web & SaaS y auditorías técnicas.",
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
