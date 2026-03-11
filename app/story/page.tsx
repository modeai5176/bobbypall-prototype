"use client"

import { useState, useEffect, useRef } from "react"
import NavigationBar from "@/components/navigation-bar"

// ─── Animated Timeline ────────────────────────────────────────────────────────
const timelineEvents = [
  {
    year: "2001",
    title: "The First Frame",
    description:
      "At age seven, Bobby picked up his grandfather's Pentax K1000 in Nairobi's Eastleigh neighbourhood. He didn't understand f-stops or shutter speed. He understood the weight of it — and the way his grandfather disappeared into stories through its lens.",
  },
  {
    year: "2007",
    title: "A Formal Education Begins",
    description:
      "Bobby enrolled at Nairobi's School of Visual Arts, discovering documentary and photojournalism. His early portfolio captured life in Kibera and Mathare — not as poverty tourism, but as dignity made visible. His professors called his eye 'uncomfortably honest.'",
  },
  {
    year: "2012",
    title: "First Published Work",
    description:
      "The East African newspaper featured Bobby's portrait series 'Sons of the Soil' — eight images of elderly Kenyan farmers taken during a cross-country road trip. The series was reprinted across three East African publications and marked his first wide recognition.",
  },
  {
    year: "2015",
    title: "Bobby Pall Photography Studio",
    description:
      "After four years of freelance work, Bobby founded his studio in Westlands, Nairobi. The studio quickly became known for a distinctive visual language: technically precise, emotionally alive, and unmistakably East African in its sensibility.",
  },
  {
    year: "2017",
    title: "Museum Exhibition",
    description:
      "Bobby's documentary series 'Faces of Nairobi' was exhibited at the Nairobi National Museum — 32 large-format portraits spanning age, ethnicity, and class. The exhibition drew over 4,000 visitors across six weeks and was described as 'a mirror held up to the city.'",
  },
  {
    year: "2019",
    title: "Cross-Cultural Project",
    description:
      "Bobby embarked on a year-long documentary project spanning Kenya, Uganda, Tanzania, Rwanda, and Ethiopia — capturing the shared cultural threads beneath five nations' distinct identities. The resulting body of work became the foundation for a touring exhibition.",
  },
  {
    year: "2021",
    title: "The Mentorship Program",
    description:
      "Believing that Africa's stories deserve African storytellers, Bobby launched a formal mentorship program for young East African photographers. The program emphasises not just technical skill, but the ethics, politics, and responsibility of representing communities through images.",
  },
  {
    year: "2024",
    title: "A Living Legacy",
    description:
      "Today, Bobby's studio has completed over 140 photosessions and 105 studio shoots, serving more than 230 clients across East Africa and internationally. His work continues to redefine what it means to photograph Africa — from within, with love, and with truth.",
  },
]

