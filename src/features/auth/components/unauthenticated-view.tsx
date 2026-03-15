import HeroSection from "@/features/landing/hero";
import Navbar from "@/features/landing/navbar";
import LogoTicker from "@/features/landing/logo-ticker";
import CoreFeatures from "@/features/landing/core-features";
import Benefits from "@/features/landing/benefits";
import Testimonials from "@/features/landing/testimonials";
import UseCases from "@/features/landing/use-cases";
import Footer from "@/features/landing/footer";

const UnauthenticatedView = () => {
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
  );
};

export default UnauthenticatedView;
