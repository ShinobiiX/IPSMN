"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, BookOpen, Award, CheckCircle, ArrowRight } from "lucide-react"

const categories = [
  { id: "all", name: "All Programmes" },
  { id: "diploma", name: "Diploma" },
  { id: "higher-diploma", name: "Higher Diploma" },
  { id: "pgd", name: "Postgraduate Diploma" },
]

const programmes = [
  {
    id: "hse",
    category: "diploma",
    title: "Health, Safety and Environment (HSE)",
    description: "Comprehensive professional training covering HSE standards, risk management, and regulatory compliance protocols.",
    duration: "12 Months",
    mode: "Part-time / Weekend",
    requirements: [
      "Minimum of SSCE/WAEC or equivalent",
      "Interest in environmental safety",
      "Completed application form"
    ],
    outcomes: [
      "Mastery of HSE standards",
      "Risk assessment and hazard control",
      "Environmental impact assessment",
      "Emergency response planning"
    ]
  },
  {
    id: "safety-tech",
    category: "higher-diploma",
    title: "Safety Technology Management",
    description: "Focusing on the technological aspects of safety systems, industrial risk mitigation, and management strategies.",
    duration: "18 Months",
    mode: "Part-time / Weekend",
    requirements: [
      "Diploma in Safety or related Technical field",
      "Basic IT proficiency",
      "Completed application form"
    ],
    outcomes: [
      "Technological safety integration",
      "Industrial risk mitigation",
      "Advanced safety management",
      "System troubleshooting"
    ]
  },
  {
    id: "env-refugee",
    category: "pgd",
    title: "Environmental Management and Refugees Studies",
    description: "Advanced studies in environmental protection, management of displaced persons, and sustainable environmental practices.",
    duration: "24 Months",
    mode: "Executive / Weekend",
    requirements: [
      "Bachelor's degree or equivalent PGD",
      "Experience in Social Work or Environment",
      "Interest in Humanitarian safety"
    ],
    outcomes: [
      "Environmental protection strategies",
      "Refugee camp management safety",
      "Sustainable migration practices",
      "Resource allocation safety"
    ]
  },
  {
    id: "logistics",
    category: "higher-diploma",
    title: "Logistics and Transport Management",
    description: "Professional training in logistics operations, transportation safety, and supply chain management efficiency.",
    duration: "18 Months",
    mode: "Part-time / Weekend",
    requirements: [
      "SSCE or Diploma in related field",
      "Minimum 1 year industry experience",
      "Completed application form"
    ],
    outcomes: [
      "Supply chain safety optimization",
      "Fleet management protocols",
      "Transport risk assessment",
      "Logistics efficiency"
    ]
  },
  {
    id: "peace-conflict",
    category: "pgd",
    title: "Environmental Peace and Conflict Resolution",
    description: "Specialized programme focusing on resolving resource-based conflicts and promoting sustainable peace through environmental safety.",
    duration: "24 Months",
    mode: "Executive / Weekend",
    requirements: [
      "Bachelor's degree in Social Sciences or OSH",
      "Interest in conflict resolution",
      "Professional recommendation"
    ],
    outcomes: [
      "Conflict mediation skills",
      "Environmental diplomacy",
      "Sustainable peace frameworks",
      "Resource-based risk mitigation"
    ]
  },
]

export default function ProgrammesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProgrammes = activeCategory === "all" 
    ? programmes 
    : programmes.filter(p => p.category === activeCategory)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
                Professional Development
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Programmes & Courses
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Comprehensive certification programmes designed to develop competent safety 
                professionals at every stage of their career journey.
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

        {/* Programmes Grid */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {filteredProgrammes.map((programme) => (
                <Card 
                  key={programme.id}
                  id={programme.category}
                  className="group border-0 bg-secondary shadow-md transition-all hover:shadow-xl"
                >
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent capitalize">
                        {programme.category.replace("-", " ")}
                      </span>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {programme.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {programme.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{programme.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-accent" />
                        <span>{programme.mode}</span>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Entry Requirements
                      </h4>
                      <ul className="space-y-2">
                        {programme.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="mb-6">
                      <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Learning Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {programme.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button 
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href={`/apply?type=programme&id=${programme.id}`}>
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-accent-foreground mb-4">
              Need Help Choosing a Programme?
            </h2>
            <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8">
              Our admissions team is available to guide you in selecting the programme 
              that best fits your career goals and experience level.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Contact Admissions
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
