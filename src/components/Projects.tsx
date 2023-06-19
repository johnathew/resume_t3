import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="relative flex flex-col items-center text-gray-600">
      <h1 className="-mb-8 bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text pt-20 font-bold text-transparent">
        Projects
      </h1>
      <div className="mt-10 w-full justify-center rounded-lg p-5 md:mt-20 md:grid md:h-full md:w-4/5 md:grid-cols-2 md:gap-10">
        <Link href="https://poetic-figolla-62a3eb.netlify.app/" legacyBehavior>
          <a target="_blank" className="m-0 h-auto w-auto no-underline">
            <ProjectCard
              projectName="Pokedex"
              languages="Typescript, React, Tailwind"
              description="Pokedex made utilizing Pokemon-API"
            />
          </a>
        </Link>
        <Link href="https://poetic-figolla-62a3eb.netlify.app/" legacyBehavior>
          <a target="_blank" className="m-0 h-auto w-auto p-0 no-underline">
            <ProjectCard
              projectName="GitHub Repo Search"
              languages="Typescript, React, Tailwind"
              description="Search GitHub repositories"
            />
          </a>
        </Link>

        <Link href="https://poetic-figolla-62a3eb.netlify.app/" legacyBehavior>
          <a target="_blank" className="m-0 h-auto w-auto p-0 no-underline">
            <ProjectCard
              projectName="Memory Game"
              languages="React, Javascript, Tailwind"
              description="Memory Card game made with JS"
            />
          </a>
        </Link>
        <Link href="https://poetic-figolla-62a3eb.netlify.app/" legacyBehavior>
          <a target="_blank" className="m-0 h-auto w-auto p-0 no-underline">
            <ProjectCard
              projectName="Resume"
              languages="Typescript, Tailwind, Next JS"
              description="Code used to create this site"
            />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
