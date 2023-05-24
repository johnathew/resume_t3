import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
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
      className={`flex justify-start sm:justify-center ${
        darkMode ? "dark" : ""
      } md:text-md absolute z-50 h-fit w-full items-center bg-[#00213d] p-1 text-white drop-shadow-2xl sm:justify-around md:w-full`}
    >
      <div className="flex items-center gap-1 sm:space-x-1 md:space-x-1">
        <button
          className={`md:align-center h-auto rounded-lg bg-[#71fead] p-1 text-black ${
            pageView ? "border-2 border-black" : ""
          } drop-shadow-md `}
          onClick={() => setPageView((prev) => !prev)}
          disabled={pageView}
        >
          Resume
        </button>
        <button
          className={`md:align-center w-auto rounded-lg bg-[#437e60] p-1 ${
            !pageView ? "border-2 border-black" : ""
          } text-black drop-shadow-md `}
          onClick={() => setPageView((prev) => !prev)}
          disabled={!pageView}
        >
          Blog
        </button>
      </div>
      <nav className="flex text-[10px]">
        <ul className="my-auto flex w-1/4 space-x-1 pr-7 items-center sm:space-x-4 sm:text-base sm:font-thin sm:tracking-wide">
          <li
            id="About"
            className="underline-offset-2 hover:cursor-pointer hover:underline hover:text-[#71fead]"
            onClick={(e) => handleClick(e)}
          >
            About
          </li>{" "}
          <span>|</span>
          <div className="mx-1 w-auto items-center flex gap-2 sm:gap-2 break-normal">
            <li
              id="Job History"
              className="ml-1 w-auto underline-offset-2 hover:cursor-pointer hover:underline hover:text-[#71fead]"
              onClick={(e) => handleClick(e)}
            >
              Job&nbsp;History
            </li>
            <span>|</span>
          </div>
          <li
            id="Projects"
            className="underline-offset-2  hover:cursor-pointer hover:underline hover:text-[#71fead]"
            onClick={(e) => handleClick(e)}
          >
            Projects
          </li>
        </ul>
      </nav>
      <div className="flex h-auto w-auto items-center rounded-lg text-xl sm:px-1">
        <div className="flex h-auto w-auto flex-col rounded-lg text-xl sm:flex sm:flex-row md:text-2xl">
          <Link href="https://www.instagram.com/johnathew_k/">
            <AiOutlineInstagram className="transform rounded-lg text-[#71fead] duration-500 hover:bg-orange-400" />
          </Link>
          <Link href="https://github.com/johnathew">
            <FiGithub className="transform rounded-lg text-[#71fead] duration-500 hover:bg-orange-400" />
          </Link>
        </div>
        <div className="flex h-auto w-auto flex-col rounded-lg text-xl sm:flex sm:flex-row  md:text-2xl">
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
