import { CTASection } from "@/components/landing/CTASection";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Navbar } from "@/components/landing/Navbar";
import { Pricing } from "@/components/landing/Pricing";
import { StatsBar } from "@/components/landing/StatsBar";
import { Testimonials } from "@/components/landing/Testimonials";
import { UserTypes } from "@/components/landing/UserTypes";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <UserTypes />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}