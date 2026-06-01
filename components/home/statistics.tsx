"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Award, GraduationCap, Building } from "lucide-react"

const stats = [
  {
    label: "Certified Members",
    value: 5000,
    suffix: "+",
    icon: Users,
    description: "Professional safety practitioners"
  },
  {
    label: "Training Sessions",
    value: 500,
    suffix: "+",
    icon: GraduationCap,
    description: "Courses delivered annually"
  },
  {
    label: "Certifications Issued",
    value: 12000,
    suffix: "+",
    icon: Award,
    description: "Professional credentials awarded"
  },
  {
    label: "Corporate Partners",
    value: 200,
    suffix: "+",
    icon: Building,
    description: "Organizations we serve"
  },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

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

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <p ref={ref} className="font-heading text-4xl font-bold text-accent mb-2">
      {count.toLocaleString()}{suffix}
    </p>
  )
}

export function Statistics() {
  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground sm:text-4xl animate-fade-in-up">
            Our Impact
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Measurable results in building a safer Nigeria
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`group text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 transition-all duration-500 hover:bg-primary-foreground/10 hover:scale-105 hover:shadow-xl animate-fade-in-up`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse-glow">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="font-heading font-semibold text-primary-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-primary-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
