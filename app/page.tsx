import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import SocialGrid from "@/components/sections/SocialGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <SocialGrid />
    </main>
  );
}
