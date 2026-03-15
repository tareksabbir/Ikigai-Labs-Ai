import Benefits from "@/features/landing/benefits";
import CoreFeatures from "@/features/landing/core-features";
import HeroSection from "@/features/landing/hero";
import LogoTicker from "@/features/landing/logo-ticker";
import Navbar from "@/features/landing/navbar";
import Testimonials from "@/features/landing/testimonials";
import UseCases from "@/features/landing/use-cases";
import { Footer } from "react-day-picker";


const page = () => {
  return (
    <main>
          <Navbar />
          <HeroSection />
          <LogoTicker />
          <CoreFeatures />
          <UseCases />
          <Benefits />
          <Testimonials />
          <Footer />
        </main>
  )
};

export default page;
