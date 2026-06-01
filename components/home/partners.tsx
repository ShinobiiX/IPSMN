"use client"

import { useEffect, useRef, useState } from "react"
import { Shield } from "lucide-react"

const partners = [
  "University of Ibadan Consultancy Services Unit",
  "Nigerian Safety Council",
  "Ministry of Labour",
  "Oil & Gas Association",
  "Manufacturing Standards",
  "Construction Safety Board",
  "Environmental Agency",
]

export function Partners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-background border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by leading organizations
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={partner}
              className={`flex items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-all duration-500 hover:scale-110 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <Shield className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              <span className="font-heading font-semibold text-sm">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
