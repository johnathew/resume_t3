import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

import { AiOutlineInstagram } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoIosSunny } from "react-icons/io";

type HeaderTypes = {
  darkMode: boolean;
  pageView: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  setPageView: Dispatch<SetStateAction<boolean>>;
  handleClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

const Header = ({
  darkMode,
  setDarkMode,
  setPageView,
  pageView,
  handleClick,
}: HeaderTypes) => {
  return (
    <header
      className={`flex justify-around md:justify-around ${
        darkMode ? "dark" : ""
      } md:text-md absolute z-50 h-fit w-screen items-center border-b-[1px] border-black bg-[#00213d] p-2 text-white drop-shadow-2xl sm:justify-around md:w-full`}
    >
      <div className="flex items-center gap-1 sm:space-x-1 md:justify-center md:space-x-1">
        <button
          className={`md:align-center h-auto rounded-lg bg-[#71fead] p-1 text-sm text-black md:text-lg ${
            pageView ? "border-2 border-black" : ""
          } drop-shadow-md`}
          onClick={() => setPageView((prev) => !prev)}
          disabled={pageView}
        >
          Resume
        </button>
        <button
          className={`md:align-center w-auto rounded-lg bg-[#437e60] p-1  text-sm md:text-lg ${
            !pageView ? "border-2 border-black" : ""
          } text-black drop-shadow-md `}
          onClick={() => setPageView((prev) => !prev)}
          disabled={!pageView}
        >
          Blog
        </button>
      </div>
      <nav className="-ml-4 flex text-[11px] md:ml-0 md:mr-0 md:w-auto md:items-center">
        <ul className="my-auto mr-3 flex w-1/4 space-x-1 sm:space-x-4 sm:text-base sm:font-thin sm:tracking-wide">
          <li
            id="About"
            className="underline-offset-2 hover:cursor-pointer hover:text-[#71fead] hover:underline"
            onClick={(e) => handleClick(e)}
          >
            About
          </li>{" "}
          <span>|</span>
          <div className="mx-1 flex w-auto items-center gap-2 break-normal sm:gap-2">
            <li
              id="Job History"
              className="ml-1 w-auto underline-offset-2 hover:cursor-pointer hover:text-[#71fead] hover:underline"
              onClick={(e) => handleClick(e)}
            >
              Job&nbsp;History
            </li>
            <span>|</span>
          </div>
          <li
            id="Projects"
            className="underline-offset-2  hover:cursor-pointer hover:text-[#71fead] hover:underline"
            onClick={(e) => handleClick(e)}
          >
            Projects
          </li>
        </ul>
      </nav>
      <div className="relative flex h-auto w-auto rounded-lg text-xl sm:px-1 md:mr-0 md:space-x-2">
        <div className="flex h-auto w-auto flex-col rounded-lg text-xl sm:flex sm:flex-row md:space-x-2 md:text-2xl">
          <Link href="https://www.instagram.com/johnathew_k/">
            <AiOutlineInstagram className="transform rounded-lg text-[#71fead] duration-500 hover:bg-orange-400" />
          </Link>
          <Link href="https://github.com/johnathew">
            <FiGithub className="transform rounded-lg text-[#71fead] duration-500 hover:bg-orange-400" />
          </Link>
        </div>
        <div className="flex h-auto w-auto flex-col rounded-lg text-xl sm:flex sm:flex-row  md:space-x-2 md:text-2xl">
          <Link href="https://www.linkedin.com/in/john-kornegay-00541411b/">
            <CiLinkedin className="transform rounded-lg text-[#71fead] duration-500 hover:bg-orange-400" />
          </Link>
          {darkMode && (
            <IoIosSunny
              onClick={() => setDarkMode((prev) => !prev)}
              className="transform rounded-lg text-[#71fead] duration-500 hover:cursor-pointer hover:bg-orange-400"
            />
          )}
          {!darkMode && (
            <BsSun
              onClick={() => setDarkMode((prev) => !prev)}
              className="transform rounded-lg text-[#71fead] duration-500 hover:cursor-pointer hover:bg-orange-400"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
