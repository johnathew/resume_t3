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
      <div className="relative flex flex-col w-full rounded-lg border-4 border-double border-black bg-gradient-to-r from-[#71fead] to-[#437e60] p-3 text-[10px] text-slate-950 shadow  duration-500 hover:m-2 hover:transform hover:p-2 md:h-full md:max-w-xl md:justify-between md:text-base md:hover:bg-[#71fead] md:hover:bg-none group">
        <div className="flex flex-col align-middle items-center">
          <h1 className="text-sm md:text-lg group-hover:underline underline-offset-4">{projectName}</h1>
          <p className="font-light">{description}</p>
          <p className="font-light">{languages}</p>
        </div>
        <div className="z-10 pl-2 border-t-[1px] border-slate-800 border-dotted">
          <ul className="flex mt-2 h-auto justify-center w-auto items-center gap-2 align-middle md:p-0.5">
            <li className="flex flex-col items-center border-2 border-double bg-yellow-200 border-black p-1 shadow rounded-md">
              <CgWebsite className="transform rounded-lg text-lg text-black duration-500 hover:bg-orange-400 md:text-2xl border-double" />
              <label>Live Preview</label>
            </li>
            <li className="flex flex-col items-center border-2 border-black bg-yellow-200 p-1 border-double shadow rounded-md">
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
