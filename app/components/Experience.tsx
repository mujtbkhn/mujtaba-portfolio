// components/Experience.tsx

import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  summary: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Fullstack Trainee",
    company: "Galaxy Fintech",
    period: "MAY 2024 . JULY 2024",
    summary: "As a Fullstack Trainee, I excelled in module-based learning, consistently ranking in the top 3 across various assessments. I developed client-side applications using JavaScript, HTML, CSS, and Bootstrap, while also creating server-side applications with Node.js, Express.js, and MongoDB. This comprehensive training equipped me with practical skills in both frontend and backend development, enabling me to build complete web applications.",
  },

  {
    title: "Fullstack Trainee",
    company: "Cuvette",
    period: "OCT 2023 . APRIL 2024",
    summary: "Completed Cuvette's Fullstack MERN Developer program, achieving top scores across key technologies. Enhanced debugging skills and applied industry-standard practices while delivering practical, industry-level projects. This hands-on experience solidified my expertise in the entire MERN stack.",
  },
  {
    title: "Frontend Engineer",
    company: "Etqan Technologies",
    period: "FEB 2023 . JULY 2023",
    summary: "As a Frontend Engineer, I developed the company's responsive website and implemented research-driven landing page designs to boost engagement. I also created a custom Bootstrap website for a cleaning industry client, translating specific needs into effective web solutions. My work consistently delivered user-friendly interfaces and high client satisfaction.",
  },
];

const Experience: React.FC = () => {
  return (
    <div className="relative">
      <h1 className="text-4xl mb-8">Experience</h1>
      <div className="border-l-2 border-gray-300 ml-4">
        {experiences.map((exp, index) => (
          <div className="mb-12 relative" key={index}>
            <div className="absolute w-4 h-4 bg-black border-2 rounded-full -left-[9px] top-1"></div>
            <div className="ml-8">
              <p className="font-thin text-sm text-gray-400">{exp.period}</p>
              <h2 className="text-2xl font-semibold mt-1">{exp.title}</h2>
              <h3 className="md:text-lg font-medium text-gray-100">{exp.company}</h3>
              <p className="mt-2 text-sm">{exp.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
