"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Eye, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function VisionMission() {
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
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Our Purpose
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Driving safety excellence through professional standards, strategic partnerships, and human capital development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <Card className={`group relative overflow-hidden border-0 bg-secondary shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '200ms' }}>
            <div className="absolute top-0 left-0 h-1 w-full bg-accent transition-all duration-300 group-hover:h-2" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We envision developing human capital for sustainable Occupational Safety and Health (OSH). 
                Our vision is to serve as the primary catalyst for safety transformation across industries, 
                striving to become a global reference point in safety education. We aspire to build a nation 
                where proficiency in safety is not just a requirement, but a sustainable culture embedded 
                in every professional endeavor to protect lives and preserve the environment.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className={`group relative overflow-hidden border-0 bg-secondary shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '400ms' }}>
            <div className="absolute top-0 left-0 h-1 w-full bg-primary transition-all duration-300 group-hover:h-2" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our mission is to design and deliver high-impact development programs and a wide range of 
                consultancy services that produce outstanding human performance in Occupational Safety and 
                Health (OSH). We are committed to fostering excellence and undertaking all initiatives 
                considered incidental or conducive to the attainment of professional safety standards 
                and workplace safety across Nigeria.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Objectives Section */}
        <div className={`mt-32 pt-20 border-t border-border/50 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-heading text-3xl font-bold text-center mb-12 text-foreground">Objectives of the Institute</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group border-0 bg-secondary/40 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-3">Human Capital Development</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To provide world-class training aimed at developing human capital in safety measures 
                    through specialized workshops, seminars, and professional conferences.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-secondary/40 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-3">Strategic Collaboration</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Partnering and networking with government, institutions, and NGOs for research, consultancy, and advisory in OSH.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-secondary/40 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-3">Professional Certification</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To offer accredited Professional Diplomas and Certificates in OSH in collaboration 
                    with approved higher institutions of learning, such as the University of Ibadan 
                    Consultancy Services Unit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
