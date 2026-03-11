"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import NavigationBar from "@/components/navigation-bar"
import { ArrowRight, Camera, Users, Globe, Building, Palette, Flower } from "lucide-react"

const photographyStyles = [
  {
    id: "glam",
    title: "Glam Photography",
    subtitle: "Capturing the unseen beauty",
    description:
      "Every glam session is a collaboration between light, expression, and the quiet confidence that lives within each subject. Bobby's approach moves past surface glamour to reveal the magnetic presence that makes a person truly unforgettable — transforming a single sitting into visual poetry that transcends ordinary portraiture.",
    quote: "Beauty is not applied. It is drawn out — from within, through trust.",
    icon: Camera,
    heroImage: "/GLAM/4.png",
    galleryImages: [
      "/GLAM/1.png",
      "/GLAM/2.png",
      "/GLAM/3.png",
      "/GLAM/5.png",
    ],
    services: ["Model Portraits", "Fashion Shoots", "Beauty Photography", "Editorial Work"],
    approach: "Collaborative sessions that dismantle self-consciousness and reveal authentic radiance",
  },
  {
    id: "family",
    title: "Family Photography",
    subtitle: "Preserving precious moments",
    description:
      "Families are living stories — each chapter written in shared glances, inside jokes, and quiet touches. Bobby photographs the invisible threads that bind generations: the warmth of a grandmother's hand, the chaos of a Sunday kitchen, the unspoken love that defines what it means to belong. These are the images people will reach for in fifty years.",
    quote: "A family portrait isn't about how you look. It's about who you are to each other.",
    icon: Users,
    heroImage: "/Family/3.png",
    galleryImages: [
      "/Family/1.png",
      "/Family/2.png",
      "/Family/4.png",
      "/Family/5.png",
    ],
    services: ["Family Portraits", "Generational Photos", "Milestone Celebrations", "Candid Moments"],
    approach: "Relaxed, unhurried sessions that let authentic family dynamics emerge naturally",
  },
  {
    id: "travel",
    title: "Travel Brochure",
    subtitle: "Stories from around the world",
    description:
      "From sun-scorched savannahs to rain-drenched highland valleys, Bobby documents East Africa and beyond with the eyes of an insider and the precision of a storyteller. His travel work doesn't merely show destinations — it makes you feel the dust on your skin, hear the silence of open plains at dawn, and understand the spirit of a place that no postcard ever could.",
    quote: "The best travel photography doesn't take you somewhere. It brings that place home to you.",
    icon: Globe,
    heroImage: "/Travel/2.png",
    galleryImages: [
      "/Travel/1.png",
      "/Travel/3.png",
      "/Travel/4.png",
      "/Travel/5.png",
    ],
    services: ["Destination Photography", "Cultural Documentation", "Tourism Campaigns", "Travel Stories"],
    approach: "Deep cultural immersion and community respect in every location visited",
  },
  {
    id: "corporate",
    title: "Corporate Photography",
    subtitle: "Professional excellence captured",
    description:
      "In business, image communicates before a single word is spoken. Bobby brings the same depth and intentionality to boardrooms and brand campaigns that he brings to his personal documentary work — producing imagery that conveys competence, trustworthiness, and the irreplaceable human dimension that great brands are built on.",
    quote: "The most powerful corporate image is one that makes people feel — not just think.",
    icon: Building,
    heroImage: "/CORPORATE/1.png",
    galleryImages: [
      "/CORPORATE/1.png",
      "/CORPORATE/2.png",
      "/CORPORATE/1.png",
      "/CORPORATE/2.png",
    ],
    services: ["Executive Portraits", "Team Photography", "Event Coverage", "Brand Imagery"],
    approach: "Purposeful, polished imagery that elevates corporate identity with authentic humanity",
  },
  {
    id: "fashion",
    title: "Fashion Brochure",
    subtitle: "Where style meets art",
    description:
      "Fashion photography at its finest is a conversation — between garment and body, concept and environment, culture and aspiration. Bobby's editorial approach brings cultural context and artistic vision to every shoot, producing work that speaks simultaneously to global sensibilities and the rich local identity of East African creative culture.",
    quote: "Style without story is just fabric. Fashion photography must say something true.",
    icon: Palette,
    heroImage: "/GLAM/3.png",
    galleryImages: [
      "/GLAM/1.png",
      "/GLAM/5.png",
      "/GLAM/2.png",
      "/GLAM/4.png",
    ],
    services: ["Editorial Fashion", "Brand Campaigns", "Designer Portfolios", "Creative Direction"],
    approach: "Narrative-driven visual storytelling that fuses fashion craft with cultural identity",
  },
  {
    id: "flowers",
    title: "Flowers",
    subtitle: "Nature's delicate beauty",
    description:
      "In the ephemeral beauty of flowers, Bobby finds profound metaphors for the human condition — fleeting, perfect, and impossibly alive. His botanical work is meditation made visible: patient in observation, precise in execution, and deeply contemplative in its final expression. Each image is a reminder that perfection exists only in impermanence.",
    quote: "A flower teaches you everything about life. It blooms fully, then lets go without regret.",
    icon: Flower,
    heroImage: "/Family/4.png",
    galleryImages: [
      "/Family/4.png",
      "/Family/5.png",
      "/Travel/4.png",
      "/Travel/5.png",
    ],
    services: ["Botanical Photography", "Nature Studies", "Artistic Compositions", "Fine Art Prints"],
    approach: "Slow, contemplative practice that reveals hidden geometry and transient beauty",
  },
]

