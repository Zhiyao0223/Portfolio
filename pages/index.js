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
  return (
    <div className="flex min-h-screen flex-col xl:gap-3 xl:px-12">
      <main>
        <HeroSection key="hero" />
        <AchievementsSection key="achievements" />
        <AboutMe key="about" />
        <SkillSection key="skills" />
        <Projects key="projects" />
        {/* <AwardSection key="awards" />
        <ExperienceSection key="experience" /> */}
        <EmailSection key="email" />

        {/* Vercel Analytic */}
        <Analytics key="analytics" />
      </main>
      <Footer key="footer" />
    </div>
  );
}
