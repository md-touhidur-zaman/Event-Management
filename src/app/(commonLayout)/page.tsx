import FeatureEvents from "@/components/modules/Home/FeatureEvents";
import { HeroSection } from "@/components/modules/Home/HeroSection";
import HowItWork from "@/components/modules/Home/HowItWork";

export default function HomePage() {
  return (
    <div className="container mx-auto my-10 space-y-20 p-2 md:p-0">
      <HeroSection />
      <FeatureEvents/>
      <HowItWork/>
    </div>
  );
}
