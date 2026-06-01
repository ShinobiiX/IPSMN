import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, UserCheck, Award, Check, ArrowRight } from "lucide-react"

const membershipCategories = [
  {
    id: "graduate",
    title: "Graduate Member",
    subtitle: "GIPSM",
    icon: GraduationCap,
    description: "For recent graduates of IPSM programmes who are beginning their professional safety career journey.",
    requirements: [
      "Completion of IPSM Diploma programme",
      "Successful examination results",
      "Evidence of professional conduct",
      "Completed membership application"
    ],
    benefits: [
      "Official Certificate of Membership",
      "Access to member-only resources",
      "Discounted training programmes",
      "Networking opportunities",
      "Monthly newsletter subscription",
      "Job board access"
    ],
    fee: "Starting from ₦25,000",
    featured: false
  },
  {
    id: "associate",
    title: "Associate Member",
    subtitle: "AIPSM",
    icon: Users,
    description: "For safety practitioners with relevant experience and qualifications seeking professional recognition.",
    requirements: [
      "Higher Diploma or equivalent qualification",
      "Minimum 2 years relevant experience",
      "Two professional references",
      "Evidence of CPD activities"
    ],
    benefits: [
      "Use of AIPSM designatory letters",
      "Professional recognition",
      "Training discounts up to 20%",
      "Industry updates and publications",
      "Regional chapter membership",
      "Conference discounts"
    ],
    fee: "Starting from ₦45,000",
    featured: false
  },
  {
    id: "full",
    title: "Full Member",
    subtitle: "MIPSM",
    icon: UserCheck,
    description: "For experienced safety professionals meeting full membership criteria with proven track record.",
    requirements: [
      "Postgraduate Diploma or equivalent",
      "Minimum 5 years professional experience",
      "Demonstrated competency portfolio",
      "Active CPD compliance"
    ],
    benefits: [
      "Use of MIPSM designatory letters",
      "Full voting rights in AGM",
      "Leadership opportunities",
      "Priority event registration",
      "Mentorship program access",
      "International reciprocal recognition"
    ],
    fee: "Starting from ₦75,000",
    featured: true
  },
  {
    id: "fellow",
    title: "Fellow",
    subtitle: "FIPSM",
    icon: Award,
    description: "The highest membership grade reserved for distinguished safety leaders with exceptional contributions.",
    requirements: [
      "Minimum 10 years senior HSE experience",
      "Significant contribution to safety profession",
      "Nomination by existing Fellows",
      "Peer review and approval"
    ],
    benefits: [
      "Prestigious FIPSM designation",
      "Advisory board eligibility",
      "Speaking opportunities",
      "Mentorship leadership roles",
      "Complimentary conference access",
      "Recognition in publications"
    ],
    fee: "By invitation",
    featured: false
  },
]

const faqs = [
  {
    question: "How do I apply for membership?",
    answer: "Complete the online application form, submit required documents, and pay the applicable fee. Our membership team will review your application within 2-4 weeks."
  },
  {
    question: "Can I upgrade my membership category?",
    answer: "Yes, members can upgrade their category as they gain more experience and qualifications. Contact our membership office to discuss your eligibility for upgrade."
  },
  {
    question: "What are the annual renewal requirements?",
    answer: "Members must demonstrate ongoing CPD activities and pay annual renewal fees to maintain their membership status and designatory letters."
  },
  {
    question: "Are there corporate membership options?",
    answer: "Yes, we offer corporate membership packages for organizations seeking to enroll multiple employees. Contact us for custom corporate solutions."
  },
]

export default function MembershipPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
                Join Our Community
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Membership Categories
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Join Nigeria&apos;s premier community of safety professionals and gain access to 
                exclusive benefits, professional recognition, and career advancement opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Membership Cards */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {membershipCategories.map((category) => (
                <Card 
                  key={category.id}
                  className={`group relative overflow-hidden transition-all hover:shadow-xl ${
                    category.featured 
                      ? 'border-2 border-accent shadow-lg' 
                      : 'border-0 bg-secondary shadow-md'
                  }`}
                >
                  {category.featured && (
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${
                        category.featured ? 'bg-accent' : 'bg-primary/10'
                      }`}>
                        <category.icon className={`h-8 w-8 ${
                          category.featured ? 'text-accent-foreground' : 'text-primary'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-foreground">
                          {category.title}
                        </h3>
                        <p className="text-accent font-semibold">{category.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="font-heading font-semibold text-foreground mb-3">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {category.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-heading font-semibold text-foreground mb-3">
                        Benefits
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {category.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fee & CTA */}
                    <div className="pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-semibold text-foreground">{category.fee}</span> / annually
                      </p>
                      <Button 
                        asChild
                        className={`w-full ${
                          category.featured 
                            ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                            : 'bg-primary text-primary-foreground hover:bg-primary/90'
                        }`}
                      >
                        <Link href={`/apply?type=membership&id=${category.id}`}>
                          Apply Now
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

        {/* FAQ Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Common questions about IPSM membership
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-0 bg-background shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
              Ready to Join IPSM?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Take the next step in your professional safety career. 
              Our membership team is ready to assist you with your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/apply?type=membership">
                  Start Application
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/contact">
                  Contact Membership Office
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
