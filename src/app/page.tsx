import AboutSection from "@/app/components/AboutSection";
import SkillsSection from "@/app/components/Skills";
import Hero from "@/app/components/Hero";
import ProjectSection from "@/app/components/ProjectSection";
import WorkSection from "@/app/components/WorkSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About + Skills chung một vùng */}
      <section className="md:mx-[5%] py-[10%] md:py-16 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl">
        <div className="max-w-[90%] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <AboutSection />
            <SkillsSection />
          </div>
        </div>
      </section>

      <WorkSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
