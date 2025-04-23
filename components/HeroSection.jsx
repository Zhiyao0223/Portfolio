import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

const resumeLink =
  "https://drive.google.com/file/d/1VF_or0IMFTePHYmafbvwRURyx01p4Pgr/view?usp=sharing";

const HeroSection = () => {
  return (
    // Intro and Photo Section
    <main className="py-16 mt-16 md-flex md:shrink-0 sm:py-3">
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-8 place-self-center justify-self-start"
        >
          <h1 className="font-extrabold">
            <span className="text-white text-8xl ">
              Hello, I&apos;m <br />
              <span className="text-transparent bg-clip-text sm:text-7xl md:text-8xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Ng Zhi Yao
              </span>
            </span>
            <br />
            <br />
            <span className="text-7xl">
              Looking For
              <br />
              <TypeWritter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString`<span style="color:#FF77FF">Software Engineer</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString`<span style="color:#9E7BFF">AI Engineer</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString`<span style="color:#893BFF">Fullstack Developer</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              ></TypeWritter>
            </span>
          </h1>
          <p className="text-gray-300 pt-8 text-base sm:text-lg mb-6 lg:text-xl">
            Slide down to know more about me!
          </p>
          {/* Resume Button */}
          <Link
            href={resumeLink}
            target="_blank"
            className="px-6 inline-block py-3 rounded-full mr-4 border-solid border-2  border-pink-500 hover:bg-pink-400"
          >
            <span className="text-xl text-white">View my Resume</span>
          </Link>
          {/* Project Button */}
          <Link
            href="#projects"
            className="px-12 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-indigo-600 hover:bg-violet-600"
          >
            <span className="text-xl text-white">Projects</span>
          </Link>
          {/* Award */}
          {/* <Link
            href="#awards"
            className="px-12 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-green-600 hover:bg-green-500"
          >
            <span className="text-xl text-white">Awards</span>
          </Link> */}
        </motion.div>
        <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-12 justify-items-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/passport-photo.jpg"
              alt="My photo"
              className="rounded-3xl justify-self-auto"
              width={600}
              height={600}
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
