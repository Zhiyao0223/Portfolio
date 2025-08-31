import Image from "next/image";

const skills = [
  { name: "C", icon: "c-icon.png", type: "Backend" },
  { name: "C#", icon: "c-sharp-icon.png", type: "Frontend/Backend" },
  { name: "C++", icon: "cpp-icon.png", type: "Backend" },
  { name: "Flutter", icon: "flutter-icon.png", type: "Mobile" },
  { name: "HTML", icon: "html-icon.png", type: "Frontend" },
  { name: "CSS", icon: "css-icon.png", type: "Frontend" },
  { name: "Java", icon: "java-icon.png", type: "Backend" },
  { name: "Kotlin", icon: "kotlin-icon.png", type: "Mobile" },
  { name: "NextJs", icon: "nextjs-icon.jpg", type: "Frontend" },
  { name: "NodeJs", icon: "nodejs-icon.png", type: "Backend" },
  { name: "PHP", icon: "php-icon.png", type: "Backend" },
  { name: "Python", icon: "python-icon.png", type: "Backend" },
  { name: "R", icon: "r-icon.png", type: "Data Science" },
  { name: "SQL", icon: "sql-icon.png", type: "Backend" },
  { name: "Tailwind", icon: "tailwind-icon.png", type: "Frontend" },
  { name: "Laravel", icon: "laravel-icon.png", type: "Frontend" },
  { name: "JavaScript", icon: "js-icon.png", type: "Frontend" },
  { name: "TypeScript", icon: "typescript-icon.png", type: "Frontend" },
];

const groupByType = (skills) => {
  return skills.reduce((acc, skill) => {
    acc[skill.type] = acc[skill.type] || [];
    acc[skill.type].push(skill);
    return acc;
  }, {});
};

const typeOrder = [
  "Frontend",
  "Backend",
  "Mobile",
  "Data Science",
  "Frontend/Backend",
];

const SkillSection = () => {
  const grouped = groupByType(skills);
  const sectionTypes = typeOrder.slice(0, 4);

  return (
    <section className="mb-10" id="skill">
      <div className="text-4xl font-semibold mb-8">Skills</div>
      <div className="grid grid-cols-2 gap-8">
        {sectionTypes.map((type) => (
          <div key={type}>
            <div className="text-xl font-semibold mb-4">{type}</div>
            <div className="grid grid-cols-2 gap-4">
              {(grouped[type] || []).map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-3 bg-gray-700 p-3 rounded"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
