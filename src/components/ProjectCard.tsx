import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BiCode } from "react-icons/bi";
import Link from "next/link";

type ProjectPropTypes = {
  projectName: string;
  description: string;
  languages: string;
  ghLink: string;
  previewLink: string;
};

const ProjectCard = ({
  projectName,
  description,
  languages,
  previewLink,
  ghLink,
}: ProjectPropTypes) => {
  return (
    <>
      <div className="group relative flex w-full flex-col rounded-lg border-4 border-double border-black bg-gradient-to-r from-[#324958] to-[#583249] dark:from-[#71fead] dark:to-[#437e60] p-3 text-[10px] text-slate-200 dark:text-slate-950  shadow duration-500 hover:m-2 hover:transform hover:p-2 md:h-full md:max-w-xl md:justify-between md:text-base hover:bg-[#324958]">
        <div className="flex flex-col items-center align-middle">
          <h1 className="text-sm font-extrabold underline-offset-4 group-hover:underline md:text-lg">
            {projectName}
          </h1>
          <p className="font-normal">{description}</p>
          <p className="font-extralight">{languages}</p>
        </div>
        <div className="border-t-2 border-slate-800 border-opacity-40">
          <ul className="flex h-auto w-auto items-center justify-center gap-2 pt-2 md:p-0.5">
            <Link
              href={`${previewLink}`}
              legacyBehavior
            >
              <a target="_blank" className="m-0 h-auto w-auto no-underline">
                <li className="flex flex-col items-center rounded-md  border-2 border-slate-200 bg-slate-900 p-1 text-slate-200 shadow">
                  <CgWebsite className="transform rounded-lg text-lg duration-500 hover:bg-orange-400 md:text-2xl" />
                  <label className="text-sm font-normal">Live Preview</label>
                </li>
              </a>
            </Link>
            <Link href={`${ghLink}`} legacyBehavior>
            <a target="_blank" className="m-0 h-auto w-auto no-underline">
              <li className="flex flex-col items-center rounded-md border-2 border-slate-200 bg-black p-1 text-slate-200 shadow">
                <BiCode className="transform rounded-lg text-lg duration-500 hover:bg-orange-400 md:text-2xl" />
                <label className="text-sm font-normal">GitHub Link</label>
              </li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
