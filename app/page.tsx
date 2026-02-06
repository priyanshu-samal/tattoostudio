import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import SocialGrid from "@/components/sections/SocialGrid";
import Brand from "@/components/sections/Brand";
import SketchToSkin from "@/components/sections/SketchToSkin";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <SocialGrid />
      <Brand />
      <SketchToSkin />
    </main>
  );
}
