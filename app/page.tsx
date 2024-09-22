import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { TestimonialsSectionServer } from "@/components/TestimonialsSectionServer"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSectionServer />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}