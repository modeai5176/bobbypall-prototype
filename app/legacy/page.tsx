"use client"

import { useState, useEffect } from "react"
import NavigationBar from "@/components/navigation-bar"
import { Award, Users, BookOpen, Target, Heart, Star } from "lucide-react"

const mentorshipPrograms = [
  {
    id: "beginner",
    title: "Foundations of Photography",
    subtitle: "Building blocks for beginners",
    description:
      "A comprehensive introduction to photography fundamentals for those taking their first steps behind the lens. You will learn composition principles, light reading, technical camera settings, and the ethical practice of photographing people and communities with dignity.",
    approach: "Group-based learning, weekly field assignments, peer critique sessions",
    duration: "12 weeks",
    maxStudents: 15,
    icon: BookOpen,
  },
  {
    id: "intermediate",
    title: "Voice & Visual Style",
    subtitle: "Developing your unique perspective",
    description:
      "For photographers who have mastered the basics and are ready to develop a distinctive voice. This programme explores advanced techniques, creative direction, cultural ethics in photography, and the business of building a sustainable practice in East Africa.",
    approach: "One-on-one mentorship, portfolio reviews, industry guest sessions",
    duration: "16 weeks",
    maxStudents: 10,
    icon: Target,
  },
  {
    id: "professional",
    title: "Professional Development",
    subtitle: "Building a sustainable career",
    description:
      "Transform your passion into a thriving, independent business. This intensive covers client relationship management, pricing strategy, marketing for creative professionals, contract structures, and the long-term brand-building necessary to stand out in a competitive market.",
    approach: "Business mentorship, real client project experience, networking access",
    duration: "20 weeks",
    maxStudents: 8,
    icon: Award,
  },
]

const successStories = [
  {
    id: 1,
    name: "Sarah Mwangi",
    role: "Glam & Portrait Specialist — Nairobi",
    story:
      "When I joined Bobby's programme I was technically capable but creatively lost. His mentorship gave me a framework for understanding what I was actually trying to say with my images. Two years later I run a fully-booked studio in Westlands. The discipline he taught me — patience, presence, trust — changed everything.",
    image: "/GLAM/1.png",
    year: "2022 Graduate",
  },
  {
    id: 2,
    name: "David Ochieng",
    role: "Family & Documentary Photographer — Kisumu",
    story:
      "Bobby doesn't just teach photography. He teaches you how to be in a room with someone — how to earn the kind of trust that lets you capture a family as they actually are, not as they perform for a camera. That is the most valuable thing I took from his programme.",
    image: "/Family/2.png",
    year: "2023 Graduate",
  },
  {
    id: 3,
    name: "Grace Wanjiku",
    role: "Travel & Cultural Photographer — Nairobi",
    story:
      "Bobby challenged every assumption I had about what 'African photography' should look like. He pushed me to photograph what I genuinely see, not what international markets expect. That shift in perspective led to my first international commission within six months of graduating.",
    image: "/Travel/3.png",
    year: "2021 Graduate",
  },
]

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "Every story deserves to be told with honesty and deep respect for the subjects who trusted you with their truth.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We pursue mastery not for the sake of perfection, but because excellence is what allows us to serve a story better.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Photography is a collaborative art. It thrives on shared knowledge, mutual accountability, and genuine support between practitioners.",
  },
  {
    icon: Target,
    title: "Purpose",
    description:
      "Every image must serve something beyond aesthetics — to inform, to challenge, to preserve, or to move the person who encounters it.",
  },
]

