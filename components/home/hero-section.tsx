"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const IPSM_DETAILS = {
  tagline: "Duly Registered & Approved Since 2012",
  fullName: "Institute of Proficient Safety Measures, Nigeria (IPSMN)",
  description: "A premier Training and Consulting Organization, duly registered as a Limited by Guarantee entity under the Companies and Allied Matters Act of 1999. Approved by the Federal Ministry of Education and Justice in 2012, we are dedicated to pioneering sustainable excellence in Occupational Safety and Health (OSH) through professional training and strategic consultancy."
};

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-graduation.jpg"
          alt="IPSM Safety Training Graduation"
          fill
          className="object-cover scale-105 animate-[scale-in_1.2s_ease-out_forwards]"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-bold text-accent animate-fade-in-down uppercase tracking-widest">
            {IPSM_DETAILS.tagline}
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance animate-fade-in-up delay-100">
            {IPSM_DETAILS.fullName}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90 max-w-2xl animate-fade-in-up delay-200">
            {IPSM_DETAILS.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up delay-300">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/apply">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white font-semibold text-base px-8 transition-all duration-300 hover:scale-105"
            >
              <Link href="/programmes">
                Explore Programmes
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
