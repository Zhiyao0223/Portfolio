import React from "react";

const achievementsList = [
  {
    metric: "Awards",
    value: "3+",
  },
  {
    metric: "Certifications",
    value: "10+",
  },
  {
    metric: "Years of Experience",
    value: "2+",
  },
  {
    metric: "Hackathons",
    value: "5+",
  },
  {
    metric: "Projects",
    value: "10+",
  },
];

// Achievements Section
const AchievementsSection = () => {
  return (
    <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
      {achievementsList.map((achievement) => {
        return (
          <div
            key={achievement.metric}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold">
              {achievement.value}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        );
      })}
    </div>
  );
};
export default AchievementsSection;