export default function LegacyPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <NavigationBar />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
            <p className="text-white/35 text-xs tracking-[0.35em] uppercase font-light mb-8">Legacy</p>
            <h1 className="text-display font-serif text-white mb-8 max-w-3xl leading-tight">
              Investing in the photographers who will tell tomorrow's stories
            </h1>
            <p className="text-body-large text-white/75 max-w-3xl leading-relaxed">
              A legacy is not built from a single body of work. It is built from the photographers you mentor, the curiosity you pass forward, and the standard of craft and ethics you instil in those who come after you. This is Bobby Pall's commitment to African photography.
            </p>
          </div>
        </div>
      </section>

      {/* ── MENTORSHIP PROGRAMS ────────────────────────── */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-6">Mentorship Programmes</h2>
            <p className="text-body-large text-white/75 max-w-3xl mx-auto leading-relaxed">
              Three structured learning pathways designed to meet photographers wherever they are — and take them where they need to go.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {mentorshipPrograms.map((program) => (
              <div
                key={program.id}
                className="card-metallic p-8 rounded-2xl group hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-title font-serif text-white mb-1 leading-snug">{program.title}</h3>
                    <p className="text-caption text-white/55">{program.subtitle}</p>
                  </div>
                </div>

                <p className="text-body text-white/75 leading-relaxed mb-8">{program.description}</p>

                <div className="space-y-3 mb-8 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white/35 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-caption text-white/55 leading-relaxed">{program.approach}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white/35 rounded-full flex-shrink-0" />
                    <span className="text-caption text-white/55">Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white/35 rounded-full flex-shrink-0" />
                    <span className="text-caption text-white/55">Cohort size: {program.maxStudents} photographers</span>
                  </div>
                </div>

                <button className="btn-secondary w-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                  Apply for This Programme
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ─────────────────────────────── */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-6">Voices from the Programme</h2>
            <p className="text-body-large text-white/75 max-w-3xl mx-auto leading-relaxed">
              The real measure of mentorship is not the number of graduates — it is the depth of the transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {successStories.map((story) => (
              <div key={story.id} className="group">
                <div className="image-container rounded-2xl overflow-hidden mb-8 group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="image-overlay" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-title font-serif text-white group-hover:text-white/90 transition-colors leading-snug">
                      {story.name}
                    </h3>
                    <span className="text-caption text-white/40 flex-shrink-0">{story.year}</span>
                  </div>
                  <p className="text-caption text-white/55 font-medium tracking-wide">{story.role}</p>
                  <p className="text-body text-white/70 leading-relaxed italic">"{story.story}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION FOR THE FUTURE ──────────────────────── */}
      <section className="section-spacing px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-headline font-serif text-white leading-tight">
                A vision for the future of African photography
              </h2>
              <p className="text-body-large text-white/75 leading-relaxed">
                Bobby's dream is a generation of East African photographers who are not only technically masterful, but deeply aware of the power and responsibility that comes with being the author of how their communities are seen and remembered.
              </p>
              <p className="text-body text-white/65 leading-relaxed">
                He envisions a creative ecosystem where photographers actively support each other, share knowledge without gatekeeping, and collectively raise the standard of African photography on the global stage — not to seek approval from external markets, but to define the terms of their own excellence.
              </p>
              <p className="text-body text-white/65 leading-relaxed">
                This is not about individual success. It is about building something that will still matter long after any one photographer has put their camera down for the last time.
              </p>
            </div>

            <div className="relative">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/CORPORATE/2.png"
                  alt="Future of African Photography — Bobby Pall Legacy"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay" />
              </div>
              <div className="absolute -bottom-6 -left-6 card-metallic p-6 rounded-2xl max-w-xs">
                <p className="text-caption text-white/45 mb-1">Programme launched</p>
                <p className="text-body font-serif text-white">2021 · Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES & PRINCIPLES ─────────────────────────── */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-6">Values & Principles</h2>
            <p className="text-body-large text-white/75 max-w-3xl mx-auto leading-relaxed">
              The foundation upon which all mentorship, education, and collaboration is built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 border border-white/12 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-white/25 group-hover:bg-white/5 transition-all duration-300">
                  <value.icon className="w-9 h-9 text-white/70 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-title font-serif text-white mb-4">{value.title}</h3>
                <p className="text-body text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ──────────────────────────────── */}
      <section className="section-spacing px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline font-serif text-white mb-8">Ready to begin your journey?</h2>
          <p className="text-body-large text-white/75 mb-12 leading-relaxed">
            Whether you are picking up a camera for the first time or looking to professionalise an existing practice, Bobby's mentorship programmes are designed to meet you exactly where you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-primary">Apply for Mentorship</button>
            <a href="mailto:hello@bobbypall.com" className="btn-secondary">
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
