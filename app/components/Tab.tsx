import Image, { StaticImageData } from "next/image";
import React from "react";
import Javascript from "../../public/javascript.png";
import react from "../../public/react.svg";
import node from "../../public/node.png";
import express from "../../public/express.png";
import mongoDB from "../../public/mongodb.png";
import tailwind from "../../public/tailwindcss.svg";

interface skill {
  label: string;
  logo: StaticImageData;
}
const Tab = () => {
  const skills: skill[] = [
    { label: "Javascript", logo: Javascript },
    { label: "ReactJs", logo: react },
    { label: "NodeJs", logo: node },
    { label: "Express", logo: express },
    { label: "MongoDB", logo: mongoDB },
    { label: "TailwindCSS", logo: tailwind },
  ];
  return (
    <div className="flex flex-wrap md:gap-5 gap-3 my-10">
    {skills.map((skill, index) => (
      <div key={index} className="md:px-4 md:py-2 px-2 py-1 bg-[#3F4044] rounded-md flex items-center">
        <Image src={skill.logo} alt={skill.label} width={28} height={28} className="mr-2" />
        <p>{skill.label}</p>
      </div>
    ))}
  </div>
  );
};

export default Tab;
