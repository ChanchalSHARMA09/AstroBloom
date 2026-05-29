import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import BackgroundStars from "@/components/hero/BackgroundStars";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundStars />
      <Navbar />
      <Hero />
    </main>
  );
}