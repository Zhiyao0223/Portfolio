/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML / CSS</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Java</li>
        <li>C</li>
        <li>C++</li>
        ... and more
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>AppSheet Hackathon</li>
        <li>Kitahack 2022</li>
        <li>Kitahack 2023</li>
        <li>Level 99 GameJam</li>
        <li>APUBCC Sparkathon</li>
        <li>Encode Club</li>
        <li>Tune Protect Hackathon</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Asia Pacific University</li>
        <li>SMK Hwa Lian</li>
      </ul>
    ),
  },
];
//1
const AboutMe = () => {
  //1b
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  //1a
  return (
    <section className="text-white grid" id="aboutMe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
        <div>
          <img
            src="/AboutMe.png"
            alt="About Me"
            width={450}
            height={450}
            style={{ borderRadius: "25px" }}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-base text-justify lg:text-lg">
            I am currently dedicated to pursuing a degree in Artificial
            Intelligence at APU, immersing myself in the latest advancements in
            the field. Alongside my academic pursuits, I bring a wealth of
            experience in fullstack development to the table. Proficient in a
            range of technologies including Flutter, PHP, Python and more, I
            have a solid foundation that extends from frontend to backend. My
            expertise in developing seamless user experiences is demonstrated
            through my work with Flutter and my proficiency in languages like
            PHP and Java. In addition to my fullstack skills, I have delved into
            the realm of game development using Unity and Godot Engine,
            expanding my toolkit and diversifying my skill set. My academic
            journey coupled with my hands-on experience reflects my commitment
            to mastering the multifaceted landscape of artificial intelligence
            and technology.
          </p>
          <div className="flex flex-row mt-8">
            {/* 1e */}
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
