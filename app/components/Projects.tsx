"use client";
import Image, { StaticImageData } from "next/image";
import SWIPTORY from "../../public/SWIPTORY.png";
import PROMANAGE from "../../public/PROMANAGE.png";
import TRANSACTIONS from "../../public/TRANSACTIONS.png";
import CINEVERSE from "../../public/CINEVERSE.png";
import React from "react";
import { useRouter } from "next/navigation";
import DownloadCV from "./DownloadCV";

interface Button {
  label: string;
  url: string;
}

interface ProjectItem {
  title: string;
  description: string;
  buttons: Button[];
  image: StaticImageData;
}

const projects: ProjectItem[] = [
  {
    title: "SWIPTORY",
    description:
      "A story sharing application that lets you create stories and share them for the world",
    buttons: [
      { label: "Live Website", url: "https://swiptory-three.vercel.app/" },
      { label: "GitHub", url: "https://github.com/mujtbkhn/swiptory-frontend" },
      {
        label: "Video Link",
        url: "https://drive.google.com/file/d/1OfSRTx5uZiVz7GW2GuGGblvYmiWgqBY3/view",
      },
    ],
    image: SWIPTORY,
  },
  {
    title: "PROMANAGE",
    description: "Todo Application on steroids",
    buttons: [
      {
        label: "Live Website",
        url: "https://promanage-frontend-blush.vercel.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/mujtbkhn/promanage-frontend",
      },
      {
        label: "Video Link",
        url: "https://drive.google.com/file/d/1nAJ3R1MnpiltNchh20SUzVs7Gim69jyx/view",
      },
    ],
    image: PROMANAGE,
  },
  {
    title: "CINEVERSE",
    description: "Beautiful movie showcasing application",
    buttons: [
      { label: "Live Website", url: "https://mujtabas-cineverse.vercel.app/" },
      {
        label: "Github",
        url: "https://github.com/mujtbkhn/cineverse",
      },
      {
        label: "Video Link",
        url: "https://drive.google.com/file/d/1kXMvvoxOeTxRikipTrSw9SZw4yGOM8ie/view",
      },
    ],
    image: CINEVERSE,
  },
  {
    title: "TRANSACTIONS APP",
    description:
      "A transactions app that lets you send and receive money real time using ACID principles",
    buttons: [
      {
        label: "Live Website",
        url: "https://mujtabas-transaction-app.vercel.app/dashboard",
      },
      {
        label: "Github",
        url: "https://github.com/mujtbkhn/transactions-frontend",
      },
      {
        label: "Video Link",
        url: "https://drive.google.com/file/d/1CB0b4vUegdZzEhokfU8Kkm1QQAOeiaGO/view",
      },
    ],
    image: TRANSACTIONS,
  },
];

const Projects: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    router.push(url);
  };
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 max-w-[900px] mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row h-auto md:h-80 md:py-12 md:pl-8 p-4 rounded-lg shadow-lg bg-gray-900 overflow-hidden"
            >
              <div className="flex-1 pr-4">
                <h3 className="mb-4 text-2xl font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.buttons.map((button, buttonIndex) => (
                    <button
                      key={buttonIndex}
                      onClick={() => handleNavigation(button.url)}
                      className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-3/5 mt-4 md:mt-0">
                <div className="relative h-40 md:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DownloadCV />
    </section>
  );
};

export default Projects;
