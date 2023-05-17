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
  handleClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
};

const Header = ({
  darkMode,
  setDarkMode,
  setPageView,
  pageView,
  handleClick
}: HeaderTypes) => {
  return (
    <header
      className={`flex justify-center ${
        darkMode ? "dark" : ""
      } md:text-md absolute z-50 h-auto w-full items-center bg-[#00213d] p-1 font-serif text-white drop-shadow-2xl sm:justify-around md:w-full`}
    >
      <div className="flex items-center space-x-1 sm:space-x-1">
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
          } drop-shadow-md `}
          onClick={() => setPageView((prev) => !prev)}
          disabled={!pageView}
        >
          Blog
        </button>
      </div>
      <nav>
        <ul className="-mx-6 my-auto flex items-center space-x-1 text-[10px] sm:space-x-4 sm:text-base sm:font-medium sm:tracking-wide">
          <li id="About" className="underline-offset-2 hover:underline enabled:text-[#71fead]" onClick={(e) => handleClick(e) }>About</li>{" "}
          <span>|</span>
          <div className="flex gap-2 items-center">
            <li id="Job History" className="underline-offset-2 hover:underline ml-1 w-auto" onClick={(e) => handleClick(e)} >Job History</li>
            <span>|</span>
          </div>
          <li id="Projects" className="underline-offset-2  hover:underline" onClick={(e) => handleClick(e)}>Projects</li>
        </ul>
      </nav>
      <div className="ml-2 flex h-10 w-auto items-center space-x-1 rounded-lg p-4 text-xl">
        <Link href="https://www.instagram.com/johnathew_k/">
          <AiOutlineInstagram className="transform rounded-lg text-[#71fead] duration-500 hover:bg-orange-400" />
        </Link>
        <Link href="https://github.com/johnathew">
          <FiGithub className="transform rounded-lg text-[#71fead] duration-500 hover:bg-orange-400" />
        </Link>
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
    </header>
  );
};

export default Header;
