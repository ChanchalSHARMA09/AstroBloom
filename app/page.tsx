import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero/Hero";
import BackgroundStars from "@/components/hero/BackgroundStars";

import Features from "@/components/features/Features";
import Stats from "@/components/stats/Stats";
import Gallery from "@/components/gallery/Gallery";
import CTA from "@/components/cta/CTA";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <BackgroundStars />

      <Navbar />

      <Hero />

      <Features />

      <Stats />

      <Gallery />

      <CTA />

      <Footer />
    </main>
  );
}