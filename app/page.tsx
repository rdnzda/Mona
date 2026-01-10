import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
    </div>
  );
}