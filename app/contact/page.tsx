"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header" // Assuming Header is still in layout
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["10-12 JK Aladetan sports Drive,", "ife-Oluwa Estate. Mowe, Ogun state."]
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+234 833 428 840", "+234 815 602 3583"]
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["ipsmn2012@hmail.com"]
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM"]
  },
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setFormStatus('idle'), 5000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
                Get in Touch
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Have questions about our programmes, membership, or events? 
                Our team is ready to assist you on your safety professional journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                {formStatus === 'success' ? (
                  <Card className="border-0 bg-accent/10 shadow-md">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                          <CheckCircle className="h-8 w-8 text-accent-foreground" />
                        </div>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. Our team will respond to your inquiry within 24-48 hours.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-0 bg-secondary shadow-md">
                    <CardContent className="p-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-foreground">
                              Full Name <span className="text-destructive">*</span>
                            </label>
                            <Input
                              id="name"
                              type="text"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              className="bg-background"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-foreground">
                              Email Address <span className="text-destructive">*</span>
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              className="bg-background"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium text-foreground">
                            Subject <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="subject"
                            type="text"
                            placeholder="What is your enquiry about?"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                            className="bg-background"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-foreground">
                            Message <span className="text-destructive">*</span>
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your enquiry..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            rows={6}
                            className="bg-background resize-none"
                          />
                        </div>

                        <Button 
                          type="submit"
                          size="lg"
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        >
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <Card key={item.title} className="border-0 bg-secondary shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                            <item.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-foreground mb-2">
                              {item.title}
                            </h3>
                            {item.details.map((detail, index) => (
                              <p key={index} className="text-muted-foreground text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
            <div className="rounded-xl bg-primary/10 h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  IPSM Nigeria Headquarters
                </h3>
                <p className="text-muted-foreground">
                  Ogun State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
