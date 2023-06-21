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
          <h1 className="text-sm md:text-lg group-hover:underline underline-offset-4 font-extrabold">{projectName}</h1>
          <p className="font-normal">{description}</p>
          <p className="font-extralight">{languages}</p>
        </div>
        <div className="border-t-2 border-slate-800 border-opacity-40">
          <ul className="flex pt-2 h-auto justify-center w-auto items-center gap-2 md:p-0.5">
            <li className="flex flex-col items-center border-2  bg-slate-900 border-slate-200 text-slate-200 p-1 shadow rounded-md">
              <CgWebsite className="transform rounded-lg text-lg duration-500 hover:bg-orange-400 md:text-2xl" />
              <label className="font-normal text-sm">Live Preview</label>
            </li>
            <li className="flex flex-col items-center border-2 text-slate-200 border-slate-200 bg-black p-1 shadow rounded-md">
              <BiCode className="transform rounded-lg text-lg duration-500 hover:bg-orange-400 md:text-2xl" />
              <label  className="font-normal text-sm">GitHub Link</label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
