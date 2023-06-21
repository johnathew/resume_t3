import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="relative flex flex-col items-center">
      <h1 className="-mb-8 bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text pt-20 font-bold text-transparent">
        Projects
      </h1>
      <div className="mb-10 mt-14 flex w-full flex-col justify-center gap-2 rounded-lg px-4 md:mb-0 md:mt-10 md:grid md:h-full md:w-2/3 md:flex-none md:grid-cols-2 md:gap-2 md:pt-5">
        <ProjectCard
          projectName="Pokedex"
          languages="Typescript, React, Tailwind"
          description="Pokedex made utilizing Pokemon-API"
          previewLink="https://poetic-figolla-62a3eb.netlify.app/"
          ghLink="https://github.com/johnathew/pokemonAPI-reacthooks"
        />
        <ProjectCard
          projectName="GitHub Repo Search"
          languages="Typescript, React, Tailwind"
          description="Search GitHub repositories"
          previewLink="https://deluxe-cascaron-d7a13a.netlify.app/"
          ghLink="https://github.com/johnathew/github_react_exercise_ts"
        />
        <ProjectCard
          projectName="Memory Game"
          languages="React, Javascript, Tailwind"
          description="Memory Card game made with JS"
          previewLink="https://poetic-figolla-62a3eb.netlify.app/"
          ghLink="https://github.com/johnathew/memory_game"
        />

        <ProjectCard
          projectName="Resume"
          languages="Typescript, Tailwind, Next JS"
          description="Code used to create this site"
          previewLink="https://poetic-figolla-62a3eb.netlify.app/"
          ghLink="https://github.com/johnathew/resume_t3"
        />
      </div>
    </section>
  );
};

export default Projects;
