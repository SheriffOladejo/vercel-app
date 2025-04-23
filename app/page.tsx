import CryptoTable from "@/components/crypto-table"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PlatformsPreview from "@/components/platforms-preview"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <HeroSection />
      <div id="market">
        <CryptoTable />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="platforms">
        <PlatformsPreview />
      </div>
    </div>
  )
}
