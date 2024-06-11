import React from "react";
import { useTransition, useState } from "react";
import Image from "next/image"; // Import the Image component from the appropriate library
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

// About Me Section
const AboutMe = () => {
  // const [tab, setTab] = useState("skills");
  // const [isPending, startTransition] = useTransition();
  // const handleTabChange = (id) => {
  //   startTransition(() => {
  //     setTab(id);
  //   });
  // };

  return (
    <section className="text-white grid" id="aboutMe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 items-center">
        <div className="w-full">
          <Image
            src="/about-me.jpg"
            // src="/developer.svg"
            alt="About Me"
            width={750}
            height={600}
            style={{ borderRadius: "25px" }}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <div className="text-justify text-lg">
            {/* Introduction Paragraph */}
            <p>
              Graduated from Asia Pacific University (APU) with a
              Bachelor&apos;s degree in <strong>Artificial Intelligence</strong>
              , I am a passionate developer with a keen interest in creating
              innovative solutions.
            </p>
            <br />

            {/* Proficiency Paragrpah */}
            <p>
              Proficient in <strong>Flutter, PHP, C#, Python</strong> and more,
              I excel in both frontend and backend technologies. My expertise in
              creating seamless user experiences is showcased through my work
              with Flutter and languages like PHP and Java.
            </p>
            <br />

            {/* Game Development */}
            <p>
              Additionally, I have explored game development using{" "}
              <strong>Unity and Godot Engine </strong> which further
              diversifying my skill set. My journey reflects a commitment to
              mastering the multifaceted landscape of artificial intelligence
              and technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
