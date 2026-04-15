import Hero, { ScrollToTop } from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Services from "@/components/sections/Services";
import CTAIntermediate from "@/components/sections/CTAIntermediate";
import SEOLocal from "@/components/sections/SEOLocal";
import Map from "@/components/sections/Map";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileActionBar from "@/components/MobileActionBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Trust />
      <Testimonials />
      <Gallery />
      <Map />
      <CTAIntermediate />
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
      <ScrollToTop />
    </main>
  );
}
