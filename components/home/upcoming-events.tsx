"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Annual Safety Conference 2026",
    date: "July 15-17, 2026",
    location: "Lagos, Nigeria",
    description: "Join industry leaders for three days of insights on emerging safety trends and best practices.",
    type: "Conference"
  },
  {
    id: 2,
    title: "HSE Leadership Workshop",
    date: "August 5, 2026",
    location: "Abuja, Nigeria",
    description: "Intensive workshop on developing safety leadership capabilities for organizational transformation.",
    type: "Workshop"
  },
  {
    id: 3,
    title: "Fire Safety Certification Training",
    date: "August 20-22, 2026",
    location: "Port Harcourt, Nigeria",
    description: "Comprehensive fire safety training with practical exercises and certification examination.",
    type: "Training"
  },
]

export function UpcomingEvents() {
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
              Upcoming Events
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Stay updated with our latest training sessions, workshops, and conferences
            </p>
          </div>
          <Button 
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground self-start sm:self-auto transition-all duration-300 hover:scale-105"
          >
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card 
              key={event.id}
              className={`group bg-background border-0 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {event.type}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <Calendar className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <MapPin className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
