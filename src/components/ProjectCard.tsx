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
    <>
      <div className="relative flex w-full  flex-col flex-wrap rounded-lg border-4 border-double border-black bg-gradient-to-r from-[#71fead] to-[#437e60] px-3.5 py-2.5 text-[10px] text-slate-950 shadow  duration-500 hover:m-2 hover:transform hover:py-2 hover:underline md:h-full md:max-w-xl md:justify-center md:text-base md:hover:bg-[#71fead] md:hover:bg-none">
        <h1 className="text-xs md:text-lg">{projectName}</h1>
        <p>{description}</p>
        <p>{languages}</p>
      </div>
    </>
  );
};

export default ProjectCard;
