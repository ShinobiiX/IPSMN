"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, UserCheck, Award, ArrowRight, Check } from "lucide-react"

const membershipCategories = [
  {
    id: "graduate",
    title: "Graduate Member",
    icon: GraduationCap,
    description: "For recent graduates of IPSM programmes beginning their safety career.",
    benefits: [
      "Certificate of Membership",
      "Access to member resources",
      "Networking opportunities"
    ],
    featured: false
  },
  {
    id: "associate",
    title: "Associate Member",
    icon: Users,
    description: "For safety practitioners with relevant experience and qualifications.",
    benefits: [
      "Professional recognition",
      "Training discounts",
      "Industry updates"
    ],
    featured: false
  },
  {
    id: "full",
    title: "Full Member",
    icon: UserCheck,
    description: "For experienced safety professionals meeting full membership criteria.",
    benefits: [
      "Use of designatory letters",
      "Voting rights",
      "Leadership opportunities"
    ],
    featured: true
  },
  {
    id: "fellow",
    title: "Fellow",
    icon: Award,
    description: "The highest membership grade for distinguished safety leaders.",
    benefits: [
      "Prestigious recognition",
      "Advisory board eligibility",
      "Mentorship programs"
    ],
    featured: false
  },
]

export function MembershipPreview() {
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
            Membership Categories
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Join Nigeria&apos;s premier community of safety professionals
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {membershipCategories.map((category, index) => (
            <Card 
              key={category.id}
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                category.featured 
                  ? 'border-2 border-accent bg-accent/5 shadow-lg' 
                  : 'border-0 bg-secondary shadow-md'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {category.featured && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg animate-pulse">
                  Popular
                </div>
              )}
              <CardContent className="p-6">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl mb-4 transition-all duration-500 group-hover:scale-110 ${
                  category.featured ? 'bg-accent group-hover:rotate-6' : 'bg-primary/10 group-hover:-rotate-6'
                }`}>
                  <category.icon className={`h-7 w-7 transition-transform duration-300 ${
                    category.featured ? 'text-accent-foreground' : 'text-primary'
                  }`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.benefits.map((benefit, i) => (
                    <li 
                      key={benefit} 
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      style={{ 
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                        transition: 'all 0.3s ease',
                        transitionDelay: `${(index + 1) * 100 + (i + 1) * 50}ms`
                      }}
                    >
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  variant={category.featured ? "default" : "outline"}
                  className={`w-full transition-all duration-300 hover:scale-105 ${
                    category.featured 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  <Link href={`/apply?type=membership&id=${category.id}`}>
                    Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '600ms' }}>
          <Button 
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <Link href="/membership">
              Learn More About Membership
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
