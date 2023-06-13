import React from "react";

type ProjectPropTypes = {
  projectName: string;
  description: string;
  languages: string;
};

const ProjectCard = ({
  projectName,
  description,
  languages,
}: ProjectPropTypes) => {
  return (
    <div className="md:w-full md:h-auto bg-gradient-to-r from-[#71fead] to-[#437e60] border-2 border-black shadow text-slate-950 rounded-lg px-3.5 py-2.5 md:p-7 text-xs md:text-base hover:inset-x-24">
      <h1 className="md:text-xl text-xs">{projectName}</h1>
      <p>{description}</p>
      <p>{languages}</p>
    </div>
  );
};

export default ProjectCard;
