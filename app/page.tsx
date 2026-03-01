import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { SystemsSection } from "@/components/systems-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>
        <AboutSection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>
        <SkillsSection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>
        <ProjectsSection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>
        <SystemsSection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>
        <PhilosophySection />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
