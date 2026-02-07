import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import SequenceScroll from "@/components/SequenceScroll";
import AboutSection from "@/components/sections/AboutSection";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import BentoGrid from "@/components/sections/BentoGrid";
import StatsSection from "@/components/sections/StatsSection";
import GallerySection from "@/components/sections/GallerySection";
import Footer from "@/components/sections/Footer";
import ContactSection from "@/components/sections/ContactSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import RayonSection from "@/components/sections/RayonSection";

export default function Home() {
  return (
    <main className="relative w-full">
      <Preloader />
      <Navbar />

      {/* Hero / Scrollytelling Section */}
      <SequenceScroll />

      {/* Content Sections */}
      {/* Content Sections */}
      <div className="relative bg-background">
        <AboutSection />
        <ServicesMarquee />
        <BentoGrid />
        <StatsSection />
        <GallerySection />
        <ContactSection />
        <RegistrationSection />
        <RayonSection />
        <Footer />
      </div>
    </main>
  );
}
