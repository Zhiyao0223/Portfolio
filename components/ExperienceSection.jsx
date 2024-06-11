import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section id="awards" className="mb-10">
      <div className="text-4xl font-semibold mb-8">My Experiences</div>
      <Image
        src="https://miro.medium.com/v2/resize:fit:1024/1*mwXHpdt6CTQHxH78dwc6NA.jpeg"
        alt="Work In Progress"
        width={400}
        height={400}
        className="mx-auto"
      />
    </section>
  );
};

export default ExperienceSection;
