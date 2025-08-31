import dynamic from "next/dynamic";
import React from "react";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import AchievementsSection from "../components/AchievementsSection";
import { Analytics } from "@vercel/analytics/react";
import AwardSection from "@/components/AwardSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillSection from "@/components/SkillSection";

//Server: not found error handler
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});

export default function Home() {
  // Back to Top Button State
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col xl:gap-3 xl:px-12">
      <main>
        <HeroSection key="hero" />
        <AchievementsSection key="achievements" />
        <AboutMe key="about" />
        <SkillSection key="skills" />
        <Projects key="projects" />
        {/* <AwardSection key="awards" /> */}
        {/* <ExperienceSection key="experience" /> */}
        <EmailSection key="email" />

        {/* Vercel Analytic */}
        <Analytics key="analytics" />
      </main>
      <Footer key="footer" />
      {showButton && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
          aria-label="Back to top"
        >
          <i className="fa-solid fa-caret-up text-2xl"></i>
        </button>
      )}
    </div>
  );
}
