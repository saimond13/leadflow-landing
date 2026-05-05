"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Mail Shield",
    description: "Analizamos cada correo entrante en busca de indicadores de phishing, dominios falsos y adjuntos maliciosos. Alertas en tiempo real antes de que el daño ocurra.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
  },
  {
    id: "02",
    title: "Exposure Scan",
    description: "Escaneamos fuentes públicas, registros digitales y bases de datos comprometidas para mapear exactamente qué información tuya está expuesta y cómo podría usarse.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
  },
  {
    id: "03",
    title: "Fraud Response",
    description: "Cuando ocurre un fraude digital, cada hora cuenta. Te acompañamos en la recolección de evidencia, análisis del incidente y coordinación de respuesta para minimizar el impacto.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200",
  },
  {
    id: "04",
    title: "Automation Guard",
    description: "Diseñamos automatizaciones con controles de seguridad integrados. Flujos que validan identidades, detectan anomalías y protegen tus procesos críticos en tiempo real.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1200",
  },
];

const AUTO_PLAY_DURATION = 5000;
const BORDER = "rgba(232,184,75,0.12)";
const GOLD = "#e8b84b";
const TEXT_PRIMARY = "#f0f0f6";
const TEXT_MUTED = "#8898a8";
const TEXT_DIM = "rgba(136,152,168,0.5)";

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (dir: number) => ({ y: dir > 0 ? "-100%" : "100%", opacity: 0 }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4">
            <div className="space-y-1 mb-12">
              <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl" style={{ color: TEXT_PRIMARY, fontFamily: "var(--font-serif)" }}>En qué consiste cada servicio</h2>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] block ml-0.5" style={{ color: TEXT_MUTED }}>(HERSEC SECURITY)</span>
            </div>
            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button key={service.id} onClick={() => handleTabClick(index)} className={cn("group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t first:border-0")} style={{ borderColor: BORDER }}>
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px]" style={{ background: "rgba(232,184,75,0.15)" }}>
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full origin-top"
                          style={{ background: GOLD }}
                          initial={{ height: "0%" }}
                          animate={isPaused ? { height: "0%" } : { height: "100%" }}
                          transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                        />
                      )}
                    </div>
                    <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums" style={{ color: isActive ? GOLD : TEXT_DIM }}>/{service.id}</span>
                    <div className="flex flex-col gap-2 flex-1">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight transition-colors duration-500" style={{ color: isActive ? GOLD : TEXT_DIM, fontFamily: "var(--font-serif)" }}>{service.title}</span>
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }} className="overflow-hidden">
                            <p className="text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2" style={{ color: TEXT_MUTED }}>{service.description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
            <div className="relative group/gallery" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <div className="relative overflow-hidden rounded-3xl md:rounded-[2.5rem]" style={{ aspectRatio: "16/11", background: "rgba(12,25,41,0.6)", border: `1px solid ${BORDER}` }}>
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div key={activeIndex} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ y: { type: "spring", stiffness: 260, damping: 32 }, opacity: { duration: 0.4 } }} className="absolute inset-0 w-full h-full cursor-pointer" onClick={handleNext}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={SERVICES[activeIndex].image} alt={SERVICES[activeIndex].title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 block" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,18,32,0.85) 0%, rgba(8,18,32,0.2) 50%, transparent 100%)" }} />
                    <div className="absolute bottom-16 left-8">
                      <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD, fontFamily: "monospace" }}>HERSEC /{SERVICES[activeIndex].id} — {SERVICES[activeIndex].title}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all active:scale-90" style={{ background: "rgba(8,18,32,0.9)", border: `1px solid ${BORDER}`, color: GOLD, backdropFilter: "blur(8px)" }} aria-label="Anterior"><ChevronLeft size={20} /></button>
                  <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all active:scale-90" style={{ background: "rgba(8,18,32,0.9)", border: `1px solid ${BORDER}`, color: GOLD, backdropFilter: "blur(8px)" }} aria-label="Siguiente"><ChevronRight size={20} /></button>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {SERVICES.map((_, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); handleTabClick(i); }} className="rounded-full transition-all duration-300" style={{ width: activeIndex === i ? "24px" : "6px", height: "6px", background: activeIndex === i ? GOLD : "rgba(232,184,75,0.3)" }} aria-label={`Ir a ${SERVICES[i].title}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
