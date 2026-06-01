import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { VisionMission } from "@/components/home/vision-mission"
import { Statistics } from "@/components/home/statistics"
import { FeaturedProgrammes } from "@/components/home/featured-programmes"
import { MembershipPreview } from "@/components/home/membership-preview"
import { UpcomingEvents } from "@/components/home/upcoming-events"
import { Partners } from "@/components/home/partners"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VisionMission />
        <Statistics />
        <FeaturedProgrammes />
        <MembershipPreview />
        <UpcomingEvents />
        <Partners />
      </main>
      <Footer />
    </>
  )
}
