import React from "react";
import Image from "next/image"; // Import the Image component from the appropriate library

// About Me Section
const AboutMe = () => {
  return (
    <section className="text-white grid" id="aboutMe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 items-center">
        <div className="w-full">
          <Image
            src="/about-me.jpg"
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
            <p className="about-me">
              Graduated from Asia Pacific University (APU) with a
              Bachelor&apos;s degree in <strong className="about-me-strong">Artificial Intelligence</strong>
              , I am a passionate developer with a keen interest in creating
              innovative solutions.
            </p>
            <br />

            {/* Proficiency Paragrpah */}
            <p className="about-me">
              Proficient in <strong className="about-me-strong">Flutter, PHP, C#, Python</strong> and more,
              I excel in both frontend and backend technologies. My expertise in
              creating seamless user experiences is showcased through my work
              with Flutter and languages like PHP and Java.
            </p>
            <br />

            {/* Game Development */}
            <p className="about-me">
              Additionally, I have explored game development using{" "}
              <strong className="about-me-strong">Unity and Godot Engine </strong> which further
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
