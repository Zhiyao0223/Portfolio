import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import GmailIcon from "../public/gmail-icon.svg";
import { contactEmail, githubLink, linkedinLink } from "@/config/constants";

const EmailSection = () => {
  return (
    <main
      className="grid md:grid-cols-2 my-4 md:my-6 py-4 md:py-4 gap-4 relative"
      id="contact"
    >
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2 ">
          Let&apos;s Connect
        </h5>

        <p className="text-[#ADB7BE] mb-4 mt-8 text-justify">
          I&apos;m currently looking for new opportunities, my inbox is always open.<br />
          Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <h4 className="text-[#ADB7BE] pb-3 mt-6">Let&apos;s get in touch!</h4>
        <div className=" flex flex-row gap-4 mt-6">
          <Link href={githubLink} target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href={linkedinLink} target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href={contactEmail} className="mt-1">
            <Image src={GmailIcon} alt="Gmail Icon" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default EmailSection;
