"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const galleryImages = [
  { id: 1, src: "/GLAM/4.png",      category: "Glam",      label: "Glam Photography" },
  { id: 2, src: "/Travel/1.png",    category: "Travel",    label: "Travel Brochure" },
  { id: 3, src: "/Family/1.png",    category: "Family",    label: "Family Photography" },
  { id: 4, src: "/CORPORATE/1.png", category: "Corporate", label: "Corporate Photography" },
  { id: 5, src: "/GLAM/2.png",      category: "Glam",      label: "Glam — Series II" },
]

export default function HeroCarousel() {
  const [active, setActive]         = useState(0)
  const [prevActive, setPrevActive] = useState<number | null>(null)
  const [isLoaded, setIsLoaded]     = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = (index: number) => {
    if (isTransitioning || index === active) return
    setPrevActive(active)
    setIsTransitioning(true)
    setActive(index)
    setTimeout(() => {
      setPrevActive(null)
      setIsTransitioning(false)
    }, 1200)
  }

  useEffect(() => {
    setIsLoaded(true)
    intervalRef.current = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % galleryImages.length
        setPrevActive(prev)
        setIsTransitioning(true)
        setTimeout(() => { setPrevActive(null); setIsTransitioning(false) }, 1200)
        return next
      })
    }, 6000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      {/* ── BACKGROUND IMAGES ─────────────────────────── */}
      {galleryImages.map((img, i) => (
        <div
          key={img.id}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 2 : (i === prevActive ? 1 : 0) }}
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* ── GRADIENT OVERLAYS ─────────────────────────── */}
      {/* Primary dark veil */}
      <div className="absolute inset-0 bg-black/55 z-10" />
      {/* Dome radial highlight — bright center, dark edges */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 38%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {/* Bottom fade for gallery strip */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      {/* ── DOME ARCH SVG ─────────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Outer dome arc */}
        <path
          d="M 60 920 C 60 420 300 80 720 80 C 1140 80 1380 420 1380 920"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1"
          fill="none"
        />
        {/* Inner dome arc */}
        <path
          d="M 160 920 C 160 460 360 160 720 160 C 1080 160 1280 460 1280 920"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.8"
          fill="none"
        />
        {/* Subtle keystone top */}
        <line x1="720" y1="78" x2="720" y2="180" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
        {/* Horizontal rule at dome spring */}
        <line x1="80"  y1="640" x2="1360" y2="640" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        {/* Left pillar */}
        <line x1="80"  y1="640" x2="80"  y2="920" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        {/* Right pillar */}
        <line x1="1360" y1="640" x2="1360" y2="920" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      </svg>

      {/* ── VERTICAL SIDE LABELS ──────────────────────── */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <p
          className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-light"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Light · Story · Truth
        </p>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <p
          className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-light"
          style={{ writingMode: "vertical-rl" }}
        >
          Nairobi · Kenya · East Africa
        </p>
      </div>

      {/* ── CENTRE CONTENT ────────────────────────────── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6">

        {/* Category pill */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          <span className="text-white/50 text-[11px] tracking-[0.35em] uppercase font-light">
            {galleryImages[active].category}
          </span>
          <div className="w-8 h-px bg-white/20" />
        </div>

        {/* Photographer name — dome centrepiece */}
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <h1 className="font-serif font-light text-white leading-none tracking-[0.08em] select-none"
              style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}>
            BOBBY
          </h1>
          <h1 className="font-serif font-light text-white leading-none tracking-[0.08em] select-none"
              style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}>
            PALL
          </h1>
        </div>


        {/* Subtitle */}
        <p
          className={`text-white/50 text-[11px] sm:text-xs tracking-[0.35em] uppercase font-light mb-10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "900ms" }}
        >
          East African Photographer
        </p>

        {/* CTA */}
        <Link
          href="/gallery"
          className={`group inline-flex items-center gap-4 border border-white/20 px-8 py-3.5 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-400 text-sm tracking-[0.2em] uppercase font-light ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "1100ms" }}
        >
          Explore the Gallery
          <div className="w-5 h-px bg-white/40 group-hover:w-8 group-hover:bg-white/70 transition-all duration-300" />
        </Link>
      </div>

      {/* ── BOTTOM GALLERY STRIP ──────────────────────── */}
      <div className="absolute -bottom-5 left-0 right-0 z-20 px-4 sm:px-8 lg:px-16 pb-0">
        <div className="flex h-[90px] sm:h-[110px] gap-1.5">
          {galleryImages.map((img, i) => (
            <button
              key={img.id}
              onClick={() => go(i)}
              className={`flex-1 relative overflow-hidden group transition-all duration-500 focus:outline-none ${
                i === active ? "flex-[1.8]" : "flex-1"
              }`}
              aria-label={`Show ${img.label}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  i === active ? "opacity-90 scale-100" : "opacity-35 scale-105 group-hover:opacity-60 group-hover:scale-100"
                }`}
              />
              {/* Active indicator */}
              {i === active && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
              {/* Label on active */}
              <div className={`absolute bottom-2 left-2 right-2 transition-all duration-300 ${i === active ? "opacity-100" : "opacity-0"}`}>
                <p className="text-white text-[9px] tracking-[0.2em] uppercase truncate font-light">
                  {img.label}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── SLIDE COUNTER ─────────────────────────────── */}
      <div className="absolute top-1/2 right-4 sm:right-8 -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-3">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`transition-all duration-400 rounded-full focus:outline-none ${
                i === active
                  ? "w-1.5 h-6 bg-white"
                  : "w-1 h-1 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
