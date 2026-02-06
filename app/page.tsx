import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import SocialGrid from "@/components/sections/SocialGrid";
import Brand from "@/components/sections/Brand";
import SketchToSkin from "@/components/sections/SketchToSkin";
import TheMakers from "@/components/sections/TheMakers";
import VideoCarousel from "@/components/sections/VideoCarousel";
import TheRitual from "@/components/sections/TheRitual";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <SocialGrid />
      <Brand />
      <SketchToSkin />
      <TheMakers />
      <VideoCarousel />
      <TheRitual />
      <Footer />
    </main>
  );
}
