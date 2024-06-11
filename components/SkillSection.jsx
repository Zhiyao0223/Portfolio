import Image from "next/image";

const skills = [
  { name: "C", icon: "c-icon.png" },
  { name: "C#", icon: "c-sharp-icon.png" },
  { name: "C++", icon: "cpp-icon.png" },
  { name: "CSS", icon: "css-icon.png" },
  { name: "Flutter", icon: "flutter-icon.png" },
  { name: "HTML", icon: "html-icon.png" },
  { name: "Java", icon: "java-icon.png" },
  { name: "JavaScript", icon: "js-icon.png" },
  { name: "Kotlin", icon: "kotlin-icon.png" },
  { name: "Laravel", icon: "laravel-icon.png" },
  { name: "NextJs", icon: "nextjs-icon.jpg" },
  { name: "NodeJs", icon: "nodejs-icon.png" },
  { name: "PHP", icon: "php-icon.png" },
  { name: "Python", icon: "python-icon.png" },
  { name: "R", icon: "r-icon.png" },
  { name: "SQL", icon: "sql-icon.png" },
  { name: "Tailwind", icon: "tailwind-icon.png" },
  { name: "TypeScript", icon: "typescript-icon.png" },
];

const SkillSection = () => {
  return (
    <section className="mb-10" id="skill">
      <div className="text-4xl font-semibold mb-8">Skills</div>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center space-x-5 bg-gray-700 p-4 rounded"
          >
            <Image
              src={`/skills/${skill.icon}`}
              alt={skill.name}
              width={24}
              height={24}
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
