"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Eye, Award, CheckCircle2, History, Heart, ShieldCheck, Clock, Building2, MapPin, CheckCircle } from "lucide-react"

const milestones = [
  { year: "2012", title: "Official Approval", event: "Approved by the Federal Ministry of Education and Justice as a professional safety institute." },
  { year: "2014", title: "Regional Expansion", event: "Launch of specialized training workshops across industrial zones in Nigeria." },
  { year: "2015", title: "Strategic Partnership", event: "Collaboration established with the University of Ibadan Consultancy Services Unit." },
  { year: "2018", title: "Course Diversification", event: "Expanded curriculum to include Logistics, Transport Management, and Safety Technology." },
  { year: "2022", title: "5,000+ Members", event: "Exceeded the milestone of 5,000 active professional members across Africa." },
  { year: "2025", title: "Digital Transformation", event: "Implementation of blended learning platforms and OSH technology protocols." },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
                About IPSM
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Building Safety Excellence Since 2012
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                The Institute of Proficient Safety Measures (IPSM) Nigeria is a professional body 
                dedicated to pioneering sustainable excellence in Occupational Safety and Health.
              </p>
            </div>
          </div>
        </section>

        {/* Consolidated Stats */}
        <section className="py-12 bg-secondary/50 backdrop-blur-sm border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-1">14+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Years of Excellence</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-1">5,000+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Certified Members</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-1">200+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Corporate Partners</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-1">12,000+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Certifications Issued</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <Card className="border-0 bg-secondary shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <Eye className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision developing human capital for sustainable Occupational Safety and Health (OSH). 
                    Our vision is to serve as the primary catalyst for safety transformation across industries, 
                    striving to become a global reference point in safety education.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-secondary shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to design and deliver high-impact development programs and a wide range of 
                    consultancy services that produce outstanding human performance in OSH. We are committed 
                    to fostering excellence and professional safety standards across Nigeria.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Growth Milestones */}
        <section className="py-20 bg-primary overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">Our Growth Journey</h2>
              <div className="h-1 w-20 bg-accent mx-auto mt-4 rounded-full" />
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-1 bg-accent/20 -translate-x-1/2 hidden lg:block" />
              <div className="space-y-12">
                {milestones.map((item, idx) => (
                  <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                      <div className={`w-full max-w-md p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors shadow-xl ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <span className="text-accent font-bold text-2xl mb-2 block">{item.year}</span>
                        <h4 className="text-primary-foreground font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-primary-foreground/70 text-sm">{item.event}</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Recognition */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-background p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
                    <Shield className="h-10 w-10 text-primary mb-3" />
                    <span className="text-sm font-bold">Approved by Ministry of Justice</span>
                  </div>
                  <div className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
                    <Building2 className="h-10 w-10 text-accent mb-3" />
                    <span className="text-sm font-bold">Federal Ministry of Education Approved</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-background p-6 rounded-2xl shadow-md flex flex-col items-center text-center border-2 border-accent">
                    <Award className="h-10 w-10 text-accent mb-3" />
                    <span className="text-sm font-bold">University of Ibadan Partnered</span>
                  </div>
                  <div className="bg-background p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
                    <MapPin className="h-10 w-10 text-primary mb-3" />
                    <span className="text-sm font-bold">Nationwide Professional Network</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Professional Recognition</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The Institute of Proficient Safety Measures (IPSMN) operates under strict legal and professional frameworks to ensure your certifications carry global and national weight.
                </p>
                <div className="space-y-4">
                  {[
                    "Accredited professional certifications for industrial leaders.",
                    "Governed by the Companies and Allied Matters Act 1999.",
                    "Strategic alliance with University of Ibadan Consultancy Unit.",
                    "Dedicated to developing human capital for sustainable OSH."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span className="text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story / History */}
        <section className="py-20 bg-background border-y border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-6">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold mb-6">The IPSMN Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Established as a Limited by Guarantee entity under the Companies and Allied Matters Act of 1999, 
                    the Institute of Proficient Safety Measures, Nigeria (IPSMN) was founded to address the 
                    critical gap in professional safety education within the country.
                  </p>
                  <p>
                    In 2012, we received official approval from the Federal Ministry of Education and the Federal 
                    Ministry of Justice, marking our emergence as a recognized authority in safety measures.
                  </p>
                  <p>
                    Today, in strategic partnership with the University of Ibadan Consultancy Services Unit, 
                    we continue to set the benchmark for occupational health and safety standards across Africa.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="border-0 bg-secondary">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-accent mb-4" />
                    <h4 className="font-bold mb-2">Professionalism</h4>
                    <p className="text-xs text-muted-foreground">Upholding the highest standards in every training and consultancy engagement.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-secondary">
                  <CardContent className="p-6">
                    <ShieldCheck className="h-8 w-8 text-accent mb-4" />
                    <h4 className="font-bold mb-2">Integrity</h4>
                    <p className="text-xs text-muted-foreground">A commitment to ethical practices that protect lives and organizational assets.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-secondary">
                  <CardContent className="p-6">
                    <Target className="h-8 w-8 text-accent mb-4" />
                    <h4 className="font-bold mb-2">Innovation</h4>
                    <p className="text-xs text-muted-foreground">Leveraging modern safety technologies to mitigate industrial risks effectively.</p>
                  </CardContent>
                </Card>
                <div className="bg-primary rounded-xl p-6 flex flex-col justify-center text-primary-foreground">
                  <p className="text-xl font-bold">Nigeria's Leader in Safety</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Objectives of the Institute</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Human Capital Development",
                  text: "Providing world-class training aimed at developing expertise in safety measures."
                },
                {
                  title: "Strategic Collaboration",
                  text: "Partnering with government and NGOs for research and consultancy in OSH."
                },
                {
                  title: "Professional Certification",
                  text: "Offering accredited Professional Diplomas in collaboration with higher institutions."
                }
              ].map((obj, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{obj.title}</h4>
                    <p className="text-sm text-muted-foreground">{obj.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div className="mt-12" />
      <Footer />
    </>
  )
}