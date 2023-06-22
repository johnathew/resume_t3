import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

import { AiOutlineInstagram } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoIosSunny } from "react-icons/io";

type HeaderTypes = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  handleClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

const Header = ({ darkMode, setDarkMode, handleClick }: HeaderTypes) => {
  return (
    <header className="md:text-md absolute  z-50 flex h-fit w-screen items-center justify-around border-b-[1px] border-black bg-[#f1f4eb] p-2 drop-shadow-2xl dark:bg-[#00213d] sm:justify-evenly md:w-full">
      <div className="flex items-center gap-1 sm:space-x-1 md:justify-center md:space-x-1 pr-3">
        <div className="md:align-center h-auto rounded-lg border-2 border-slate-700 bg-[#324958] px-3 py-1 text-sm text-[#f3f5f0] shadow-lg dark:bg-[#71fead] dark:text-black md:text-lg">
          Resume
        </div>
      </div>
      <nav className="-ml-4 w-auto text-[12px] dark:text-[#f3f5f0] md:ml-0">
        <ul className=" my-auto pl-2 md:pl-0 flex w-full space-x-2 sm:text-base sm:font-normal md:mr-0">
          <li
            id="About"
            className=" underline-offset-2 hover:cursor-pointer hover:text-[#583249] hover:underline dark:hover:text-[#71fead]"
            onClick={(e) => handleClick(e)}
          >
            About
          </li>{" "}
          <span>|</span>
          <li
            id="Job History"
            className="w-auto underline-offset-2 hover:cursor-pointer hover:text-[#583249] hover:underline dark:hover:text-[#71fead]"
            onClick={(e) => handleClick(e)}
          >
            Job&nbsp;History
          </li>
          <span>|</span>
          <li
            id="Projects"
            className="w-auto underline-offset-2 hover:cursor-pointer hover:text-[#583249] hover:underline dark:hover:text-[#71fead]"
            onClick={(e) => handleClick(e)}
          >
            Projects
          </li>
        </ul>
      </nav>
      <div className="relative flex h-auto w-auto rounded-lg text-xl">
        <div className="flex h-auto w-full flex-col rounded-lg text-xl sm:flex sm:flex-row md:text-2xl ">
          <Link href="https://www.instagram.com/johnathew_k/">
            <AiOutlineInstagram className="transform rounded-lg text-[#583249] duration-500 hover:bg-orange-400 dark:text-[#71fead]" />
          </Link>
          <Link href="https://github.com/johnathew">
            <FiGithub className="transform rounded-lg text-[#583249] duration-500 hover:bg-orange-400 dark:text-[#71fead]" />
          </Link>
        </div>
        <div className="flex h-auto w-auto flex-col rounded-lg text-xl sm:flex sm:flex-row md:text-2xl">
          <Link href="https://www.linkedin.com/in/john-kornegay-00541411b/">
            <CiLinkedin className="transform rounded-lg text-[#583249] duration-500 hover:bg-orange-400 dark:text-[#71fead]" />
          </Link>
          {darkMode && (
            <IoIosSunny
              onClick={() => setDarkMode((prev) => !prev)}
              className="transform rounded-lg text-[#583249] duration-500 hover:cursor-pointer hover:bg-orange-400 dark:text-[#71fead]"
            />
          )}
          {!darkMode && (
            <BsSun
              onClick={() => setDarkMode((prev) => !prev)}
              className="transform rounded-lg text-[#583249] duration-500 hover:cursor-pointer hover:bg-orange-400 dark:text-[#71fead]"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
