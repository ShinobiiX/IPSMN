"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

const categories = [
  { id: "all", name: "All Events" },
  { id: "conference", name: "Conferences" },
  { id: "workshop", name: "Workshops" },
  { id: "training", name: "Training" },
  { id: "seminar", name: "Seminars" },
]

const events = [
  {
    id: 1,
    title: "Annual Safety Conference 2026",
    category: "conference",
    date: "July 15-17, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Eko Hotel & Suites, Lagos",
    description: "Join over 500 safety professionals for three days of insights on emerging safety trends, regulatory updates, and best practices from industry leaders.",
    speakers: "15+ Industry Experts",
    capacity: "500 Attendees",
    featured: true
  },
  {
    id: 2,
    title: "HSE Leadership Workshop",
    category: "workshop",
    date: "August 5-6, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Sheraton Hotel, Abuja",
    description: "Intensive two-day workshop on developing safety leadership capabilities for organizational transformation and culture change.",
    speakers: "Dr. Adebayo Okonkwo",
    capacity: "50 Participants",
    featured: false
  },
  {
    id: 3,
    title: "Fire Safety Certification Training",
    category: "training",
    date: "August 20-22, 2026",
    time: "8:00 AM - 5:00 PM",
    location: "IPSM Training Center, Port Harcourt",
    description: "Comprehensive fire safety training with practical exercises, live demonstrations, and certification examination.",
    speakers: "IPSM Fire Safety Team",
    capacity: "30 Participants",
    featured: false
  },
  {
    id: 4,
    title: "Oil & Gas Safety Seminar",
    category: "seminar",
    date: "September 10, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "Le Meridien Hotel, Port Harcourt",
    description: "Half-day seminar addressing current challenges and solutions in oil and gas safety operations across the Niger Delta region.",
    speakers: "Industry Panel",
    capacity: "150 Attendees",
    featured: false
  },
  {
    id: 5,
    title: "Construction Safety Workshop",
    category: "workshop",
    date: "September 25-26, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Transcorp Hilton, Abuja",
    description: "Hands-on workshop covering scaffold safety, fall protection, and heavy equipment operation safety for construction professionals.",
    speakers: "Engr. Chioma Nwosu",
    capacity: "40 Participants",
    featured: false
  },
  {
    id: 6,
    title: "Risk Assessment Masterclass",
    category: "training",
    date: "October 8-10, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "IPSM Training Center, Lagos",
    description: "Advanced three-day training on risk assessment methodologies, HAZOP studies, and job safety analysis techniques.",
    speakers: "Prof. Emeka Okafor",
    capacity: "25 Participants",
    featured: true
  },
]

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredEvents = activeCategory === "all" 
    ? events 
    : events.filter(e => e.category === activeCategory)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
                Stay Updated
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Events & Training
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Discover our upcoming conferences, workshops, seminars, and training 
                sessions designed to advance your safety career.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-secondary border-b border-border sticky top-[73px] z-40">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-foreground hover:bg-primary/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {filteredEvents.map((event) => (
                <Card 
                  key={event.id}
                  className={`group transition-all hover:shadow-xl ${
                    event.featured 
                      ? 'border-2 border-accent shadow-lg' 
                      : 'border-0 bg-secondary shadow-md'
                  }`}
                >
                  {event.featured && (
                    <div className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-2 text-center">
                      Featured Event
                    </div>
                  )}
                  <CardContent className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary capitalize">
                        {event.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-3 mb-6 pb-6 border-b border-border">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-accent" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{event.speakers}</span>
                      </p>
                      <Button 
                        asChild
                        className={event.featured 
                          ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                          : 'bg-primary text-primary-foreground hover:bg-primary/90'
                        }
                      >
                        <Link href="/contact">
                          Register
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Never Miss an Event
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive updates about upcoming events, 
              early bird discounts, and exclusive member-only sessions.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Subscribe to Updates
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
