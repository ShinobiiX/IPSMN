"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight, BookOpen } from "lucide-react"

const programmes = [
  {
    id: "hse",
    title: "Health, Safety and Environment (HSE)",
    description: "Master the core pillars of industrial safety, including risk assessment, hazard control, and environmental compliance protocols.",
    duration: "12 Months",
    level: "Professional",
    href: "/programmes#diploma"
  },
  {
    id: "safety-tech",
    title: "Safety Technology Management",
    description: "Explore the intersection of technology and safety, focusing on automated safety systems and advanced risk mitigation strategies.",
    duration: "12 Months",
    level: "Professional",
    href: "/programmes#higher-diploma"
  },
  {
    id: "env-refugee",
    title: "Environmental Management and Refugees Studies",
    description: "A specialized programme addressing the management of displaced persons and the environmental impacts of migration.",
    duration: "12 Months",
    level: "Professional",
    href: "/programmes#pgd"
  },
  {
    id: "logistics",
    title: "Logistics and Transport Management",
    description: "Optimize supply chain operations with a focus on transportation safety, fleet management, and logistics efficiency.",
    duration: "12 Months",
    level: "Professional",
    href: "/programmes#logistics"
  },
  {
    id: "peace-conflict",
    title: "Environmental Peace and Conflict Resolution",
    description: "Learn to navigate and resolve resource-based conflicts while promoting sustainable peace through environmental safety.",
    duration: "12 Months",
    level: "Professional",
    href: "/programmes#pgd"
  },
]

export function FeaturedProgrammes() {
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
    <section ref={sectionRef} className="py-20 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Our Programmes
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              In a strategic partnership with the University of Ibadan Consultancy Services Unit, IPSMN offers industry-leading Professional Diploma, Higher Diploma, and PGD programmes.
            </p>
          </div>
          <Button 
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground self-start sm:self-auto transition-all duration-300 hover:scale-105"
          >
            <Link href="/programmes">
              View All Programmes
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme, index) => (
            <Card 
              key={programme.id}
              className={`group bg-background border-0 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    {programme.level}
                  </span>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
                    <BookOpen className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {programme.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {programme.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{programme.duration}</span>
                  </div>
                  <Link 
                    href={programme.href}
                    className="group/link inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
