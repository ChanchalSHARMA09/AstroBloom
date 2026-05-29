import BackgroundStars from "@/components/hero/BackgroundStars";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundStars />

      <Navbar />

      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-6xl font-bold">
          🚀 AstroBloom
        </h1>
      </div>
    </main>
  );
}