export default function StylesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeStyle, setActiveStyle] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="bg-black bg-black">
      <NavigationBar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
            <h1 className="text-display font-serif text-white mb-8">Our Styles</h1>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              Six distinct approaches to visual storytelling, each rooted in purpose, driven by passion, and committed
              to capturing the unseen beauty in every subject.
            </p>
          </div>
        </div>
      </section>

      {/* Styles Showcase */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {photographyStyles.map((style, index) => (
            <div key={style.id} className={`mb-32 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* Content */}
                <div className="space-y-10">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-caption text-white/60 font-medium tracking-wider">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="h-px bg-white/30 flex-1 max-w-16"></div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <style.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-headline font-serif text-white">{style.title}</h2>
                    </div>
                    
                    <p className="text-body-large text-white font-medium mb-6">{style.subtitle}</p>

                    <p className="text-body text-white/70 leading-relaxed mb-8">{style.description}</p>

                    <blockquote className="border-l-2 border-white/20 pl-8 mb-10">
                      <p className="text-body text-white italic leading-relaxed">
                        "{style.quote}"
                      </p>
                    </blockquote>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-title font-serif text-white mb-6">What I offer</h3>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {style.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-sm text-white/70 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                    <p className="text-caption text-white/50 italic">{style.approach}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/gallery"
                    className="btn-secondary inline-flex items-center gap-3 group"
                  >
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Visual */}
                <div className="relative">
                  {/* Hero Image */}
                  <div className="image-container rounded-2xl overflow-hidden mb-8">
                    <img
                      src={style.heroImage}
                      alt={`${style.title} photography by Bobby Pall`}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="image-overlay"></div>
                  </div>

                  {/* Gallery Grid */}
                  <div className="grid grid-cols-4 gap-4">
                    {style.galleryImages.map((image, imageIndex) => (
                      <div key={imageIndex} className="image-container rounded-xl overflow-hidden">
                        <img
                          src={image}
                          alt={`${style.title} example ${imageIndex + 1}`}
                          className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline font-serif text-white mb-8">Ready to tell your story?</h2>
          <p className="text-body-large text-white/80 mb-10 leading-relaxed">
            Every project begins with a conversation. Let's discuss how we can bring your vision to life through
            authentic, powerful photography.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/gallery"
              className="btn-primary"
            >
              View Complete Portfolio
            </Link>
            <a
              href="mailto:hello@bobbypall.com"
              className="btn-secondary"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
