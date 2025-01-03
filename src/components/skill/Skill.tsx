/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchSkillsLevel2 } from "@/utils/api/level2SkillApi";
import { fetchSkills } from "@/utils/api/skillApi";
import { isUserLoggedIn } from "@/utils/api/userApi";
import React from "react";

const Skills = async () => {
  const level1Skills = await fetchSkills();

  const level2Skills = await fetchSkillsLevel2();
  const user = await isUserLoggedIn();
  console.log({ user });

  console.log(level1Skills);
  console.log(level2Skills);
  return (
    <section id="skill" className="w-full py:6 md:py-16 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold  text-center mb-8">My Skills</h2>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold  mb-6">Level 1 Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {level1Skills?.map((skill: any, index: any) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold  mb-6">Level 2 Skills</h3>
          <div className="mb-6 border-t border-gray-300"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {level2Skills?.map((skill: any, index: any) => (
              <div
                key={index}
                className="relative flex items-center gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600">{skill.level}</p>
                </div>
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  Level 2
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