function TimelineItem({
  event,
  index,
  isLeft,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isLeft: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex items-start gap-0 md:gap-12 mb-16 md:mb-24 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* ── DESKTOP: left content ── */}
      <div className={`hidden md:block flex-1 ${isLeft ? "text-right" : ""}`}>
        {isLeft ? (
          <div className="pr-8">
            <span className="text-white/30 text-xs tracking-[0.3em] uppercase font-light block mb-3">{event.year}</span>
            <h3 className="text-title font-serif text-white mb-3 leading-snug">{event.title}</h3>
            <p className="text-body text-white/65 leading-relaxed">{event.description}</p>
          </div>
        ) : (
          <div /> /* right items occupy this space */
        )}
      </div>

      {/* ── CENTRE SPINE ── */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <div
          className={`w-3 h-3 rounded-full border border-white/40 transition-all duration-500 ${
            visible ? "bg-white scale-100" : "bg-transparent scale-75"
          }`}
          style={{ transitionDelay: `${index * 80 + 300}ms` }}
        />
        {/* Spine below */}
        {index < timelineEvents.length - 1 && (
          <div className="w-px bg-white/15 flex-1 mt-3" style={{ minHeight: "80px" }} />
        )}
      </div>

      {/* ── DESKTOP: right content ── */}
      <div className={`hidden md:block flex-1`}>
        {!isLeft ? (
          <div className="pl-8">
            <span className="text-white/30 text-xs tracking-[0.3em] uppercase font-light block mb-3">{event.year}</span>
            <h3 className="text-title font-serif text-white mb-3 leading-snug">{event.title}</h3>
            <p className="text-body text-white/65 leading-relaxed">{event.description}</p>
          </div>
        ) : (
          <div />
        )}
      </div>

      {/* ── MOBILE: all content to the right of spine ── */}
      <div className="md:hidden flex-1 pl-6">
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase font-light block mb-2">{event.year}</span>
        <h3 className="text-base font-serif text-white mb-2 leading-snug">{event.title}</h3>
        <p className="text-sm text-white/65 leading-relaxed">{event.description}</p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function StoryPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="bg-black">
      <NavigationBar />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
            <p className="text-white/35 text-xs tracking-[0.35em] uppercase font-light mb-8">The Story</p>
            <h1 className="text-display font-serif text-white mb-8 leading-tight">
              The lens chooses the photographer, not the other way around
            </h1>
            <p className="text-body-large text-white/75 leading-relaxed max-w-2xl">
              This is not just my story. It is the story of every frame I have captured, every soul I have encountered,
              and every truth I have dared to reveal through light and shadow.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE BEGINNING ──────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-headline font-serif text-white">Where it all began</h2>
              <p className="text-body text-white/70 leading-relaxed">
                I was seven when I first held my grandfather's camera. Not to take a picture — but to understand why this small black box made him disappear for hours at a time. He would return with stories that seemed too vivid, too real to have been stored in mechanics and silver halide.
              </p>
              <p className="text-body text-white/70 leading-relaxed">
                "Bobby," he said one evening, handing me the Pentax, "a camera doesn't take pictures. It steals souls and gives them back as stories." I thought he was being dramatic — the way old people often are when they want to sound wise.
              </p>
              <p className="text-body text-white/70 leading-relaxed">
                Twenty-three years later, I finally understood. Every photograph is a theft. Every frame, a confession. Every click, a promise to honour what was trusted to you in that split second of vulnerability.
              </p>
            </div>

            <div className="relative">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/Family/6.png"
                  alt="Young Bobby with his grandfather's camera"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay" />
              </div>
              <div className="absolute -bottom-8 -right-8 card-metallic p-6 rounded-2xl max-w-xs">
                <p className="text-caption text-white/50 mb-1">First camera</p>
                <p className="text-body font-medium text-white">Grandfather's Pentax K1000, Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY QUOTE ──────────────────────────── */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-headline font-serif text-white leading-relaxed mb-8">
            "I don't document reality. I reveal the truth that hides behind what we think we see."
          </blockquote>
          <p className="text-body text-white/65 leading-relaxed">
            Photography has never been about technical perfection for me — though both precision and beauty have their place. It is about the moment when pretence falls away. When the subject forgets the camera exists. When the real story emerges from behind the carefully constructed facade we all wear in public.
          </p>
        </div>
      </section>

      {/* ── THE AWAKENING ─────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/GLAM/4.png"
                  alt="Bobby's breakthrough moment in Kibera"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay" />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-headline font-serif text-white">The awakening</h2>
              <p className="text-body text-white/70 leading-relaxed">
                My first real photograph was not planned. I was twenty-two, walking through Kibera with my camera, trying to capture "poverty" for a university assignment. How naive. How arrogant.
              </p>
              <p className="text-body text-white/70 leading-relaxed">
                Then I saw her — an elderly woman sitting outside her home, braiding her granddaughter's hair in the late afternoon light. Everything my professors had taught me said this wasn't "the shot." The light was harsh. The composition was wrong. The background was cluttered.
              </p>
              <p className="text-body text-white/70 leading-relaxed">
                But something in that moment — the tenderness, the quiet dignity, the unspoken love passing between generations — demanded to be witnessed. I raised my camera. And for the first time, I wasn't taking a picture. I was receiving a gift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IDEOLOGY ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-6">My ideology</h2>
            <p className="text-body text-white/65 max-w-2xl mx-auto leading-relaxed">
              Three beliefs that have guided every photograph I have ever taken — and every decision I have made as a working photographer in East Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Truth over beauty",
                body: "A raw, honest moment will always triumph over a perfectly composed lie. Authentic beauty does not require arrangement — it only requires presence.",
              },
              {
                title: "Stories, not subjects",
                body: "Every person I photograph is a storyteller. My job is not to impose my narrative, but to create the space and the trust for theirs to emerge naturally.",
              },
              {
                title: "Legacy through lens",
                body: "Photography is time travel. Every frame I capture today becomes tomorrow's history and the next generation's inheritance. That is a responsibility I carry into every session.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 border border-white/15 rounded-full flex items-center justify-center mx-auto mb-8">
                  <div className="w-2 h-2 bg-white/60 rounded-full" />
                </div>
                <h3 className="text-title font-serif text-white mb-4">{item.title}</h3>
                <p className="text-body text-white/65 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE MISSION ───────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-headline font-serif text-white">Why I do what I do</h2>
              <p className="text-body text-white/70 leading-relaxed">
                Africa has been photographed by outsiders for too long. Our stories filtered through foreign lenses, our complexity reduced to spectacle, our narratives shaped by external assumptions of what Africa is "supposed" to look like.
              </p>
              <p className="text-body text-white/70 leading-relaxed">
                I photograph from within — not as a neutral observer, but as a participant in the stories being told. Every frame I capture is an act of reclamation. Every story I tell is a declaration that we are the authors of our own narrative.
              </p>
              <p className="text-body text-white/70 leading-relaxed">
                When someone looks at my photographs fifty years from now, I want them to see not just what we looked like, but who we were. Our dignity. Our complexity. Our humanity in all its beautiful, contradictory fullness.
              </p>
            </div>

            <div className="relative">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/Travel/6.png"
                  alt="Bobby at work in East Africa"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-white/35 text-xs tracking-[0.35em] uppercase font-light mb-6">Career History</p>
            <h2 className="text-headline font-serif text-white mb-6">A journey in time</h2>
            <p className="text-body text-white/65 max-w-2xl mx-auto leading-relaxed">
              Two decades of frames, stories, and quiet moments of transformation — told in sequence.
            </p>
          </div>

          <div className="relative">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.year} event={event} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ─────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-headline font-serif text-white">A personal manifesto</h2>
          </div>
          <div className="space-y-10 text-left">
            <p className="text-body-large text-white leading-relaxed font-medium">
              I believe that every person carries within them a story worth telling, a truth worth preserving, a moment worth capturing.
            </p>
            <p className="text-body text-white/65 leading-relaxed">
              I believe that photography is not about the photographer — it is about the trust placed in you by those who allow you to witness their truth. That trust is the most sacred thing in this work.
            </p>
            <p className="text-body text-white/65 leading-relaxed">
              I believe that technique serves story, not the other way around. The most technically perfect photograph means nothing if it carries no soul. Equipment is a tool. Vision is the craft.
            </p>
            <p className="text-body text-white/65 leading-relaxed">
              I believe that our responsibility as African photographers is not only to document our present, but to preserve our legacy for generations who will inherit what we choose to leave behind.
            </p>
            <p className="text-body-large text-white leading-relaxed font-medium">
              Most importantly — every click of the shutter is a promise. To honour. To remember. To tell the truth exactly as it was given to you.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ─────────────────────────────── */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-display font-serif text-white leading-tight mb-8">
            "This is my gift. This is my burden. This is my calling."
          </blockquote>
          <cite className="text-body text-white/55">— Bobby Pall</cite>
        </div>
      </section>
    </div>
  )
}
