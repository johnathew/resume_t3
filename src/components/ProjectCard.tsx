import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BiCode } from "react-icons/bi";

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
      <div className="relative flex w-full flex-wrap rounded-lg border-4 border-double border-black bg-gradient-to-r from-[#71fead] to-[#437e60] px-3.5 py-2.5 text-[10px] text-slate-950 shadow  duration-500 hover:m-2 hover:transform hover:py-2 md:h-full md:max-w-xl md:justify-between md:text-base md:hover:bg-[#71fead] md:hover:bg-none group">
        <div className="flex flex-col align-middle">
          <h1 className="text-xs md:text-lg group-hover:underline underline-offset-4">{projectName}</h1>
          <p className="font-light">{description}</p>
          <p className="font-light">{languages}</p>
        </div>
        <div className="z-10 pl-2 border-t-2 border-black border-dotted">
          <ul className="flex h-auto w-auto items-center gap-10 px-2 align-middle md:p-2">
            <li className="flex flex-col items-center">
              <CgWebsite className="transform rounded-lg text-lg text-black duration-500 hover:bg-orange-400 md:text-2xl" />
              <label>Live Preview</label>
            </li>
            <li className="flex flex-col items-center">
              <BiCode className="transform rounded-lg text-lg text-black duration-500 hover:bg-orange-400 md:text-2xl" />
              <label>GitHub Link</label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
